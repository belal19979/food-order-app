import { getFoodItemById } from "@/lib/api";

import { MenuItemDetail } from "@/components";

export default async function page({ params }: { params: { id: string } }) {
  const item = await getFoodItemById(params.id);

  return <MenuItemDetail item={item} />;
}
