"use client";

import { Order } from "@/types/order";
import { Paper, Stack, Grid } from "@mui/material";
import { OrderItemRow } from "./OrderItemRow";

import { usePagination } from "@/hooks";
import { PaginationControls } from "@/components/ui";
import { OrderCardHeader } from "./OrderCardHeader";

export function OrderCard({ order }: { order: Order }) {
  const {
    page,
    slice: itemsToRender,
    pageCount,
    setPage,
  } = usePagination(order.items);

  return (
    <>
      <Paper key={order.id} variant="outlined" sx={{ px: 2 }}>
        <Grid container alignItems="center" spacing={2} sx={{ my: 2 }}>
          <OrderCardHeader order={order} />
        </Grid>

        <Stack spacing={2}>
          {itemsToRender.map((item) => (
            <OrderItemRow key={item.id} item={item} />
          ))}
        </Stack>
      </Paper>

      {order.items.length > 3 && (
        <PaginationControls
          mode="dots"
          page={page}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      )}
    </>
  );
}
