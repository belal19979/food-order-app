import { useMemo } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { ProfileDetailItem } from "./ProfileDetailItem";
import { CurrentUser } from "@/types/user";

export const ProfileDetailList = ({
  user,
  isEditing,
  form,
  onFormChange,
}: {
  user: CurrentUser;
  isEditing: boolean;
  form: { name: string };
  onFormChange: (form: { name: string }) => void;
}) => {
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
        <ProfileDetailItem
          label="Name"
          value={
            isEditing ? (
              <TextField
                value={form.name}
                onChange={(e) => onFormChange({ name: e.target.value })}
              />
            ) : (
              form.name || <em>Not set</em>
            )
          }
        />
        <ProfileDetailItem label="Email" value={email} />
        <ProfileDetailItem label="  Member Since" value={formattedDate} />
      </Grid>
    </Box>
  );
};
