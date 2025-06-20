"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { FoodItem } from "@/types/food";

export function FoodCard({ name, slug, description, price, image }: FoodItem) {
  return (
    <Card sx={{ width: 320 }}>
      <CardActionArea component={Link} href={`/menu/${slug}`}>
        <Box sx={{ position: "relative", width: "100%", height: 140 }}>
          <Image
            src={image}
            alt="green iguana"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="body2" color="primary">
            ${price}
          </Typography>
          <Button
            size="small"
            sx={{
              border: "1px solid",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            Add
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
