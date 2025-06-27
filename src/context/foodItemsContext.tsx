"use client";

import { createContext, ReactNode, useContext } from "react";
import { FoodItem } from "@/types/food";

const FoodItemsContext = createContext<FoodItem[] | null>(null);

export const useFoodItems = () => {
  const ctx = useContext(FoodItemsContext);
  if (ctx === null)
    throw new Error("useFoodItems must be inside FoodItemsProvider");
  return ctx;
};

export const FoodItemsProvider = ({
  foodItems,
  children,
}: {
  foodItems: FoodItem[];
  children: ReactNode;
}) => (
  <FoodItemsContext.Provider value={foodItems}>
    {children}
  </FoodItemsContext.Provider>
);
