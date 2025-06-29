import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NextLink from "next/link";

export const BackButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Button
      component={NextLink}
      href={href}
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      sx={{
        alignSelf: "flex-start",
        borderRadius: 2,
        fontWeight: 500,
        px: 2,
        py: 1,
        "&:hover": {
          backgroundColor: "primary.light",
          color: "white",
        },
      }}
    >
      {text}
    </Button>
  );
};
