# App Growth Snapshot

A small static dashboard for demonstrating app acquisition metrics and a beginner Git/GitHub workflow. It uses plain HTML, CSS, and JavaScript—no dependencies or build step.

> This dashboard uses fictional sample data for demonstrating app growth metrics.
>
> Every performance and audience value shown is fictional; it is not a claim about a real app, advertiser, or market statistic.

## View the dashboard

Open `index.html` in a browser. In VS Code, you can also right-click `index.html` and choose **Open in Default Browser** if that command is available.

## Start the Git assignment

In the VS Code terminal, make sure the current directory is this project folder, then run:

```bash
git init
git add .
git commit -m "Create app growth snapshot dashboard"
git branch -M main
```

Create a **new empty repository** on GitHub (do not pre-create a README, license, or .gitignore, since this project already contains those files). To connect it, copy its HTTPS URL and replace the placeholder below:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git remote -v
git push -u origin main
```

GitHub sign-in is separate from the remote URL. In VS Code, use the Accounts/profile menu → **Sign in with GitHub** and complete authentication in the browser. Do not put your GitHub password or access token in the URL or in this repository. If Git asks how to authenticate, use the browser sign-in flow or Git Credential Manager.

## Intentional conflict exercise

Follow [docs/merge-conflict-lab.md](docs/merge-conflict-lab.md). It starts two branches from `main`, edits the same README sentence differently, merges one branch, and then creates and resolves the conflict from the second merge.

## Submission checklist

- [ ] GitHub repository link
- [ ] Screenshot of the merge conflict (show conflict markers and `git status`)
- [ ] Screenshot after resolution (show clean status and merged sentence)
- [ ] Final merged code pushed to GitHub
- [ ] 1–2 page reflection describing the cause, resolution, and learning
