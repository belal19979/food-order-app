"use client";
import { useRouter } from "next/navigation";
import type { AuthProvider, AuthResponse } from "@toolpad/core/SignInPage";

/**
 * Returns a `signIn(provider, formData)` callback
 * wired up to either `/api/auth/login` or `/api/auth/register`.
 */

export function useAuthHandler(
  mode: "login" | "register",
  callbackUrl: string
) {
  const router = useRouter();

  return async (
    provider: AuthProvider,
    formData: FormData
  ): Promise<AuthResponse> => {
    if (provider.id === "credentials") {
      const email = formData.get("email");
      const password = formData.get("password");
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const { message } = await res.json().catch(() => ({}));
        return {
          error:
            message ||
            (mode === "login"
              ? "Invalid credentials"
              : "Email already registered"),
        };
      }
    }
    router.replace(callbackUrl);
    return {};
  };
}
