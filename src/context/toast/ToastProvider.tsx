"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  ReactNode,
} from "react";
import type { AlertColor } from "@mui/material";
import { Toast } from "@/components/ui";

type ToastState = {
  open: boolean;
  severity: AlertColor;
  message: string;
};

type ToastContextValue = {
  showToast: (severity: AlertColor, message: string) => void;
  closeToast: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>({
    open: false,
    severity: "info",
    message: "",
  });

  const showToast = useCallback((severity: AlertColor, message: string) => {
    setToast({ open: true, severity, message });
  }, []);

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  const value = useMemo(
    () => ({ showToast, closeToast }),
    [showToast, closeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast
        open={toast.open}
        severity={toast.severity}
        message={toast.message}
        onClose={closeToast}
      />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider />");
  return ctx;
}
