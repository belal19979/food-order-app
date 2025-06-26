import { Stack, Box, Typography } from "@mui/material";
import { ActionButtons } from "../../MenuItemDetail/ActionButtons";
import { CartItemInfo } from "./CartItemInfo";
import { CartItemImage } from "./CartItemImage";

export const CartItemRow = () => {
  return (
    <Stack direction="row" spacing={3}>
      <CartItemImage src="/" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex={1}
      >
        <CartItemInfo />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">unit price </Typography>
          <ActionButtons slug="hi" />
        </Stack>
      </Box>
    </Stack>
  );
};
