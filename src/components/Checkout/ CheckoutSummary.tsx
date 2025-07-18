"use client";
import { useCart } from "@/context";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import { SummaryRow } from "@/components/ui";
import { useCartSummary } from "@/hooks";

export const CheckoutSummary = ({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) => {
  const { cart } = useCart();
  const { subtotal, tax, deliveryFee, total } = useCartSummary();

  return (
    <Box maxWidth="sm" mx="auto" component={Paper} p={3}>
      <Stack spacing={3} divider={<Divider />}>
        <Typography variant="h5" mb={2}>
          Order Summary
        </Typography>
        <Stack direction="column" spacing={2} mt={3}>
          {cart
            .filter(({ quantity }) => quantity > 0)
            .map(({ food: { slug, price, name }, quantity }) => (
              <SummaryRow
                key={slug}
                label={`${name} × ${quantity}`}
                value={price * quantity}
              />
            ))}
        </Stack>
        <Stack direction="column" spacing={1}>
          <SummaryRow variant="body2" label="Subtotal" value={subtotal} />
          {subtotal > 0 && (
            <SummaryRow
              label="Delivery Fee"
              value={deliveryFee}
              variant="body2"
            />
          )}
          <SummaryRow label={"Tax"} value={tax} variant="body2" />
        </Stack>
        <SummaryRow label="Total" value={total} variant="h6" />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
          fullWidth
          startIcon={isSubmitting ? <CircularProgress size={20} /> : undefined}
        >
          {isSubmitting ? "Placing Order…" : "Place Order"}
        </Button>
      </Stack>
    </Box>
  );
};
