# Usage & Examples

This file contains the most common developer patterns you will use in this template.

File-based routing

- Create a file under `src/app/` and the route becomes available automatically.

Example: `helloItems`

```tsx
// src/app/helloItems.tsx
import { Card } from '../shared/components/ui/Card';
import { useHelloItems } from '../shared/hooks/useHelloItems';

export default function HelloItemsPage() {
  const { data, isLoading } = useHelloItems();
  if (isLoading) return <div>Loading…</div>;
  return (
    <div>
      {data?.map(i => (
        <Card key={i.id}>{i.name}</Card>
      ))}
    </div>
  );
}
```

Data fetching

- Use TanStack Query hooks placed in `src/shared/hooks/` to encapsulate API logic.
- Keep HTTP clients in `src/shared/lib/api` and add Zod schemas for runtime validation.

Testing

- Unit & component tests live next to components (e.g. `shared/components/ui/Button.test.tsx`).
- Run tests with `pnpm test`.
