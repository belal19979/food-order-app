import { useCart } from "@/context";
import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import NextLink from "next/link";

export const CartHeader = () => {
  const { cart } = useCart();
  return (
    <Stack spacing={3}>
      <Button
        component={NextLink}
        href="/menu"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{
          alignSelf: "flex-start",
          borderRadius: 2,
          fontWeight: 500,
          px: 2,
          py: 1,
          "&:hover": {
            backgroundColor: "primary.light",
            color: "white",
          },
        }}
      >
        Back to Menu
      </Button>
      <Typography variant="h4">Your Cart</Typography>
      {cart.length === 0 && (
        <Typography variant="body2">Your cart is empty </Typography>
      )}
    </Stack>
  );
};
