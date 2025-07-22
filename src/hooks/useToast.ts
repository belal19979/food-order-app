import { useState } from "react";
import type { AlertColor } from "@mui/material";

interface ToastState {
  open: boolean;
  severity: AlertColor;
  message: string;
}
interface UseToast {
  toast: ToastState;
  showToast: (s: AlertColor, m: string) => void;
  closeToast: () => void;
}

export const useToast = (): UseToast => {
  const [toast, setToast] = useState<ToastState>({
    open: false,
    severity: "info",
    message: "",
  });

  const showToast = (severity: AlertColor, message: string) => {
    setToast({
      open: true,
      severity,
      message,
    });
  };

  const closeToast = () =>
    setToast((prev) => ({ ...prev, open: false, message: "" }));

  return { toast, showToast, closeToast };
};
