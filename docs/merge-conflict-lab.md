# Intentional Git Merge Conflict Lab

This lab creates a real text conflict in `README.md`. Run the commands in order from the project root. Keep the GitHub remote URL as your own repository URL—never share credentials.

## 1. Confirm the starting point

The project should already have its initial commit on `main` and be pushed to GitHub as described in the README.

```bash
git status
git switch main
git pull origin main
```

If `git status` reports uncommitted changes, commit or safely stash them before continuing.

## 2. Create and commit branch one

The exact sentence we will edit is:

> This dashboard uses illustrative sample data for learning Git workflows.

Create branch one and replace that sentence in the README with the first version below:

> This dashboard uses fictional sample data for demonstrating app growth metrics.

```bash
git switch -c feature/sample-data-copy
```

Edit `README.md` in VS Code, save, then:

```bash
git diff
git add README.md
git commit -m "Update dashboard data description"
git push -u origin feature/sample-data-copy
```

## 3. Create branch two from main and edit the same sentence

Return to `main` so this branch starts from the original sentence, not branch one's edit:

```bash
git switch main
git pull origin main
git switch -c feature/assignment-copy
```

In `README.md`, replace the **same original sentence** with a different version:

> This dashboard contains fictional metrics for a hands-on version-control assignment.

Save and commit the change:

```bash
git diff
git add README.md
git commit -m "Clarify sample data for assignment"
git push -u origin feature/assignment-copy
```

## 4. Merge the first branch, then trigger the conflict

```bash
git switch main
git merge feature/sample-data-copy
git push origin main
git merge feature/assignment-copy
```

The last command should report a conflict in `README.md`. Capture a screenshot now showing the conflict in VS Code, including the `<<<<<<<`, `=======`, and `>>>>>>>` markers. Also run:

```bash
git status
git diff
```

Capture `git status` in your screenshot or a second screenshot.

## 5. Resolve it manually

Open `README.md`. Replace the entire conflict block—including all marker lines—with the final sentence you choose. For example:

> This dashboard uses fictional sample data to demonstrate app growth metrics and Git workflows.

Save the file, then inspect and commit the resolution:

```bash
git diff
git status
git add README.md
git commit -m "Resolve README merge conflict"
git push origin main
git status
```

The last status should say the working tree is clean. Capture a screenshot of the final README sentence and clean status. The merged branches can remain in the repository as evidence of the work.

## What caused the conflict?

Both branches started from the same `main` version and changed the same line in different ways. Git could not safely decide which wording represented the intended final result, so it asked a person to choose or combine the edits. The conflict is about overlapping text, not a damaged repository.

## Reflection prompts (1–2 pages)

1. What were the base branch and the two feature branches?
2. Which exact line changed on both branches, and why did Git flag it?
3. What did `git status` and `git diff` tell you during the conflict?
4. How did you choose the final wording and verify the markers were removed?
5. What did branch isolation, merging, and pushing teach you about distributed version control?
6. What would you do differently when collaborating on a shared file next time?
