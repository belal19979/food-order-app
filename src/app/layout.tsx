import { AppLayout } from "@/components";
import { getAllFoodItems } from "@/lib/api/food";
import { FoodItem } from "@/types/food";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const foodItems: FoodItem[] = await getAllFoodItems();
  return (
    <html lang="en">
      <body>
        <AppLayout foodItems={foodItems}>{children}</AppLayout>
      </body>
    </html>
  );
}
