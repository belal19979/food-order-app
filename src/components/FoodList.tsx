import { Box } from "@mui/material";
import { FoodCard } from "@/components";
import { FoodItem } from "@/types/food";

export function FoodList({ foodItems }: { foodItems: FoodItem[] }) {
  return (
    <Box display="flex" justifyContent="flex-start" gap={3} flexWrap="wrap">
      {foodItems.map((item) => {
        return <FoodCard key={item.id} {...item} />;
      })}
    </Box>
  );
}
