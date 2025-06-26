import { Stack, Typography, Divider, Button } from "@mui/material";
import { CartSummaryRow } from "./CartSummaryRow";
import { CartTotal } from "./CartTotal";
export const CartSummary = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h4">Order summary</Typography>
      <Stack direction="column" spacing={2}>
        <CartSummaryRow label="Subtotal" value={5} />
        <CartSummaryRow label="Delivery Fee" value={10} />
        <CartSummaryRow label="Tax" value={20} />
        <Divider />

        <CartTotal total={15} />
      </Stack>
      <Button variant="contained">Checkout</Button>
    </Stack>
  );
};
