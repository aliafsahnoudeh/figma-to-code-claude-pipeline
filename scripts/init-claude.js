import fs from "fs";
import os from "os";
import path from "path";
import net from "net";
import { URL } from "url";

const pwd = process.cwd();
const home = os.homedir();
const templatePath = path.join(".claude", "settings.example.json");
const outputPath = path.join(".claude", "settings.local.json");
const dashboardDir = path.join(".claude", "dashboard");

// Check if a TCP port is reachable within the given timeout
function checkPort(host, port, timeout = 2000) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let resolved = false;
    const done = (result) => {
      if (!resolved) {
        resolved = true;
        socket.destroy();
        resolve(result);
      }
    };
    socket.setTimeout(timeout);
    socket.on("connect", () => done(true));
    socket.on("timeout", () => done(false));
    socket.on("error", () => done(false));
    socket.connect(port, host);
  });
}

// Extract host and port from a postgresql:// URL inside an args array
function parsePostgresEndpoint(args) {
  const urlArg = (args ?? []).find((a) => a.startsWith("postgresql://"));
  if (!urlArg) return null;
  try {
    const parsed = new URL(urlArg);
    return {
      host: parsed.hostname || "localhost",
      port: parseInt(parsed.port || "5432", 10),
    };
  } catch {
    return null;
  }
}

async function main() {
  // Read template
  let templateContent;
  try {
    templateContent = fs.readFileSync(templatePath, "utf8");
  } catch (e) {
    if (e.code === "ENOENT") {
      console.error(`❌ Could not find ${templatePath}`);
      console.error("   Run this script from the project root directory.");
    } else {
      console.error("❌ Error reading template:", e.message);
    }
    process.exit(1);
  }

  // Replace $PWD placeholder with the actual working directory
  const processed = templateContent.replace(/\$PWD/g, pwd);
  let template;
  try {
    template = JSON.parse(processed);
  } catch (e) {
    console.error("❌ Invalid JSON in template after processing:", e.message);
    process.exit(1);
  }

  // Load existing settings.local.json as the base (if present)
  let existing = {};
  if (fs.existsSync(outputPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(outputPath, "utf8"));
      console.log("📄 Found existing settings.local.json — merging...");
    } catch {
      console.warn(
        "⚠️  Could not parse existing settings.local.json — starting fresh",
      );
    }
  }

  // Build result starting from existing config
  const result = JSON.parse(JSON.stringify(existing));

  // Always apply hooks from template (project-managed, not user-customised)
  if (template.hooks) {
    result.hooks = template.hooks;
    console.log("🔧 Hooks updated from template");
  }

  // Merge permissions.allow as a union (keep any user-added rules)
  const existingAllow = existing?.permissions?.allow ?? [];
  const templateAllow = template?.permissions?.allow ?? [];
  result.permissions = {
    ...(existing.permissions ?? {}),
    allow: [...new Set([...existingAllow, ...templateAllow])],
  };

  // Conditionally apply MCP servers based on database reachability
  const templateMcp = template.mcpServers ?? {};
  result.mcpServers = { ...(existing.mcpServers ?? {}) };

  if (Object.keys(templateMcp).length > 0) {
    console.log("\n🔌 Checking database connectivity for MCP servers...");

    for (const [name, config] of Object.entries(templateMcp)) {
      if (name in (existing.mcpServers ?? {})) {
        console.log(`   ✓ ${name}: already configured — skipping`);
        continue;
      }

      const endpoint = parsePostgresEndpoint(config.args);
      if (!endpoint) {
        result.mcpServers[name] = config;
        console.log(`   ✅ ${name}: added`);
        continue;
      }

      const reachable = await checkPort(endpoint.host, endpoint.port);
      if (reachable) {
        result.mcpServers[name] = config;
        console.log(
          `   ✅ ${name}: database reachable at ${endpoint.host}:${endpoint.port} — added`,
        );
      } else {
        console.log(
          `   ⏭️  ${name}: database not reachable at ${endpoint.host}:${endpoint.port} — skipped`,
        );
        console.log(`      Re-run this script once the database is running`);
      }
    }
  }

  // Ensure .claude/ directory exists and write result
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2) + "\n", "utf8");

  console.log(`\n✅ ${outputPath} updated`);
  console.log(`   $PWD resolved to: ${pwd}`);

  // Create .claude/dashboard/ with symlinks to user-specific config and memory
  fs.mkdirSync(dashboardDir, { recursive: true });

  // Claude Code derives the memory slug from the absolute project path:
  //   /Users/foo/projects/bar  →  -Users-foo-projects-bar
  const memorySlug = pwd.replace(/\//g, "-");
  const symlinks = {
    "global-state.json": path.join(home, ".claude.json"),
    "user-settings.json": path.join(home, ".claude", "settings.json"),
    memory: path.join(home, ".claude", "projects", memorySlug, "memory"),
  };

  console.log("\n📂 Dashboard symlinks:");
  for (const [name, target] of Object.entries(symlinks)) {
    const linkPath = path.join(dashboardDir, name);
    if (fs.existsSync(linkPath)) {
      console.log(`   ✓ ${name}: already exists — skipping`);
      continue;
    }
    if (!fs.existsSync(target)) {
      console.log(`   ⏭️  ${name}: target not found (${target}) — skipped`);
      continue;
    }
    fs.symlinkSync(target, linkPath);
    console.log(`   ✅ ${name}: linked → ${target}`);
  }
}

main().catch((e) => {
  console.error("❌ Unexpected error:", e.message);
  process.exit(1);
});
