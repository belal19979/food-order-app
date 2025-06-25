import { Typography, Stack } from "@mui/material";

export const CartSummaryRow = ({
  label,
  value,
}: {
  label: string;
  value: number;
}) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography>{label}</Typography>
      <Typography>${value.toFixed(2)}</Typography>
    </Stack>
  );
};
