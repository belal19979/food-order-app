/*
  Warnings:

  - You are about to alter the column `price` on the `FoodItem` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "FoodItem" ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);
