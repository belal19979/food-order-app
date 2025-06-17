"use client";

import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";

import { Header } from "@/components";
import theme from "@/theme/theme";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {children}
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}
