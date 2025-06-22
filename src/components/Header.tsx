"use client";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { useCart } from "@/context";

export function Header() {
  const { cart } = useCart();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div">
          🍔 Food Order App
        </Typography>
        <Typography variant="h6" component="div">
          cart number 5
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
