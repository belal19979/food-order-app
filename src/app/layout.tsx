import { AppLayout, AuthProvider } from "@/components";
import { getAllFoodItems } from "@/lib/server/food";
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
        <AuthProvider>
          <AppLayout foodItems={foodItems}>{children}</AppLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
