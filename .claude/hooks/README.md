# Claude Code Hooks

Hooks are shell commands that Claude Code runs automatically at lifecycle events.
They receive context via **stdin as JSON** — the exact shape varies by event type.

## Hook events

| Event          | Triggered                       |
| -------------- | ------------------------------- |
| `PreToolUse`   | Before a tool call executes     |
| `PostToolUse`  | After a tool call completes     |
| `Stop`         | When Claude finishes responding |
| `Notification` | On agent notifications          |

## Debugging — log stdin

When writing a new hook, the first step is always to inspect what stdin looks like.
Add these temporary entries to `settings.local.json` to capture the raw payloads:

```jsonc
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "*",
        "hooks": [{ "type": "command", "command": "jq . > pre-log.json" }],
      },
    ],
    "PostToolUse": [
      {
        "matcher": "*",
        "hooks": [{ "type": "command", "command": "jq . > post-log.json" }],
      },
    ],
  },
}
```

> `pre-log.json` and `post-log.json` are gitignored — safe to leave on disk while iterating.

After triggering the hook, open the log file to inspect the JSON shape, then write your real hook against those fields.

### Example — PostToolUse payload (Write tool)

```json
{
  "tool_name": "Write",
  "tool_input": { "file_path": "src/foo.ts", "content": "..." },
  "tool_response": { "filePath": "src/foo.ts" }
}
```

### Example — PreToolUse payload (Bash tool)

```json
{
  "tool_name": "Bash",
  "tool_input": { "command": "pnpm test", "description": "Run all tests" }
}
```

## Hooks shipped in this repo

| File           | Purpose                                                         |
| -------------- | --------------------------------------------------------------- |
| `read_hook.js` | Guards `Read` / `Grep` — blocks reads of `.env` files           |
| `tsc.js`       | Runs TypeScript type-check after every Write/Edit on a `.ts(x)` |

The Prettier auto-format step is configured inline in `settings.example.json` (no separate script).

## Notes

- Use `settings.local.json` (gitignored) for personal / debug hooks.
- Use `settings.example.json` (committed) for shared hooks the whole team should use. Bootstrap a `settings.local.json` from it via `node scripts/init-claude.js`.
- Hooks that exit non-zero block the tool call (PreToolUse) or surface an error to the model (PostToolUse).
- The `timeout` field (seconds) defaults to 60. Long-running hooks should set it explicitly.
