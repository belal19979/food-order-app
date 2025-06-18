import { prisma } from "./prisma";
import { FoodItem } from "@/types/food";

export async function getFoodItemById(id: string): Promise<FoodItem | null> {
  return prisma.foodItem.findUnique({
    where: { id },
  });
}
