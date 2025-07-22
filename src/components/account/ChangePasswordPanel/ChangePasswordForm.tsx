import { FC } from "react";
import { TextField, Button, Stack, Paper } from "@mui/material";

interface Props {
  currentPassword: string;
  newPassword: string;
  loading: boolean;
  canSubmit: boolean;
  onCurrentChange: (v: string) => void;
  onNewChange: (v: string) => void;
  onSubmit: () => void;
}

export const ChangePasswordForm: FC<Props> = ({
  currentPassword,
  newPassword,
  loading,
  canSubmit,
  onCurrentChange,
  onNewChange,
  onSubmit,
}) => (
  <Paper sx={{ p: 4, mt: 5, maxWidth: 500, mx: "auto" }}>
    <Stack spacing={2}>
      <TextField
        label="Current Password"
        type="password"
        value={currentPassword}
        fullWidth
        onChange={(e) => onCurrentChange(e.target.value)}
      />
      <TextField
        label="New Password"
        type="password"
        value={newPassword}
        fullWidth
        onChange={(e) => onNewChange(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={onSubmit}
        disabled={loading || !canSubmit}
      >
        {loading ? "Updating…" : "Update Password"}
      </Button>
    </Stack>
  </Paper>
);
