"use client";
import {
  Box,
  Button,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { useCart } from "@/context";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

  const handleFavorite = () => {};

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
        <Box display="flex" alignItems="center" justifyContent="space-between">
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
          <IconButton onClick={handleFavorite}>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Box>
    </CardActions>
  );
};
