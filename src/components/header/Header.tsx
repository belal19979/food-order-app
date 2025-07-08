"use client";

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Link from "next/link";

import { CartButton } from "./CartButton";
import { AuthLinks } from "./AuthLinks";

export function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
          <Typography
            variant="h6"
            component={Link}
            href="/menu"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            🍔 Food Order App
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CartButton />
            <AuthLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
