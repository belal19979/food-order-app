"use client";
import { Box, Button, CardActions, Typography } from "@mui/material";
import { useCart } from "@/context";

export const FoodCardActions = ({
  slug,
  price,
}: {
  slug: string;
  price: number;
}) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(slug);
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
          ${price}
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
