import { getFoodItemById } from "@/lib/api";
import { MenuItemDetail } from "@/components";

export default async function page({ params }: { params: { slug: string } }) {
  const item = await getFoodItemById(params.slug);

  return <MenuItemDetail item={item} />;
}
