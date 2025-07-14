"use client";
import { FoodItem } from "@/types/food";
import { Box, Stack, Typography } from "@mui/material";
import { ActionButtons } from "./ActionButtons";
import { FavoriteAction } from "../ui";

export function InfoBlock({ item }: { item: FoodItem }) {
  return (
    <Stack flex={1} gap={2}>
      <Typography variant="h4" color="text.primary">
        {item.price.toLocaleString(undefined, {
          style: "currency",
          currency: "USD",
        })}
      </Typography>

      <Typography variant="subtitle1" color="text.primary">
        Ingredients
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {item.description}
      </Typography>

      <Typography variant="subtitle1" color="text.primary">
        Category
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.category}
      </Typography>

      <Box display="flex" justifyContent="space-between" mt="auto" pt={3}>
        <ActionButtons slug={item.slug} />
        <FavoriteAction id={item.id} />
      </Box>
    </Stack>
  );
}
