import { getFoodCategories } from "@/lib/server/food";
import { MenuShell } from "@/components";

export default async function Menu() {
  const categories = await getFoodCategories();
  return <MenuShell categories={categories} />;
}
