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
      <Grid container alignItems="center" spacing={2} sx={{ my: 2 }}>
        <Grid size={{ xs: 6, sm: 4 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Order #{order.id.slice(-6)}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <Typography variant="body1">
            Total: €{order.total.toFixed(2)}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4 }}
          sx={{ textAlign: { xs: "left", sm: "right" } }}
        >
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{
              px: 2,
              py: 1,
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                backgroundColor: "primary.main",
                transform: "scale(1.05)",
              },
            }}
            onClick={reorder}
          >
            Re-order
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" color="text.secondary">
            Placed on {order.createdAt}
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
