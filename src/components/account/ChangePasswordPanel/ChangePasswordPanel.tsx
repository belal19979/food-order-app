"use client";

import { Box, Typography } from "@mui/material";
import { useToast } from "@/context/toast/ToastProvider";
import { useChangePassword } from "./hooks/useChangePassword";
import { ChangePasswordForm } from "./ChangePasswordForm";

export const ChangePasswordPanel = () => {
  const { showToast } = useToast();

  const {
    updatePassword,
    setCurrentPassword,
    setNewPassword,
    currentPassword,
    loading,
    newPassword,
    canSubmit,
  } = useChangePassword(showToast);

  return (
    <Box>
      <Typography align="center" mb={3} variant="h4">
        Change Password
      </Typography>
      <ChangePasswordForm
        currentPassword={currentPassword}
        newPassword={newPassword}
        loading={loading}
        canSubmit={canSubmit}
        onCurrentChange={setCurrentPassword}
        onNewChange={setNewPassword}
        onSubmit={updatePassword}
      />
    </Box>
  );
};
