"use client";

import { Box, Typography } from "@mui/material";
import { Toast } from "@/components/ui";
import { useToast } from "@/hooks";
import { useChangePassword } from "./hooks/useChangePassword";
import { ChangePasswordForm } from "./ChangePasswordForm";

export const ChangePasswordPanel = () => {
  const { toast, closeToast, showToast } = useToast();

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
      <Toast
        open={toast.open}
        severity={toast.severity}
        message={toast.message}
        onClose={closeToast}
      />
    </Box>
  );
};
