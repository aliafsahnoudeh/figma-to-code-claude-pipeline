import fs from "fs";
import os from "os";
import path from "path";

const pwd = process.cwd();
const home = os.homedir();
const templatePath = path.join(".claude", "settings.example.json");
const outputPath = path.join(".claude", "settings.local.json");
const dashboardDir = path.join(".claude", "dashboard");

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

  // Merge MCP servers from template (skip any already configured by the user)
  const templateMcp = template.mcpServers ?? {};
  result.mcpServers = { ...(existing.mcpServers ?? {}) };

  if (Object.keys(templateMcp).length > 0) {
    console.log("\n🔌 Configuring MCP servers...");

    for (const [name, config] of Object.entries(templateMcp)) {
      if (name in (existing.mcpServers ?? {})) {
        console.log(`   ✓ ${name}: already configured — skipping`);
        continue;
      }
      result.mcpServers[name] = config;
      console.log(`   ✅ ${name}: added`);
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
