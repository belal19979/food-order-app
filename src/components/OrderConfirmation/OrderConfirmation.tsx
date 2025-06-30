import { Order } from "@/types/order";
import { Container, Typography, Box, Divider } from "@mui/material";
import { BackButton } from "../ui";

export const OrderConfirmation = ({ order }: { order: Order }) => {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <BackButton text="Back to Menu" href="/menu" />
      <Typography variant="h4" gutterBottom mt={4}>
        Thank you, {order.customerName}!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Your order #{order.id} has been received.
      </Typography>

      <Box mt={4}>
        {order.items.map((it) => (
          <Box
            key={it.slug}
            display="flex"
            justifyContent="space-between"
            mb={1}
          >
            <Typography>
              {it.name} × {it.quantity}
            </Typography>
            <Typography>€{(it.price * it.quantity).toFixed(2)}</Typography>
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        <Box display="flex" justifyContent="space-between">
          <Typography>Subtotal</Typography>
          <Typography>€{order.subtotal.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Delivery Fee</Typography>
          <Typography>€{order.deliveryFee.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Tax</Typography>
          <Typography>€{order.tax.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">€{order.total.toFixed(2)}</Typography>
        </Box>
      </Box>

      <Box mt={4}>
        <Typography variant="body2">
          We’ll send updates to {order.customerEmail} or via SMS at{" "}
          {order.customerPhone}.
        </Typography>
      </Box>
    </Container>
  );
};
