"use client";

import { ThemeProvider, CssBaseline, Container } from "@mui/material";

import { Header } from "@/components";
import theme from "@/theme/theme";
import { CartProvider } from "@/context/cart/CartProvider";
import { FoodItemsProvider } from "@/context/foodItemsContext";
import { FavoriteProvider } from "@/context/favorites/favoriteContext";
import { FoodItem } from "@/types/food";

export function AppLayout({
  foodItems,
  children,
}: {
  foodItems: FoodItem[];
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FoodItemsProvider foodItems={foodItems}>
        <CartProvider foodItems={foodItems}>
          <FavoriteProvider>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
              {children}
            </Container>
          </FavoriteProvider>
        </CartProvider>
      </FoodItemsProvider>
    </ThemeProvider>
  );
}
