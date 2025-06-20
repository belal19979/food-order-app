export type FoodItem = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image: string;
};
export type GetFoodItemsResponse = {
  foodItems: [FoodItem];
};
