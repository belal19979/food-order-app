"use client";

import { useAuthHandler } from "@/hooks";
import { AuthForm } from "./AuthForm";

export const Login = () => {
  const login = useAuthHandler("login");
  return (
    <AuthForm
      signIn={login}
      title="Welcome back"
      subtitleText="Don’t have an account? Sign Up"
      subtitleHref="/register"
      localeText={{
        providerSignInTitle: (provider) => `Log In with ${provider}`,
      }}
    />
  );
};
