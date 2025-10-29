import { z } from 'zod';

// Mock data schemas
export const HelloItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(['active', 'pending', 'completed']),
  createdAt: z.string(),
});

export type HelloItem = z.infer<typeof HelloItemSchema>;

// Mock data
export const mockHelloItems: HelloItem[] = [
  {
    id: '1',
    title: 'Welcome to Frontend Template',
    description: 'A modern React template with TanStack Router, Query, Zod validation, and Tailwind CSS',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'TanStack Query Integration',
    description: 'Powerful data fetching and caching with React Query',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Zod Schema Validation',
    description: 'Type-safe runtime validation for your API responses',
    status: 'completed',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Axios with Interceptors',
    description: 'Configured HTTP client with request/response interceptors',
    status: 'completed',
    createdAt: new Date().toISOString(),
  },
];

// Simulate API call
export const fetchHelloItems = async (): Promise<HelloItem[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Validate mock data
  return z.array(HelloItemSchema).parse(mockHelloItems);
};
