"use client";

import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

import { AccountSidebar, Header } from "@/components";
import theme from "@/theme/theme";
import { CartProvider } from "@/context/cart/CartProvider";
import { FoodItemsProvider } from "@/context/foodItemsContext";
import { FavoriteProvider } from "@/context/favorites/FavoriteProvider";
import { ToastProvider } from "@/context/toast/ToastProvider";
import { FoodItem } from "@/types/food";
import { usePathname } from "next/navigation";

export function AppLayout({
  foodItems,
  children,
}: {
  foodItems: FoodItem[];
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isAccount = pathName?.startsWith("/account");
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleSidebar = () => setMobileOpen((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FoodItemsProvider foodItems={foodItems}>
        <CartProvider foodItems={foodItems}>
          <FavoriteProvider>
            <ToastProvider>
              <Header showMenuButton={true} onMenuClick={toggleSidebar} />
              <Toolbar />

              <Box sx={{ display: isAccount ? "flex" : "block" }}>
                {isAccount && (
                  <AccountSidebar
                    mobileOpen={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                  />
                )}
                <Container maxWidth="lg" sx={{ mt: 4 }}>
                  {children}
                </Container>
              </Box>
            </ToastProvider>
          </FavoriteProvider>
        </CartProvider>
      </FoodItemsProvider>
    </ThemeProvider>
  );
}
