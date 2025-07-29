"use client";
import Link from "next/link";
import { Card, CardActionArea } from "@mui/material";

import { FoodItem } from "@/types/food";
import { FoodImage } from "./FoodImage";
import { FoodCardContent } from "./FoodCardContent";
import { FoodCardActions } from "./FoodCardActions";

export function FoodCard({ foodItem }: { foodItem: FoodItem }) {
  const { id, slug, name, price, description, image } = foodItem;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 320,
        height: "100%",
      }}
    >
      <CardActionArea component={Link} href={`/menu/${slug}`}>
        <FoodImage src={image} alt={name} />
      </CardActionArea>
      <FoodCardContent name={name} description={description} />
      <FoodCardActions id={id} slug={slug} price={price} />
    </Card>
  );
}
