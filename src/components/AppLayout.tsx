"use client";

import { ThemeProvider, CssBaseline, Container } from "@mui/material";

import { Header } from "@/components";
import theme from "@/theme/theme";
import { CartProvider } from "@/context/CartProvider";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Header />

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {children}
        </Container>
      </CartProvider>
    </ThemeProvider>
  );
}
