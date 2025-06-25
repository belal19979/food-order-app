import { Stack, Typography, Divider, Button } from "@mui/material";
import { CartSummaryRow } from "./CartSummaryRow";
export const CartSummary = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h4">Order summary</Typography>
      <Stack direction="column" spacing={2}>
        <CartSummaryRow label="Subtotal" value={5} />
        <CartSummaryRow label="Delivery Fee" value={10} />
        <CartSummaryRow label="Tax" value={20} />
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Total</Typography>
          <Typography variant="h6">$47,96</Typography>
        </Stack>
      </Stack>
      <Button variant="contained">Checkout</Button>
    </Stack>
  );
};
