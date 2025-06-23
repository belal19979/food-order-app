"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { useCart } from "@/context";
import { useEffect, useState } from "react";

export function Header() {
  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);
  if (!mounted) return null;

  const reducedNumber = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div">
          🍔 Food Order App
        </Typography>
        <Typography variant="h6" component="div">
          cart number {reducedNumber}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
