"use client";
import { AppProvider } from "@toolpad/core/AppProvider";
import {
  SignInPage,
  type AuthProvider,
  type AuthResponse,
} from "@toolpad/core/SignInPage";
import { useRouter } from "next/navigation";

import theme from "@/theme/theme";

const providers = [{ id: "credentials", name: "Email and Password" }];

export const Register = () => {
  const router = useRouter();
  const signIn = async (
    provider: AuthProvider,
    formData: FormData
  ): Promise<AuthResponse> => {
    if (provider.id === "credentials") {
      const email = formData.get("email");
      const password = formData.get("password");
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        return { error: "Email already registered" };
      }
    }
    router.replace("/menu");
    return {};
  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{
          emailField: { autoFocus: true },
        }}
      />
    </AppProvider>
  );
};
