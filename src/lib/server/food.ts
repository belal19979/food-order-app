import { prisma } from "../prisma";
import { FoodItem } from "@/types/food";

export async function getAllFoodItems(): Promise<FoodItem[]> {
  return prisma.foodItem.findMany();
}

export async function getFoodItemBySlug(slug: string): Promise<FoodItem> {
  const item = await prisma.foodItem.findUnique({ where: { slug } });
  if (!item) {
    throw new Error(`No food item with slug=${slug} `);
  }
  return item;
}

export async function getFoodCategories(): Promise<string[]> {
  const rows = await prisma.foodItem.groupBy({ by: ["category"] });
  return rows.map((r) => r.category);
}
