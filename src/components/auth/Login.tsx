"use client";

import { useAuthHandler } from "@/hooks";
import { AuthForm } from "./AuthForm";
import { useSearchParams } from "next/navigation";
import { Alert, Box } from "@mui/material";

export const Login = ({ callbackUrl }: { callbackUrl: string }) => {
  const login = useAuthHandler("login", callbackUrl);
  const params = useSearchParams();
  const reset = params?.get("reset");

  return (
    <Box maxWidth={420} mx="auto">
      {reset && (
        <Alert severity="success" sx={{ mt: 5 }}>
          Your password was reset successfully. Please sign in with your new
          password.
        </Alert>
      )}
      <AuthForm
        signIn={login}
        title="Welcome back"
        subtitleText="Don’t have an account? Sign Up"
        subtitleHref="/register"
        forgotPasswordHref="/forgot-password"
        forgotPasswordText="forgot password ?"
        localeText={{
          providerSignInTitle: (provider) => `Log In with ${provider}`,
        }}
      />
    </Box>
  );
};
