"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Skeleton,
  Badge,
  Container,
  IconButton,
} from "@mui/material";
import { useCart } from "@/context";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export function Header() {
  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const reducedCartItemsNumber = cart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
          <Typography variant="h6" component="div">
            🍔 Food Order App
          </Typography>

          {mounted ? (
            <Link href={"/cart"} aria-label="Go To Cart">
              <IconButton>
                <Badge badgeContent={reducedCartItemsNumber} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          ) : (
            <Skeleton
              variant="circular"
              width={30}
              height={30}
              sx={{ bgcolor: "rgba(255,255,255,0.3)" }}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
