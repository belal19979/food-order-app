import { Order } from "@/types/order";
import { OrderStatus } from "@/generated/prisma";

export const STATUS_VALUES = Object.values(OrderStatus);

export const SORT_KEYS = [
  "date_desc",
  "date_asc",
  "total_desc",
  "total_asc",
] as const;
export type SortKey = (typeof SORT_KEYS)[number];
export const DEFAULT_SORT: SortKey = "date_desc";

function byDateDesc(a: Order, b: Order) {
  return +new Date(b.createdAt) - +new Date(a.createdAt);
}
function byDateAsc(a: Order, b: Order) {
  return +new Date(a.createdAt) - +new Date(b.createdAt);
}
function byTotalAsc(a: Order, b: Order) {
  const ta = a.total ?? +Infinity;
  const tb = b.total ?? +Infinity;
  return ta - tb;
}

function byTotalDesc(a: Order, b: Order) {
  const ta = a.total ?? +Infinity;
  const tb = b.total ?? +Infinity;
  return tb - ta;
}

export function getComparison(sort: SortKey): (a: Order, b: Order) => number {
  switch (sort) {
    case "date_asc":
      return byDateAsc;
    case "total_desc":
      return byTotalDesc;
    case "total_asc":
      return byTotalAsc;
    case "date_desc":
    default:
      return byDateDesc;
  }
}

export function getLabel(k: SortKey): string {
  switch (k) {
    case "date_desc":
      return "Date (Newest → Oldest)";
    case "date_asc":
      return "Date (Oldest → Newest)";
    case "total_desc":
      return "Total (High → Low)";
    case "total_asc":
      return "Total (Low → High)";
    default: {
      const _exhaustive: never = k;
      return _exhaustive;
    }
  }
}
