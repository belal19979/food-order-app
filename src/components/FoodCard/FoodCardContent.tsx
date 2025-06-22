"use client";
import { CardContent, Typography } from "@mui/material";

export const FoodCardContent = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="secondary">
        {description}
      </Typography>
    </CardContent>
  );
};
