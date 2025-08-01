import { Button } from "@mui/material";
import { Order } from "@/types/order";
import { useCart } from "@/context";

export const ReorderButton = ({ order }: { order: Order }) => {
  const { addToCart } = useCart();

  const Reorder = () => {
    order.items.forEach((item) => addToCart(item.food.slug, item.quantity));
  };

  return (
    <Button
      size="medium"
      variant="contained"
      color="secondary"
      sx={{
        px: 2,
        py: 1,
        transition: "transform 0.2s, background-color 0.2s",
        "&:hover": {
          backgroundColor: "primary.main",
          transform: "scale(1.05)",
        },
      }}
      onClick={Reorder}
    >
      Re-order
    </Button>
  );
};
