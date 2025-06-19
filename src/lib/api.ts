import { prisma } from "./prisma";
import { FoodItem } from "@/types/food";

export async function getFoodItemById(id: string): Promise<FoodItem> {
  return prisma.foodItem.findUniqueOrThrow({ where: { id } });
}
