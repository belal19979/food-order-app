import { Box, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const ProfileCardHeader = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h5">Account Details</Typography>
      <Button variant="outlined" startIcon={<EditIcon />} disabled>
        Edit
      </Button>
    </Box>
  );
};
