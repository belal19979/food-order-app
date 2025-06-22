"use client";

import { ThemeProvider, CssBaseline, Container } from "@mui/material";

import { Header } from "@/components";
import theme from "@/theme/theme";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </ThemeProvider>
  );
}
