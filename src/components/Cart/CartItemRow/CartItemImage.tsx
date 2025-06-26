import { Box } from "@mui/material";
import Image from "next/image";

export function CartItemImage({ src }: { src: string }) {
  return (
    <Box sx={{ width: 350, height: 350, position: "relative" }}>
      <Image src={src} alt="Product" fill style={{ objectFit: "cover" }} />
    </Box>
  );
}
