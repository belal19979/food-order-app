"use client";
import { IconButton, Badge, Skeleton } from "@mui/material";
import Link from "next/link";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "@/context";
import NoSsr from "@mui/material/NoSsr";

export function CartButton() {
  const { cart } = useCart();

  const reducedCartItemsNumber = cart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  return (
    <NoSsr
      fallback={
        <Skeleton
          variant="circular"
          width={30}
          height={30}
          sx={{ bgcolor: "rgba(255,255,255,0.3)" }}
        />
      }
    >
      <Link href="/cart" passHref aria-label="Go to Cart">
        <IconButton>
          <Badge badgeContent={reducedCartItemsNumber} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </NoSsr>
  );
}
