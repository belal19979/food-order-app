import { prisma } from "./prisma";
import { FoodItem } from "@/types/food";

export async function getFoodItemById(slug: string): Promise<FoodItem> {
  const item = await prisma.foodItem.findUnique({ where: { slug } });
  if (!item) {
    throw new Error(`No food item with slug=${slug} `);
  }
  return item;
}
