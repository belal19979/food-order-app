import { Stack, Box, Typography, Paper } from "@mui/material";
import { ActionButtons } from "../../MenuItemDetail/ActionButtons";
import { CartItemInfo } from "./CartItemInfo";
import { CartItemImage } from "./CartItemImage";
import { LocalCartItem } from "@/types/cart";

export const CartItemRow = ({ cartItem }: { cartItem: LocalCartItem }) => {
  const {
    food: { image, slug },
  } = cartItem;
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
        <CartItemImage src={image} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          flex={1}
          padding={2}
        >
          <CartItemInfo cartItem={cartItem} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">unit price </Typography>
            <ActionButtons slug={slug} />
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};
