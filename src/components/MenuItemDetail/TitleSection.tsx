"use client";
import { Stack, Typography } from "@mui/material";

export function TitleSection({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <Stack gap={1} mb={4}>
      <Typography variant="h3" color="text.primary">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {description}
      </Typography>
    </Stack>
  );
}
