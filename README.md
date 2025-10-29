<div align="center">

# TanStack Frontend Template

A production-ready React template with type safety and file-based routing

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TanStack](https://img.shields.io/badge/TanStack-Router%20%2B%20Query-FF4154)](https://tanstack.com/)

</div>

## ✨ Features

- **🚀 Lightning Fast** - Vite for instant HMR and optimized builds
- **📁 File-based Routing** - Intuitive routing with TanStack Router
- **🔄 Smart Data Fetching** - TanStack Query with built-in caching and devtools
- **✅ Type-Safe Everything** - End-to-end type safety with TypeScript + Zod
- **🎨 Modern Styling** - Tailwind CSS v4 with utility-first approach
- **🧪 Testing Ready** - Vitest + Testing Library pre-configured
- **🔌 API Ready** - Axios with interceptors for auth & error handling
- **🛠️ Mock Data** - Example mock data patterns for rapid development
- **📦 Modular Architecture** - Clean separation of concerns with `shared/` structure

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Language** | TypeScript 5.7 |
| **Build Tool** | Vite 7 |
| **Routing** | TanStack Router |
| **Data Fetching** | TanStack Query |
| **Styling** | Tailwind CSS v4 |
| **HTTP Client** | Axios |
| **Validation** | Zod |
| **Testing** | Vitest + Testing Library |

## 📂 Project Structure

```
src/
├── app/                      # 📁 File-based routes
│   ├── __root.tsx           # Root layout with navigation
│   ├── index.tsx            # Home page (/)
│   └── about.tsx            # About page (/about)
│
├── shared/                   # 📦 Shared resources
│   ├── components/
│   │   ├── ui/              # Reusable UI components (Button, Card)
│   │   └── layout/          # Layout components (Nav, Footer)
│   ├── lib/
│   │   ├── api/             # API client, schemas, mock data
│   │   ├── query/           # TanStack Query configuration
│   │   └── router/          # Router configuration
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions
│   └── styles/              # Global CSS (Tailwind)
│
└── test/                     # 🧪 Test configuration
    └── setup.ts             # Vitest setup
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test              # Watch mode
npm run test:ui       # Open Vitest UI
npm run test:run      # Run once
```

The dev server runs at `http://localhost:3000` with hot module replacement (HMR).

## 📖 Usage Guide

### Creating a New Route

File-based routing makes adding new pages effortless. Just create a file in `app/`:

```typescript
// app/helloItems.tsx
import { createFileRoute } from '@tanstack/react-router';
import { Card } from '../shared/components/ui/Card';

export const Route = createFileRoute('/hello-items')({
  component: HelloItemsPage,
});

function HelloItemsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Hello Items</h1>
      <Card>Your content here</Card>
    </div>
  );
}
```

**Route is automatically available at** `/hello-items` 🎉

### Adding Data Fetching with Mock Data

<details>
<summary><b>Step 1:</b> Create mock data with Zod validation</summary>

```typescript
// shared/lib/api/hello-items-mock.ts
import { z } from 'zod';

export const HelloItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
});

export type HelloItem = z.infer<typeof HelloItemSchema>;

export const mockHelloItems: HelloItem[] = [
  { id: '1', name: 'Hello A', value: 100 },
  { id: '2', name: 'Hello B', value: 200 },
];

export const fetchHelloItems = async (): Promise<HelloItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return z.array(HelloItemSchema).parse(mockHelloItems);
};
```

</details>

<details>
<summary><b>Step 2:</b> Create a custom hook</summary>

```typescript
// shared/hooks/useHelloItems.ts
import { useQuery } from '@tanstack/react-query';
import { fetchHelloItems } from '../lib/api/hello-items-mock';

export function useHelloItems() {
  return useQuery({
    queryKey: ['helloItems'],
    queryFn: fetchHelloItems,
  });
}
```

</details>

<details>
<summary><b>Step 3:</b> Use in your component</summary>

```typescript
// app/helloItems.tsx
import { useHelloItems } from '../shared/hooks/useHelloItems';

function HelloItemsPage() {
  const { data: helloItems, isLoading, error } = useHelloItems();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {helloItems?.map((item) => (
        <Card key={item.id}>
          <h2>{item.name}</h2>
          <p>${item.value}</p>
        </Card>
      ))}
    </div>
  );
}
```

</details>

### Writing Tests

Testing is pre-configured with Vitest and Testing Library:

```typescript
// shared/components/ui/Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

## 🎯 Design Principles

| Principle | Implementation |
|-----------|----------------|
| **DRY** | Shared components, hooks, and utilities in `shared/` |
| **KISS** | Simple, flat structure - no over-engineering |
| **Type Safety** | TypeScript + Zod for runtime validation |
| **Modularity** | Clear separation of concerns |
| **Scalability** | Easy to extend without refactoring |
| **Developer Experience** | Fast feedback loop with HMR and devtools |

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with TanStack Router plugin
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 🤝 Contributing

This is a template repository. Feel free to fork and customize for your needs!

## License

MIT
