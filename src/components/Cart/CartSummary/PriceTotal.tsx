import { Stack, Typography } from "@mui/material";
export const PriceTotal = ({ total }: { total: number }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h5">Total</Typography>
      <Typography variant="h6">${total.toFixed(2)}</Typography>
    </Stack>
  );
};
