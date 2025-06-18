import { prisma } from "@/lib/prisma";

export const foodResolvers = {
  Query: {
    foodItems: async () => {
      return prisma.foodItem.findMany();
    },
  },
};
