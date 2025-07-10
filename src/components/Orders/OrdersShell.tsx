import { Order } from "@/types/order";
import { Container, Stack, Typography } from "@mui/material";
import { OrderCard } from "./OrderCard";

export const OrdersShell = ({ orders }: { orders: Order[] }) => {
  if (orders.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6">You have no past orders yet.</Typography>
      </Container>
    );
  }
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Stack spacing={4}>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Stack>
    </Container>
  );
};
