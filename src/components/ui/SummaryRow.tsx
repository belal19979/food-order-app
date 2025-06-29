import { Box, Typography, TypographyProps } from "@mui/material";

export const SummaryRow = ({
  label,
  value,
  variant = "body1",
}: {
  label: string;
  value: number;
  variant?: TypographyProps["variant"];
}) => (
  <Box display="flex" justifyContent="space-between">
    <Typography variant={variant}>{label}</Typography>
    <Typography variant={variant}>
      {new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "USD",
      }).format(value)}
    </Typography>
  </Box>
);
