import { SortKey } from "@/components";
import { Order } from "@/types/order";

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
  return ta - tb;
}

//syntax of the two functions
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
