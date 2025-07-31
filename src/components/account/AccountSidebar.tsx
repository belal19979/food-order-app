"use client";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

export function AccountSidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean;
  onClose: () => void;
}) {
  const pathName = usePathname();

  const links = [
    { href: "/account", title: "Profile" },
    { href: "/account/orders", title: "My Orders" },
    { href: "/account/favorites", title: "Favorites" },
    { href: "/account/password", title: "Change Password" },
  ];
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links.map(({ href, title }) => (
          <ListItemButton
            key={href}
            component={Link}
            href={href}
            selected={href === pathName}
          >
            <ListItemText primary={title} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/*mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/*large screen */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
