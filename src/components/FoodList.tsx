import { Box } from "@mui/material";
import { FoodCard } from "@/components";
import { foodItems } from "@/data/fakeData";

export function FoodList() {
  return (
    <Box display="flex" justifyContent="flex-start" gap={3} flexWrap="wrap">
      {foodItems.map((item) => {
        return <FoodCard key={item.name} {...item} />;
      })}
    </Box>
  );
}
