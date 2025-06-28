import { Stack, Typography, Divider, Button } from "@mui/material";
import { CartSummaryRow } from "./CartSummaryRow";
import { CartTotal } from "./CartTotal";
import { useCart } from "@/context";

const DELIVERY_FEE = 10;
const TAX_RATE = 0.1;
export const CartSummary = () => {
  const { cart } = useCart();
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subTotal * TAX_RATE;
  const total = subTotal + tax + (subTotal > 0 ? DELIVERY_FEE : 0);

  return (
    <Stack spacing={4}>
      <Typography variant="h4">Order summary</Typography>
      <Stack direction="column" spacing={2}>
        <CartSummaryRow label="Subtotal" value={subTotal} />
        <CartSummaryRow
          label="Delivery Fee"
          value={subTotal > 0 ? DELIVERY_FEE : 0}
        />
        <CartSummaryRow label="Tax" value={tax} />
        <Divider />

        <CartTotal total={total} />
      </Stack>
      <Button variant="contained">Checkout</Button>
    </Stack>
  );
};
