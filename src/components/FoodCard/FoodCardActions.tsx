"use client";
import { Box, Button, CardActions, Typography } from "@mui/material";
import { useCart } from "@/context";
import { CartContextType } from "@/types/cart";

type CartItemArg = Parameters<CartContextType["addToCart"]>[0];

type Props = Omit<CartItemArg, "quantity">;

export const FoodCardActions = ({ product }: { product: Props }) => {
  //TODO
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <CardActions>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="body2" color="primary">
          ${product.price}
        </Typography>
        <Button
          onClick={handleAdd}
          size="small"
          sx={{
            border: "1px solid",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          Add to cart
        </Button>
      </Box>
    </CardActions>
  );
};
