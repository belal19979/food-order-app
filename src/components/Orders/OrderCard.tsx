"use client";

import { Order } from "@/types/order";
import { Paper, Stack, Typography, Grid, Button } from "@mui/material";
import { OrderItemRow } from "./OrderItemRow";
import { useCart } from "@/context";

export function OrderCard({ order }: { order: Order }) {
  const { addToCart } = useCart();

  const reorder = () => {
    order.items.forEach((item) => addToCart(item.food.slug, item.quantity));
  };
  return (
    <Paper key={order.id} variant="outlined" sx={{ px: 2 }}>
      <Grid
        container
        alignItems="center"
        spacing={{ xs: 1, sm: 10 }}
        sx={{ my: 2 }}
      >
        <Grid size={{ xs: 12, sm: 3 }} sx={{ textAlign: "left" }}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={reorder}
          >
            Re-order
          </Button>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Order #{order.id.slice(-6)}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Placed on {order.createdAt}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <Typography variant="body2">
            Total: €{order.total.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>

      <Stack spacing={2}>
        {order.items.map((item) => (
          <OrderItemRow key={item.id} item={item} />
        ))}
      </Stack>
    </Paper>
  );
}
