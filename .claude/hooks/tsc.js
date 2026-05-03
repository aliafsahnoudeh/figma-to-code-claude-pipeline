import { spawnSync } from "child_process";
import path from "path";
import fs from "fs";

async function readInput() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString());
}

// Map a written file to its sub-project directory (relative to repo root).
// Returns null if the file doesn't belong to a TypeScript project we check.
function detectProject(filePath) {
  const abs = path.resolve(filePath);
  for (const dir of ["web", "design-system"]) {
    if (abs.includes(`/${dir}/`)) return dir;
  }
  return null;
}

async function main() {
  const input = await readInput();
  const file = input.tool_response?.filePath ?? input.tool_input?.file_path;

  if (!file || !/\.(ts|tsx)$/.test(file)) process.exit(0);

  const projectDir = detectProject(file);
  if (!projectDir) process.exit(0);

  const tscBin = path.resolve(projectDir, "node_modules/.bin/tsc");
  const tsconfigPath = path.resolve(projectDir, "tsconfig.json");

  if (!fs.existsSync(tscBin) || !fs.existsSync(tsconfigPath)) process.exit(0);

  const result = spawnSync(tscBin, ["--project", tsconfigPath], {
    cwd: path.resolve(projectDir),
    encoding: "utf8",
  });

  const output = ((result.stdout ?? "") + (result.stderr ?? "")).trim();
  if (result.status !== 0 && output) {
    console.error(output);
    process.exit(2);
  }
}

main();
