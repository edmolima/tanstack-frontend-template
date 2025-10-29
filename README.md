# TanStack Frontend Template

**Build faster. Ship safer. Iterate fearlessly.**

A production-ready React starter built for teams and prototypes. Minimal conventions, maximum clarity — everything you need to move from zero to deployed in minutes.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

## Why this template

- **⚡ Move fast.** Vite's HMR and pre-configured tooling mean instant feedback. No waiting for builds.
- **🛡️ Type everything.** TypeScript + Zod catch errors before they reach users. Routes, API responses, state—all typed end-to-end.
- **🎯 Clear by default.** File-based routing, modular structure, and reusable hooks. No hidden complexity.
- **✅ Ready to test.** Vitest and Testing Library are wired in. Testing is frictionless.
- **🚀 Deploy anywhere.** GitHub Actions + Vercel configs included. Push tags, watch it deploy.

## Get started in 2 minutes

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173` and start building.

For a deeper setup walkthrough, see [docs/getting-started.md](docs/getting-started.md).

## Learn by doing

- **Add a route?** Drop a file in `src/app/`. It's automatic.
- **Fetch data?** Use hooks in `src/shared/hooks/` backed by TanStack Query.
- **Need a component?** Build it in `src/shared/components/`. Tailwind + TypeScript, ready to go.
- **Write tests?** Co-locate `.test.tsx` files. Run `pnpm test`.

See [docs/usage.md](docs/usage.md) for copy-paste examples.

## Stack

| What | Tool |
|------|------|
| Frontend | React 19 + TypeScript |
| Routing | TanStack Router (file-based) |
| Data | TanStack Query + Axios |
| Styling | Tailwind CSS v4 |
| Testing | Vitest + Testing Library |
| Build | Vite 7 |
| Validation | Zod |

## Documentation

- **[Getting Started](docs/getting-started.md)** — Install, run, build.
- **[Usage & Examples](docs/usage.md)** — Patterns, components, hooks.
- **[Architecture](docs/architecture.md)** — How the project is organized.
- **[CI / CD](docs/ci-cd.md)** — GitHub Actions and Vercel setup.
- **[Contributing](docs/contributing.md)** — How to improve this template.

## Next steps

1. Clone or fork this template.
2. Run `pnpm install && pnpm dev`.
3. Open a file in `src/app/` and start editing.
4. When ready, tag a release (`git tag v1.0.0 && git push origin v1.0.0`) to deploy.

## FAQ

**Can I use npm or yarn?**  
Yes. This template works with any package manager. We default to `pnpm` for speed and disk space.

**What about styling?**  
Tailwind CSS v4 is pre-configured. Utility-first approach, fully customizable via `tailwind.config.ts`.

**How do I add an API?**  
Add a schema and fetch function to `src/shared/lib/api/`. Create a hook in `src/shared/hooks/`. Import and use it in your component.

**Is this for beginners?**  
Yes and no. You should know React basics. The template itself is learner-friendly—clear file structure, simple conventions, example code everywhere.

---

Questions? Found a bug? [Open an issue](https://github.com/edmolima/tanstack-frontend-template/issues) or submit a PR.
