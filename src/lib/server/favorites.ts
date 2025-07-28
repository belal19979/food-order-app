import { getCurrentUser } from "./auth";
import { prisma } from "../prisma";

export async function getFavoritesForCurrentUser() {
  const user = await getCurrentUser();
  if (!user) return [];
  const favs = await prisma.favorite.findMany({
    where: { userId: user.id },
    include: { food: true },
  });
  return favs.map(({ food }) => ({
    ...food,
    price: food.price.toNumber(),
  }));
}
