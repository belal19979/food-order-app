"use client";

import { FoodItem } from "@/types/food";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export function MenuItemDetail({ item }: { item: FoodItem }) {
  const { name, category, description, image, price } = item;

  return (
    <Box
      component="section"
      //   display="flex"
      //   flexDirection="column"
      //   gap={2}
      //   width={500}
      //   height={800}
      maxWidth="md" //
      mx="auto" //
      px={{ xs: 2, md: 3 }} //
    >
      {/* ---------- Title & tagline ---------- */}
      <Stack
        //    direction="column"
        gap={1}
        mb={4}
      >
        <Typography variant="h3" color="primary">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          {description}
        </Typography>
      </Stack>
      {/* ---------- Media + details row ---------- */}

      <Box
        display="flex"
        flexDirection={{ sx: "column", md: "row" }} //
        gap={{ xs: 3, md: 6 }}
        mb={4}
        alignItems="stretch" //
      >
        <Box
          position="relative"
          width={{ xs: "100%", md: 400 }} //
          flexShrink={0} //
          borderRadius={2} //
          overflow="hidden" //
        >
          <Image src={image} alt="name" fill style={{ objectFit: "cover" }} />
        </Box>
        {/* --- Detail column --- */}
        <Box display="flex" flexDirection="column" flex={1}>
          {/*flex 1 */}
          {/* Price */}
          <Typography variant="h4" color="primary">
            {price.toLocaleString(undefined, {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          {/* Ingredients */}
          <Typography variant="subtitle1" color="primary">
            Ingredients
          </Typography>
          <Typography variant="body1" color="secondary">
            {description}
          </Typography>
          {/* Category */}

          <Typography variant="subtitle1" color="primary">
            Category
          </Typography>
          <Typography variant="body2" color="secondary">
            {category}
          </Typography>

          {/* Actions pushed down */}
          <Box
            // mb={5}
            display="flex"
            // justifyContent="space-between"
            // alignItems="center"
            mt="auto"
            gap={2}
            pt={3}
          >
            <Button variant="outlined">increase</Button>
            <Button variant="contained" sx={{ ml: "auto" }}>
              {/*sx={{ ml: "auto" }} */}
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
