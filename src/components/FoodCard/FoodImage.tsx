import Image from "next/image";
import { Box } from "@mui/material";

export function FoodImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Box sx={{ position: "relative", width: "100%", height: 140 }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </Box>
  );
}
