"use client";

import { AuthForm } from "./AuthForm";
import { useAuthHandler } from "@/hooks";

export const Register = () => {
  const register = useAuthHandler("register");

  return (
    <AuthForm
      signIn={register}
      title="Create your account"
      subtitleText="Already have an account? Sign In"
      subtitleHref="/login"
      localeText={{
        providerSignInTitle: (provider) => `Sign Up with ${provider}`,
      }}
    />
  );
};
