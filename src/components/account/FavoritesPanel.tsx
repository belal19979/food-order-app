import { FoodItem } from "@/types/food";
import { FoodCard } from "@/components/FoodCard/FoodCard";
import { Grid, Typography } from "@mui/material";

export const FavoritesPanel = ({ foods }: { foods: FoodItem[] }) => {
  return (
    <Grid container component="section" sx={{ width: "100%" }} spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h4" align="center" mb={3}>
          Your Favorites
        </Typography>
      </Grid>
      {foods.map((item) => {
        return (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <FoodCard foodItem={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};
