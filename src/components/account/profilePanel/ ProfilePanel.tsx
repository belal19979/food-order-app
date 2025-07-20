import { Box, Paper, Typography } from "@mui/material";
import { ProfileCardHeader } from "./ProfileCardHeader";
import { ProfileDetailList } from "./ProfileDetailList";
import { CurrentUser } from "@/types/user";

export const ProfilePanel = ({ user }: { user: CurrentUser }) => {
  return (
    <Box>
      <Typography variant="h4" align="center" mb={3}>
        ProfilePanel
      </Typography>
      <Paper
        variant="outlined"
        sx={{ borderRadius: 2, p: 4, maxWidth: 600, mx: "auto" }}
      >
        <ProfileCardHeader />
        <ProfileDetailList user={user} />
      </Paper>
    </Box>
  );
};
