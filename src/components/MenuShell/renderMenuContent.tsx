import { EmptyState } from "./EmptyState";
import { FoodList } from "./FoodList";
import { FoodItem } from "@/types/food";

export function renderMenuContent(
  foodItems: FoodItem[],
  filteredItems: FoodItem[]
) {
  if (foodItems.length === 0) {
    return <EmptyState message="No items available yet." />;
  }
  if (filteredItems.length === 0) {
    return <EmptyState message="No food items match your search." />;
  }
  return <FoodList foodItems={filteredItems} />;
}
