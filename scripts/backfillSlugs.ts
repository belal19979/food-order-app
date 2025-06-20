import { prisma } from "@/lib/prisma";
import { generateUniqueSlug } from "@/utils/slugify";

async function backfillSlugs() {
  const allItems = await prisma.foodItem.findMany();
  const existingSlugs: string[] = [];

  for (const item of allItems) {
    const slug = await generateUniqueSlug(item.name, existingSlugs);
    existingSlugs.push(slug);

    await prisma.foodItem.update({
      where: { id: item.id },
      data: { slug },
    });
  }

  console.log("✅ Slugs have been backfilled.");
  process.exit(0);
}

backfillSlugs().catch((err) => {
  console.error("❌ Failed to backfill slugs:", err);
  process.exit(1);
});
