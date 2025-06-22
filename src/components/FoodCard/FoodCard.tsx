"use client";
import Link from "next/link";
import { Card, CardActionArea } from "@mui/material";

import { FoodItem } from "@/types/food";
import { FoodImage } from "./FoodImage";
import { FoodCardContent } from "./FoodCardContent";
import { FoodCardActions } from "./FoodCardActions";

export function FoodCard({ name, slug, description, price, image }: FoodItem) {
  return (
    <Card sx={{ width: "100%", maxWidth: 320 }}>
      <CardActionArea component={Link} href={`/menu/${slug}`}>
        <FoodImage src={image} alt={name} />
        <FoodCardContent name={name} description={description} />
        <FoodCardActions price={price} />
      </CardActionArea>
    </Card>
  );
}
