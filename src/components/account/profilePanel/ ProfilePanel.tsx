"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Paper, Typography } from "@mui/material";
import { ProfileCardHeader } from "./ProfileCardHeader";
import { ProfileDetailList } from "./ProfileDetailList";
import { CurrentUser } from "@/types/user";
import { updateUserData } from "@/lib/api/user";
import { Toast } from "@/components/ui";

export const ProfilePanel = ({ user }: { user: CurrentUser }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [form, setForm] = useState({ name: user.name ?? "" });

  const handleSave = async () => {
    updateUserData(form);
    setIsEditing(false);
    setToastOpen(true);
    router.refresh();
  };

  return (
    <Box>
      <Typography variant="h4" align="center" mb={3}>
        ProfilePanel
      </Typography>
      <Paper
        variant="outlined"
        sx={{ borderRadius: 2, p: 4, maxWidth: 600, mx: "auto" }}
      >
        <ProfileCardHeader
          onStartEdit={() => setIsEditing((prev) => !prev)}
          onCancel={() => {
            setIsEditing(false);
            setForm({ name: user.name ?? "" });
          }}
          onSave={handleSave}
          isEditing={isEditing}
          disableSave={form.name.trim() === ""}
        />
        <ProfileDetailList
          form={form}
          onFormChange={setForm}
          isEditing={isEditing}
          user={user}
        />
      </Paper>
      <Toast
        open={toastOpen}
        severity="success"
        message="Changes saved!"
        onClose={() => setToastOpen(false)}
      />
    </Box>
  );
};
