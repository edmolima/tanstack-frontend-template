# Architecture & Project Structure

Folders you will use most often

- `src/app/` — file-based routes (each file becomes a route)
- `src/shared/components/` — UI and layout components
- `src/shared/hooks/` — reusable hooks (data, UI behavior)
- `src/shared/lib/api/` — HTTP clients, mock-data and schemas

Principles

- Keep components small and composable.
- Centralize remote data access in `shared/lib/api` and validate responses with Zod.
- Prefer hooks for data and imperative logic; keep presentation in components.

DX tips

- Use your editor's TypeScript tooling — types are your fastest feedback loop.
- Add small mock modules in `shared/lib/api` to prototype UI without backend.
