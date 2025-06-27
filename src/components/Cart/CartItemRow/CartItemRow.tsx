import { Stack, Box, Typography, Paper } from "@mui/material";
import { ActionButtons } from "../../MenuItemDetail/ActionButtons";
import { CartItemInfo } from "./CartItemInfo";
import { CartItemImage } from "./CartItemImage";
import { CartItem } from "@/types/cart";

export const CartItemRow = ({ cartItem }: { cartItem: CartItem }) => {
  const { name, image, price, quantity, slug, description, category } =
    cartItem;
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
          <CartItemInfo name={name} description={description} price={price} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2">unit price </Typography>
            <ActionButtons slug={slug} />
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};
