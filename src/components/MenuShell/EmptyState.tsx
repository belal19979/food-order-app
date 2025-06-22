import { Box, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export function EmptyState({ message }: { message?: string }) {
  return (
    <Box
      textAlign="center"
      mt={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <RestaurantIcon sx={{ fontSize: 64, color: "text.secondary" }} />
      <Typography variant="h6" color="text.secondary" mt={2}>
        {message || "No items found"}
      </Typography>
    </Box>
  );
}
