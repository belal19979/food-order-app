// server-only: you import this in your route handler
import { z } from "zod";

export const CreateOrderSchema = z.object({
  customerName: z.string().min(1),
  customerPhone: z.string().min(1),
  customerEmail: z.string().email().optional(),
  deliveryAddress: z.string().min(1),
  deliveryNote: z.string().optional(),

  items: z
    .array(
      z.object({
        foodId: z.string().cuid(),
        quantity: z.number().int().min(1),
      })
    )
    .min(1),
});

export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;
