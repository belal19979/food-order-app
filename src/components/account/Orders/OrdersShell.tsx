"use client";

import { Order } from "@/types/order";
import { useMemo } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { OrderCard } from "./OrderCard";
import { GenericDropDown } from "@/components/Menu/FilterBar/GenericDropDown";
import { getComparison, getLabel } from "@/utils/sortOrder";
import { useSort } from "./hooks/useSort";
import { useOrderStatus } from "./hooks/useOrderStatus";
import { OrderStatusFilter } from "./OrderStatusFilter";
import { DEFAULT_SORT, SORT_KEYS } from "@/utils/sortOrder";

export const OrdersShell = ({ orders }: { orders: Order[] }) => {
  const { sort, updateSort } = useSort();
  const { status } = useOrderStatus();

  const filteredAndSorted = useMemo(() => {
    const filtered = orders.filter((o) => status === "" || o.status === status);
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
      <Box display="flex" justifyContent="space-between">
        <OrderStatusFilter />
        <GenericDropDown
          options={SORT_KEYS}
          value={sort}
          label="Sort by"
          includeAll={false}
          onChange={(v) => updateSort(v || DEFAULT_SORT)}
          getLabel={getLabel}
        />
      </Box>

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
