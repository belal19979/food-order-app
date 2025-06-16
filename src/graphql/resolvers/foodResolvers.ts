import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export const foodResolvers = {
  Query: {
    foodItems: async () => {
      return prisma.foodItem.findMany();
    },
  },
};
