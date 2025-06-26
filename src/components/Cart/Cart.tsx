"use client";
import { Grid, Stack } from "@mui/material";
import { CartHeader } from "./CartHeader";
import { CartItemRow } from "./CartItemRow/CartItemRow";
import { CartSummary } from "./CartSummary/CartSummary";
import { useCart } from "@/context";

export const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <Grid container component="section" sx={{ width: "100%" }} spacing={15}>
      <Grid size={{ xs: 12, md: 9 }}>
        <Stack direction="column" spacing={3}>
          <CartHeader />
          <CartItemRow />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <CartSummary />
      </Grid>
    </Grid>
  );
};
