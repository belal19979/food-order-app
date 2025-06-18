import { PrismaClient } from "@/generated/prisma";

declare global {
  var __prisma: PrismaClient;
}

export const prisma = global.__prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") {
  global.__prisma = prisma;
}
