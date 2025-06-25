"use client";
import { Grid, Stack } from "@mui/material";
import { CartHeader } from "./CartHeader";
import { CartItemRow } from "./CartItemRow";
import { CartSummary } from "./CartSummary/CartSummary";

export const Cart = () => {
  return (
    <Grid container component="section" sx={{ width: "100%" }} spacing={3}>
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
