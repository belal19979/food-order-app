import { Box, Grid } from "@mui/material";
import { ProfilePanel } from "./ ProfilePanel";

type UserType = {
  name: string | null;
  id: string;
  email: string;
  createdAt: Date;
};

export const AccountPage = ({ user }: { user: UserType }) => {
  return (
    <Grid container>
      <Grid size={{ sm: 3 }}>
        {/* <Box>sideNav</Box> */}
        sideNav
      </Grid>
      <Grid size={{ sm: 9 }}>
        {/* <Box>profile panel</Box> */}
        <ProfilePanel />
      </Grid>
    </Grid>
  );
};
