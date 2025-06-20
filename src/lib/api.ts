import { prisma } from "./prisma";
import { FoodItem } from "@/types/food";

export async function getFoodItemById(id: string): Promise<FoodItem> {
  const item = await prisma.foodItem.findUnique({ where: { id } });
  if (!item) {
    throw new Error(`No food item with id=${id} `);
  }
  return item;
}
