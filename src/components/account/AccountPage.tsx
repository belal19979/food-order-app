import { Grid } from "@mui/material";
import { ProfilePanel } from "./profilePanel/ ProfilePanel";
import { CurrentUser } from "@/types/user";

export const AccountPage = ({ user }: { user: CurrentUser }) => {
  return (
    <Grid container>
      <Grid size={{ sm: 3 }}>sideNav</Grid>
      <Grid size={{ sm: 9 }}>
        <ProfilePanel user={user} />
      </Grid>
    </Grid>
  );
};
