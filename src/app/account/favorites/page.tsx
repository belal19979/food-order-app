import { FavoritesPanel } from "@/components/account/FavoritesPanel";
import { getFavoritesForCurrentUser } from "@/lib/server/favorites";
import { FoodItem } from "@/types/food";

export default async function FavoritesPage() {
  const favFoods: FoodItem[] = await getFavoritesForCurrentUser();

  return <FavoritesPanel foods={favFoods} />;
}
