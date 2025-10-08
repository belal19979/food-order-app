"use client";

import { Order } from "@/types/order";
import { useMemo } from "react";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { OrderCard } from "./OrderCard";
import { GenericDropDown } from "@/components/Menu/FilterBar/GenericDropDown";
import { getComparison, getLabel } from "@/utils/sortOrder";
import { useSort } from "./hooks/useSort";
import { useOrderStatus } from "./hooks/useOrderStatus";
import { useSearch } from "./hooks/useSearch";
import { OrderStatusFilter } from "./OrderStatusFilter";
import { DEFAULT_SORT, SORT_KEYS } from "@/utils/sortOrder";

export const OrdersShell = ({ orders }: { orders: Order[] }) => {
  const { sort, updateSort } = useSort();
  const { status } = useOrderStatus();
  const { search, updateSearch, localSearch } = useSearch();

  const filteredAndSorted = useMemo(() => {
    let filtered = orders.filter((o) => status === "" || o.status === status);
    if (localSearch.trim()) {
      filtered = filtered.filter((order) => {
        const searchItem = localSearch.toLowerCase().trim();
        //check Order Id
        if (order.id.toLowerCase().includes(searchItem)) return true;
        return order.items?.some((item) =>
          item.food.name.toLowerCase().includes(searchItem)
        );
      });
    }
    const cmp = getComparison(sort);
    return [...filtered].sort(cmp);
  }, [orders, status, sort, localSearch]);

  if (orders.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6">You have no past orders yet.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box display="flex" justifyContent="space-between">
        <TextField
          id="outlined-basic"
          value={localSearch}
          label="search"
          variant="outlined"
          onChange={(e) => updateSearch(e.target.value)}
        />
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
            No orders found
            {status && ` with status "${status}"`}
            {search && ` matching "${localSearch}"`}
          </Typography>
        )}
        {filteredAndSorted.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Stack>
    </Container>
  );
};
