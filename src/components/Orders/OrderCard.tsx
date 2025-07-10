import { Order } from "@/types/order";
import { Paper, Stack, Typography, Grid } from "@mui/material";
import { OrderItemRow } from "./OrderItemRow";

export function OrderCard({ order }: { order: Order }) {
  return (
    <Paper key={order.id} variant="outlined" sx={{ px: 2 }}>
      <Grid
        container
        alignItems="center"
        spacing={{ xs: 1, sm: 10 }}
        sx={{ my: 2 }}
      >
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Order #{order.id.slice(-6)}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Placed on {order.createdAt}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
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
