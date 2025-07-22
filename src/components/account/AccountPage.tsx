import { Grid, List, ListItemButton, ListItemText } from "@mui/material";
import { ProfilePanel } from "./profilePanel/ ProfilePanel";
import { CurrentUser } from "@/types/user";
import Link from "next/link";

export const AccountPage = ({ user }: { user: CurrentUser }) => {
  return (
    <Grid container>
      <Grid size={{ sm: 3 }}>
        <List>
          <ListItemButton component={Link} href="/account">
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton component={Link} href="/orders">
            <ListItemText primary="My Orders" />
          </ListItemButton>
          <ListItemButton component={Link} href="/account/favorites">
            <ListItemText primary="Favorites" />
          </ListItemButton>
          <ListItemButton component={Link} href="/account/password">
            <ListItemText primary="Change Password" />
          </ListItemButton>
        </List>
      </Grid>
      <Grid size={{ sm: 9 }}>
        <ProfilePanel user={user} />
      </Grid>
    </Grid>
  );
};
