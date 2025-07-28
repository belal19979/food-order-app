import { List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

export const AccountSidebar = () => {
  return (
    <List>
      <ListItemButton component={Link} href="/account">
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton component={Link} href="/account/orders">
        <ListItemText primary="My Orders" />
      </ListItemButton>
      <ListItemButton component={Link} href="/account/favorites">
        <ListItemText primary="Favorites" />
      </ListItemButton>
      <ListItemButton component={Link} href="/account/password">
        <ListItemText primary="Change Password" />
      </ListItemButton>
    </List>
  );
};
