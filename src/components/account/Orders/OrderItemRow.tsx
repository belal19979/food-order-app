"use client";

import { Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import { OrderItem } from "@/types/order";
import { useCart } from "@/context";
export function OrderItemRow({ item }: { item: OrderItem }) {
  const { addToCart } = useCart();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        pt: 2,
        pb: 2,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          mr: 2,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Image
          src={item.food.image}
          alt={item.food.name}
          width={80}
          height={80}
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" noWrap>
          {item.food.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Qty: {item.quantity}
        </Typography>
      </Box>

      <Button
        variant="outlined"
        color="secondary"
        size="small"
        sx={{
          px: 2,
          py: 1,
          transition: "transform 0.2s, background-color 0.2s",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            transform: "scale(1.05)",
            border: "none",
          },
        }}
        onClick={() => addToCart(item.food.slug)}
      >
        Buy again
      </Button>
    </Box>
  );
}
