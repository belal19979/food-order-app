import { Stack, Typography, IconButton, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useCart } from "@/context";
import { LocalCartItem } from "@/types/cart";

export const CartItemInfo = ({ cartItem }: { cartItem: LocalCartItem }) => {
  const { removeFromCart } = useCart();
  const {
    food: { slug, name, description, price, category },
  } = cartItem;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}
    >
      <Stack direction="column" spacing={1}>
        <Typography variant="caption" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center">
        <Typography variant="h5">${price.toFixed(2)}</Typography>
        <Tooltip title={`Remove ${name}`}>
          <IconButton
            onClick={() => removeFromCart(slug)}
            color="error"
            size="small"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};
