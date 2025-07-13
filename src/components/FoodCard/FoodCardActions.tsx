"use client";
import { Box, Button, CardActions, Typography, Stack } from "@mui/material";
import { useCart } from "@/context";
import { FavoriteAction } from "../ui";

export const FoodCardActions = ({
  id,
  slug,
  price,
}: {
  id: string;
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
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleAdd}
            size="small"
            sx={{
              px: 2,
              border: "1px solid",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            Add to cart
          </Button>

          <FavoriteAction id={id} />
        </Stack>
      </Box>
    </CardActions>
  );
};
