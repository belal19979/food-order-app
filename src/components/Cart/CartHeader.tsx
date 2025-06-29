import { useCart } from "@/context";
import { Stack, Typography } from "@mui/material";
import { BackButton } from "@/components/ui";

export const CartHeader = () => {
  const { cart } = useCart();
  return (
    <Stack spacing={3}>
      <BackButton text="Back To Menu" href="/menu" />

      <Typography variant="h4">Your Cart</Typography>
      {cart.length === 0 && (
        <Typography variant="body2">Your cart is empty </Typography>
      )}
    </Stack>
  );
};
