import { z } from 'zod';

// Generic API response wrapper
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    message: z.string().optional(),
    success: z.boolean(),
  });

// Paginated response
export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    data: z.array(itemSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }),
    success: z.boolean(),
  });

// API Error
export const ApiErrorSchema = z.object({
  message: z.string(),
  statusCode: z.number(),
  errors: z.record(z.string(), z.array(z.string())).optional(),
});

// Types
export type ApiError = z.infer<typeof ApiErrorSchema>;
