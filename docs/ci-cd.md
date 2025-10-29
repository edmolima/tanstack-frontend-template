# CI / CD

This project includes example GitHub Actions workflows in `.github/workflows/`.

Workflows included

- `ci.yml` — runs on push and PR to `main`. Installs dependencies, builds, and runs tests.
- `deploy-vercel.yml` — runs on push to `main` and deploys using the Vercel CLI.

Required secrets for Vercel deploy

- `VERCEL_TOKEN` — create at [Vercel tokens](https://vercel.com/account/tokens) and add to GitHub Secrets.
- Optionally `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` if you prefer explicit targeting.

Recommendations

- For stable builds add a Node matrix and pin versions in the CI workflow.
- Use protected branches for `main` and require CI to pass before merging.
