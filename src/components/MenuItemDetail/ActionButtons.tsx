"use client";
import { Button, ButtonGroup } from "@mui/material";

import { useCartQuantity } from "@/hooks";

export function ActionButtons({ slug }: { slug: string }) {
  const { quantity, changeQuantity } = useCartQuantity(slug);

  return (
    <ButtonGroup variant="outlined">
      <Button
        onClick={() => changeQuantity(-1)}
        disabled={quantity === 0}
        aria-label="Remove one item"
      >
        -
      </Button>
      <Button disabled>{quantity}</Button>
      <Button onClick={() => changeQuantity(1)} aria-label="add one item">
        +
      </Button>
    </ButtonGroup>
  );
}
