import { useMemo } from "react";
import { Box, Grid } from "@mui/material";
import { ProfileDetailItem } from "./ProfileDetailItem";
import { CurrentUser } from "@/types/user";

export const ProfileDetailList = ({ user }: { user: CurrentUser }) => {
  const { name, email, createdAt } = user;
  const formattedDate = useMemo(
    () =>
      createdAt.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [createdAt]
  );

  return (
    <Box component="dl" mt={2}>
      <Grid container spacing={2}>
        <ProfileDetailItem label="Name" value={name ?? "Unknown"} />
        <ProfileDetailItem label="Email" value={email} />
        <ProfileDetailItem label="  Member Since" value={formattedDate} />
      </Grid>
    </Box>
  );
};
