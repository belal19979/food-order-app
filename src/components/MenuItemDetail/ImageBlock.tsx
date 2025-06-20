import { Box } from "@mui/material";
import Image from "next/image";

export function ImageBlock({ image }: { image: string }) {
  return (
    <Box
      position="relative"
      width={{ xs: "100%", md: 400 }}
      height={{ xs: "300px", md: "auto" }}
      flexShrink={0}
      borderRadius={2}
      overflow="hidden"
    >
      <Image src={image} alt="food image" fill style={{ objectFit: "cover" }} />
    </Box>
  );
}
