import { Stack, Typography } from "@mui/material";

export const CartItemInfo = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="column" gap={2}>
        <Typography variant="h6">classic burger</Typography>
        <Typography variant="body2">
          description,description,description,description,description{" "}
        </Typography>
      </Stack>
      <Typography variant="h5">$10,99</Typography>
    </Stack>
  );
};
