import { getFoodCategories } from "@/lib/api/food";
import { MenuShell } from "@/components";

export default async function Menu() {
  const categories = await getFoodCategories();
  return <MenuShell categories={categories} />;
}
