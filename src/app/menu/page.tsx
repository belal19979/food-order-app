import { getAllFoodItems, getFoodCategories } from "@/lib/api/food";
import { MenuShell } from "@/components";

export default async function Menu() {
  const [foodItems, categories] = await Promise.all([
    getAllFoodItems(),
    getFoodCategories(),
  ]);
  return <MenuShell foodItems={foodItems} categories={categories} />;
}
