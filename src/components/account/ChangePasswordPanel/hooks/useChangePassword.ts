import { useState } from "react";
import { useRouter } from "next/navigation";

import { updateUserPassword } from "@/lib/api/user";
import type { AlertColor } from "@mui/material";

export const useChangePassword = (
  showToast: (s: AlertColor, m: string) => void
) => {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const canSubmit = currentPassword !== "" && newPassword !== "";

  const updatePassword = async () => {
    if (!canSubmit) {
      showToast("error", "Please fill in both fields.");
      return;
    }
    setLoading(true);

    try {
      const res = await updateUserPassword(currentPassword, newPassword);
      showToast("success", res.message);
      router.push("/login");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        showToast("error", err.message);
      } else {
        showToast("error", "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    currentPassword,
    newPassword,
    setCurrentPassword,
    setNewPassword,
    updatePassword,
    loading,
    canSubmit,
  };
};
