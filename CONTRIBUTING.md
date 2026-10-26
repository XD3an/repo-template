# Contributing Guide

Thanks for taking the time to contribute! Please read this guide first.

## Reporting Issues

- Search [existing issues](https://github.com/OWNER/REPO/issues) first to avoid duplicates.
- Use the issue template and include reproduction steps, expected behavior, actual behavior, and environment details.

## Development Workflow

```bash
git clone https://github.com/OWNER/REPO.git
cd REPO
npm install
npm test
```

1. Branch off `main`: use `feature/xxx` or `fix/xxx`.
2. Keep commits atomic; follow [Conventional Commits](https://www.conventionalcommits.org/).
3. Make sure `npm test` and `npm run lint` pass.
4. Open a Pull Request and link the related issue in the description.

## Commit Message Format

```
<type>(<scope>): <subject>

feat:     a new feature
fix:      a bug fix
docs:     documentation only
style:    formatting (no logic change)
refactor: code change that neither fixes a bug nor adds a feature
test:     adding or updating tests
chore:    tooling / maintenance
```

## Pull Request Checklist

- [ ] Code passes lint and tests
- [ ] Related documentation updated
- [ ] Tests added/updated (if applicable)
- [ ] PR description clearly explains the change and its motivation
