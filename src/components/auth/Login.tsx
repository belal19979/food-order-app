"use client";

import { useAuthHandler } from "@/hooks";
import { AuthForm } from "./AuthForm";

export const Login = ({ callbackUrl }: { callbackUrl: string }) => {
  const login = useAuthHandler("login", callbackUrl);
  console.log("callbackUrl", callbackUrl);

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
