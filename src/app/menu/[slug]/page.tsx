import { getFoodItemBySlug } from "@/lib/server/food";
import { MenuItemDetail } from "@/components";

export default async function page({ params }: { params: { slug: string } }) {
  const item = await getFoodItemBySlug(params.slug);

  return <MenuItemDetail item={item} />;
}
