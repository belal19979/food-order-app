import { Typography, Grid, Button, Stack } from "@mui/material";
import { ReorderButton } from "@/components/ui";
import { Order } from "@/types/order";
import { redirect } from "next/navigation";
import { OrderStatusChip } from "@/components/ui";
import { CancelOrderButton } from "./CancelOrderButton";

export const OrderCardHeader = ({ order }: { order: Order }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 8 }}>
        <Stack>
          <Typography variant="subtitle1" fontWeight={600}>
            Order #{order.id.slice(-6)}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Placed on {order.createdAt}
          </Typography>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { sm: "right" } }}>
        <OrderStatusChip status={order.status} fullWidth />
        <Typography variant="body1" mt={2}>
          Total: €{order.total.toFixed(2)}
        </Typography>
      </Grid>

      <Grid size={{ xs: 12 }} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          sx={{
            transition: "transform 0.2s, background-color 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => redirect(`orders/${order.id}`)}
        >
          order details
        </Button>
        {order.status === "PENDING" && <CancelOrderButton orderId={order.id} />}
        <ReorderButton order={order} />
      </Grid>
    </Grid>
  );
};
