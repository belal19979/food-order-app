import { ReactElement } from "react";
import { AccountSidebar } from "@/components/account/AccountSidebar";
import { getCurrentUser } from "@/lib/server/auth";
import { redirect } from "next/navigation";

import { Grid } from "@mui/material";

export default async function AccountLayout({
  children,
}: {
  children: ReactElement;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <Grid container>
      <Grid
        size={{ xs: 12, sm: 3 }}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <AccountSidebar />
      </Grid>
      <Grid size={{ xs: 12, sm: 9 }} p={{ xs: 2, md: 4 }}>
        {children}
      </Grid>
    </Grid>
  );
}
