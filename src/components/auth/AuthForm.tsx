"use client";
import { AppProvider } from "@toolpad/core/AppProvider";
import {
  SignInPage,
  type AuthProvider,
  type AuthResponse,
} from "@toolpad/core/SignInPage";

import theme from "@/theme/theme";
import { Typography, Link } from "@mui/material";
import NextLink from "next/link";

export interface AuthFormProps {
  signIn: (provider: AuthProvider, formData: FormData) => Promise<AuthResponse>;
  title: string;
  subtitleText: string;
  subtitleHref: string;
  forgotPasswordText?: string;
  forgotPasswordHref?: string;
  localeText?: Partial<Parameters<typeof SignInPage>[0]["localeText"]>;
}

const providers: AuthProvider[] = [
  { id: "credentials", name: "Email and Password" },
];

export const AuthForm = ({
  signIn,
  title,
  subtitleText,
  subtitleHref,
  localeText,
  forgotPasswordText,
  forgotPasswordHref,
}: AuthFormProps) => {
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        {...(localeText ? { localeText } : {})}
        slotProps={{
          emailField: { autoFocus: true },
          submitButton: {
            color: "primary",
            variant: "contained",
          },
        }}
        slots={{
          title: () => (
            <Typography variant="h4" align="center" gutterBottom>
              {title}
            </Typography>
          ),
          subtitle: () => (
            <>
              <Typography align="center" sx={{ mb: 1 }}>
                <Link
                  component={NextLink}
                  href={subtitleHref}
                  underline="hover"
                  sx={{ color: "primary.main" }}
                >
                  {subtitleText}
                </Link>
              </Typography>
              {forgotPasswordHref && forgotPasswordText && (
                <Typography align="center" sx={{ mb: 1 }}>
                  <Link
                    component={NextLink}
                    href={forgotPasswordHref}
                    underline="hover"
                    sx={{ color: "primary.main" }}
                  >
                    {forgotPasswordText}
                  </Link>
                </Typography>
              )}
            </>
          ),
        }}
      />
    </AppProvider>
  );
};
