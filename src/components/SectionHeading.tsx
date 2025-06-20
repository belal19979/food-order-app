import { Typography } from "@mui/material";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="subtitle1" color="text.primary">
      {children}
    </Typography>
  );
}
