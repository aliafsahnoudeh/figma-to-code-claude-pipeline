---
name: commit
description: Create atomic git commits following Conventional Commits with scope derived from branch name.
disable-model-invocation: true
allowed-tools: Bash, Read, Grep, Glob
---

Create atomic git commits for the current changes. If there are multiple logical changes, split them into separate commits — one concern per commit.

## Process

1. Run these in parallel:
   - `git status` (never use `-uall`)
   - `git diff` and `git diff --cached`
   - `git branch --show-current`
   - `git log --oneline -5` (for recent commit-message style)

2. Group changes by logical concern. Each group becomes one atomic commit.

3. Derive the scope from the branch name:
   - `fix/web-auth` → scope `web`
   - Branches with a ticket prefix (e.g. `PROJ-123-feature`) → scope `PROJ-123`
   - Otherwise omit the scope

4. For each atomic commit:
   - Stage only the files for that concern (specific paths, not `git add -A`)
   - Never commit `.env`, credential, or token files — warn if found
   - Write the message in Conventional Commits style:
     - `<type>(scope): <description>`
     - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`
     - Imperative mood, ≤ 72 chars, no period
   - Always pass the message via HEREDOC:

     ```bash
     git commit -m "$(cat <<'EOF'
     type(scope): description

     Optional body explaining the why.
     EOF
     )"
     ```

5. Run `git status` after all commits to verify clean state.

## Rules

- Atomic — one logical change per commit
- Never amend previous commits unless explicitly asked
- Never skip hooks (`--no-verify`)
- Never use `git add -A` or `git add .`
- Never push unless explicitly asked
- If a pre-commit hook fails, fix the issue and create a NEW commit (don't amend)
