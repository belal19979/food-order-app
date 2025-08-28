import type { OrderStatus } from "@/generated/prisma";

export const STATUS_META = {
  PENDING: { label: "Pending", color: "default" },
  PROCESSING: { label: "Processing", color: "info" },
  SHIPPED: { label: "Shipped", color: "warning" },
  DELIVERED: { label: "Delivered", color: "success" },
  CANCELLED: { label: "Cancelled", color: "error" },
} as const satisfies Record<
  OrderStatus,
  { label: string; color: "default" | "info" | "warning" | "success" | "error" }
>;
