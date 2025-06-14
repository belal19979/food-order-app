"use client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
