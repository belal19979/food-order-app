/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `FoodItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "FoodItem" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "FoodItem_slug_key" ON "FoodItem"("slug");
