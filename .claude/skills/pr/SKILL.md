---
name: pr
description: Create a pull request with project conventions, summarising all commits since diverging from main.
disable-model-invocation: true
allowed-tools: Bash, Read, Grep, Glob
---

Create a pull request for the current branch against `main`.

## Process

1. Run these in parallel:
   - `git status` (never use `-uall`)
   - `git diff` and `git diff --cached`
   - `git branch --show-current`
   - `git log main..HEAD --oneline`
   - `git diff main...HEAD --stat`
   - `git remote -v`

2. If there are uncommitted changes, ask whether to commit them first (using `/commit`) or proceed without them.

3. Analyze ALL commits in the branch to understand the full scope. Read changed files when needed.

4. Derive the PR title:
   - Branches with a ticket prefix (e.g. `PROJ-123-add-search`) → scope `PROJ-123`
   - Format: `<type>(scope): short description` — same Conventional Commits style as `/commit`
   - Under 70 characters

5. Push the branch if needed:

   ```bash
   git push -u origin HEAD
   ```

6. Create the PR with `gh`:

   ```bash
   gh pr create --title "the title" --body "$(cat <<'EOF'
   ## Summary
   - What was done and why (1-3 bullets covering ALL commits)

   ## Changes
   - Grouped by area (backend, frontend, Design System) when multiple areas are touched
   - Mention key files / components

   ## Test plan
   - [ ] How to verify the changes work
   - [ ] Edge cases to check
   EOF
   )"
   ```

7. Return the PR URL.

## Rules

- Always analyse ALL commits in the branch, not just the latest
- PR title follows Conventional Commits with the derived scope
- Summary explains the why; Changes section explains the what
- Never force-push
- If targeting a branch other than `main`, the user must specify it explicitly
