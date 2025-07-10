import { FoodItem } from "@/types/food";

export function filterItems(
  foodItems: FoodItem[],
  category: string,
  search: string
) {
  const q = search.trim().toLowerCase();
  return foodItems
    .filter((item) => category === "" || item.category === category)
    .filter((item) => !q || item.name.toLowerCase().includes(q));
}
