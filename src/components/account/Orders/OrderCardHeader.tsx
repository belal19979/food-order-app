import { Typography, Grid, Button } from "@mui/material";
import { ReorderButton } from "@/components/ui";
import { Order } from "@/types/order";
import { redirect } from "next/navigation";
import { OrderStatusChip } from "@/components/ui";

export const OrderCardHeader = ({ order }: { order: Order }) => {
  return (
    <>
      <Grid size={{ xs: 6, sm: 4 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          Order #{order.id.slice(-6)}
        </Typography>
      </Grid>
      <Grid size={{ xs: 6, sm: 4 }}>
        <OrderStatusChip status={order.status} />
      </Grid>
      <Grid
        size={{ xs: 12, sm: 4 }}
        sx={{ textAlign: { xs: "left", sm: "right" } }}
      >
        <ReorderButton order={order} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Typography variant="body2" color="text.secondary">
          Placed on {order.createdAt}
        </Typography>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Button
          variant="contained"
          onClick={() => redirect(`orders/${order.id}`)}
        >
          order details
        </Button>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Typography variant="body1">
          Total: €{order.total.toFixed(2)}
        </Typography>
      </Grid>
    </>
  );
};
