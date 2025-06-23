"use client";
import { Box, Button, CardActions, Typography } from "@mui/material";
import { useCart } from "@/context";

export const FoodCardActions = ({
  price,
  slug,
}: {
  price: number;
  slug: string;
}) => {
  const { cart, addToCart } = useCart();
  return (
    <CardActions>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="body2" color="primary">
          ${price}
        </Typography>
        <Button
          onClick={() => addToCart(slug)}
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
