# Frontend Template

Simple, maintainable React template with TypeScript, inspired by Next.js App Router.

## Stack

- React 19 + TypeScript
- Vite
- TanStack Router (file-based routing)
- TanStack Query (data fetching)
- Tailwind CSS v4
- Axios + Zod (validation)
- Vitest (testing)

## Structure

```
src/
├── app/                    # File-based routes
│   ├── __root.tsx         # Root layout
│   ├── index.tsx          # Home page (/)
│   └── about.tsx          # About page (/about)
├── shared/                # Shared resources
│   ├── components/        # UI & Layout components
│   │   ├── ui/           # Button, Card, etc.
│   │   └── layout/       # Nav, Footer, etc.
│   ├── lib/              # Core configurations
│   │   ├── api/          # Axios client + Zod schemas
│   │   ├── query/        # TanStack Query setup
│   │   └── router/       # Router configuration
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   └── styles/           # Global CSS
└── test/                 # Test setup files
```

## Quick Start

```bash
npm install
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for production
npm test           # Run tests in watch mode
npm run test:ui    # Open Vitest UI
npm run test:run   # Run tests once
```

## Creating a New Route

1. Create file in `app/` directory:

```typescript
// app/products.tsx
import { createFileRoute } from '@tanstack/react-router';
import { Card } from '../shared/components/ui/Card';

export const Route = createFileRoute('/products')({
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <Card>Your content here</Card>
    </div>
  );
}
```

## Creating a Custom Hook with Mock Data

1. Create mock data in `shared/lib/api/`:

```typescript
// shared/lib/api/products-mock.ts
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;

export const mockProducts: Product[] = [
  { id: '1', name: 'Product A', price: 100 },
  { id: '2', name: 'Product B', price: 200 },
];

export const fetchProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return z.array(ProductSchema).parse(mockProducts);
};
```

2. Create hook in `shared/hooks/`:

```typescript
// shared/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../lib/api/products-mock';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
}
```

3. Use in your route:

```typescript
// app/products.tsx
import { useProducts } from '../shared/hooks/useProducts';

function ProductsPage() {
  const { data: products, isLoading } = useProducts();
  // ... render your UI
}
```

## Key Principles

✅ **Simple** - Easy to understand and maintain
✅ **Modular** - Self-contained modules in `shared/`
✅ **Scalable** - Easy to add features and routes
✅ **Type-safe** - TypeScript + Zod validation everywhere
✅ **DRY & KISS** - Don't Repeat Yourself, Keep It Simple

## Features

- 🚀 File-based routing with TanStack Router
- 📦 Data fetching with TanStack Query
- ✅ Type-safe API validation with Zod
- 🎨 Beautiful UI with Tailwind CSS v4
- 🧪 Testing setup with Vitest
- 🔄 Request/Response interceptors with Axios
- 🛠️ Mock data examples for rapid development

## License

MIT
