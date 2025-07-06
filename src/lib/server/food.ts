import { prisma } from "../prisma";
import { FoodItem } from "@/types/food";

export async function getAllFoodItems(): Promise<FoodItem[]> {
  const items = await prisma.foodItem.findMany();
  return items.map((item) => ({ ...item, price: item.price.toNumber() }));
}

export async function getFoodItemBySlug(slug: string): Promise<FoodItem> {
  const item = await prisma.foodItem.findUnique({ where: { slug } });
  if (!item) {
    throw new Error(`No food item with slug=${slug} `);
  }
  return { ...item, price: item.price.toNumber() };
}

export async function getFoodCategories(): Promise<string[]> {
  const rows = await prisma.foodItem.groupBy({ by: ["category"] });
  return rows.map((r) => r.category);
}
