import { getFoodItemById } from "@/lib/api";
import { FoodItem } from "@/types/food";
import { notFound } from "next/navigation";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const item = await getFoodItemById(params.id);
  if (!item) {
    notFound();
  }
  const { name, category, description, image, price } = item;
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
      <Image src={image} alt="hi" width={50} height={60}></Image>
      <Typography>price</Typography>
      <Typography>{price}</Typography>
      <Typography>Ingredients</Typography>
      <Typography>{description}</Typography>
      <Typography>Category</Typography>
      <Typography>{category}</Typography>
    </Box>
  );
}
