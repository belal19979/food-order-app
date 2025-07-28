import { Grid } from "@mui/material";
import { FoodCard } from "@/components";
import { FoodItem } from "@/types/food";

export function FoodList({ foodItems }: { foodItems: FoodItem[] }) {
  return (
    <Grid container component="section" sx={{ width: "100%" }} spacing={3}>
      {foodItems.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
          <FoodCard foodItem={item} />
        </Grid>
      ))}
    </Grid>
  );
}
