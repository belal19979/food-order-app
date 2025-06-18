"use client";

import { FoodList, ErrorMessage } from "@/components";
import { useFoodItems } from "@/hooks";

export default function Menu() {
  const { foodItems, loading, error } = useFoodItems();

  if (loading) return <>loading ..</>;
  if (error) return <ErrorMessage message={error.message} />;
  return <FoodList foodItems={foodItems} />;
}
