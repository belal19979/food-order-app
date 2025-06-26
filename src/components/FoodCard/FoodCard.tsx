"use client";
import Link from "next/link";
import { Card, CardActionArea } from "@mui/material";

import { FoodItem } from "@/types/food";
import { FoodImage } from "./FoodImage";
import { FoodCardContent } from "./FoodCardContent";
import { FoodCardActions } from "./FoodCardActions";

export function FoodCard(product: FoodItem) {
  return (
    <Card sx={{ width: "100%", maxWidth: 320 }}>
      <CardActionArea component={Link} href={`/menu/${product.slug}`}>
        <FoodImage src={product.image} alt={product.name} />
      </CardActionArea>
      <FoodCardContent name={product.name} description={product.description} />
      <FoodCardActions product={product} />
    </Card>
  );
}
