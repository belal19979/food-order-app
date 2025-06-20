"use client";

import { FoodItem } from "@/types/food";
import { Box } from "@mui/material";
import { ImageBlock } from "./ImageBlock";
import { InfoBlock } from "./InfoBlock";
import { TitleSection } from "./TitleSection";
import { BreadCrumbs } from "./BreadCrumbs";

export function MenuItemDetail({ item }: { item: FoodItem }) {
  const { name, description, image } = item;

  return (
    <Box component="section" maxWidth="md" mx="auto" px={{ xs: 2, md: 3 }}>
      <BreadCrumbs name={name} />

      <TitleSection name={name} description={description} />

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 3, md: 6 }}
        mb={4}
      >
        <ImageBlock image={image} />
        <InfoBlock item={item} />
      </Box>
    </Box>
  );
}
