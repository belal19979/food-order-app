"use client";

import { Order } from "@/types/order";
import { useMemo } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { OrderCard } from "./OrderCard";
import { GenericDropDown } from "@/components/Menu/FilterBar/GenericDropDown";
import { OrderStatus } from "@/generated/prisma";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getComparison } from "@/utils/sortOrder";

const STATUS_VALUES = Object.values(OrderStatus);
console.log(typeof STATUS_VALUES);

const SORT_KEYS = ["date_desc", "date_asc", "total_desc", "total_asc"] as const;
export type SortKey = (typeof SORT_KEYS)[number];
export const DEFAULT_SORT: SortKey = "date_desc";
const isSortKey = (x: string): x is SortKey =>
  (SORT_KEYS as readonly string[]).includes(x);

export function parseSortParam(raw: string | null | undefined): SortKey {
  if (!raw) return DEFAULT_SORT;
  return isSortKey(raw) ? raw : DEFAULT_SORT;
}
function parseStatusParam(raw: string | null | undefined): OrderStatus | "" {
  if (!raw) return "";
  return STATUS_VALUES.includes(raw.toUpperCase() as OrderStatus)
    ? (raw.toUpperCase() as OrderStatus)
    : "";
}

export const OrdersShell = ({ orders }: { orders: Order[] }) => {
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams();
  const sort = parseSortParam(searchParams?.get("sort"));
  const status = parseStatusParam(searchParams?.get("status"));
  console.log("status from url", status);

  function updateSort(next: SortKey) {
    const params = new URLSearchParams(searchParams?.toString());
    if (next === DEFAULT_SORT) params.delete("sort");
    else params.set("sort", next);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const handleStatusChange = (value: OrderStatus | "") => {
    const params = new URLSearchParams(searchParams?.toString());
    if (!value) params.delete("status");
    else {
      params.set("status", value.toLowerCase());
    }
    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
  };
  const filteredAndSorted = useMemo(() => {
    console.log("status", status);
    const filtered = orders.filter((o) => status === "" || o.status === status);
    console.log("filtered", filtered);
    const cmp = getComparison(sort);
    return [...filtered].sort(cmp);
  }, [orders, status, sort]);

  if (orders.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6">You have no past orders yet.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <GenericDropDown
        options={STATUS_VALUES}
        value={status}
        label="Status"
        onChange={handleStatusChange}
      />
      <GenericDropDown
        options={SORT_KEYS}
        value={sort}
        label="Sort by"
        includeAll={false}
        onChange={(v) => updateSort(v || DEFAULT_SORT)}
        getLabel={(k) =>
          k === "date_desc"
            ? "Date (Newest → Oldest)"
            : k === "date_asc"
              ? "Date (Oldest → Newest)"
              : k === "total_desc"
                ? "Total (High → Low)"
                : "Total (Low → High)"
        }
      />

      <Stack spacing={4} mt={4}>
        {filteredAndSorted.length === 0 && (
          <Typography variant="body1">
            No orders found with status {status}
          </Typography>
        )}
        {filteredAndSorted.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Stack>
    </Container>
  );
};
