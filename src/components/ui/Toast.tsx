import { Snackbar, Alert, AlertColor } from "@mui/material";

export const Toast = ({
  open,
  onClose,
  severity,
  message,
}: {
  open: boolean;
  onClose: () => void;
  severity: AlertColor;
  message: string;
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        elevation={6}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
