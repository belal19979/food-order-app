import { Stack, Typography } from "@mui/material";

export const CartItemInfo = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="column" gap={2}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>
      <Typography variant="h5">${price}</Typography>
    </Stack>
  );
};
