"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";

import { CartButton } from "./CartButton";
import { AuthMenu } from "./AuthMenu";

export function Header({
  showMenuButton,
  onMenuClick,
}: {
  showMenuButton: boolean;
  onMenuClick: () => void;
}) {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        width: "100%",
        left: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
          {showMenuButton && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onMenuClick}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
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
            <AuthMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
