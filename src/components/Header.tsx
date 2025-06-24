"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Skeleton,
  Badge,
  Container,
} from "@mui/material";
import { useCart } from "@/context";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
            <Badge badgeContent={reducedCartItemsNumber} color="secondary">
              <ShoppingCartIcon />
            </Badge>
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
