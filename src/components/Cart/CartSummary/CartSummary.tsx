import { Stack, Typography, Divider, Button } from "@mui/material";
import Link from "next/link";

import { PriceTotal } from "./PriceTotal";
import { useCartSummary } from "@/hooks";
import { SummaryRow } from "@/components/ui";

export const CartSummary = () => {
  const { subtotal, tax, deliveryFee, total } = useCartSummary();

  return (
    <Stack spacing={4}>
      <Typography variant="h4">Order summary</Typography>
      <Stack direction="column" spacing={2}>
        <SummaryRow label="Subtotal" value={subtotal} />
        <SummaryRow label="Delivery Fee" value={deliveryFee} />
        <SummaryRow label="Tax" value={tax} />
        <Divider />

        <PriceTotal total={total} />
      </Stack>
      {subtotal > 0 ? (
        <Link href="/checkout">
          <Button variant="contained" fullWidth>
            Checkout
          </Button>
        </Link>
      ) : (
        <Button variant="contained" fullWidth disabled>
          Checkout
        </Button>
      )}
    </Stack>
  );
};
