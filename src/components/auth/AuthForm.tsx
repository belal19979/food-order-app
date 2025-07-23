"use client";
import { AppProvider } from "@toolpad/core/AppProvider";
import {
  SignInPage,
  type AuthProvider,
  type AuthResponse,
} from "@toolpad/core/SignInPage";

import theme from "@/theme/theme";
import { Typography, Link, Button } from "@mui/material";
import NextLink from "next/link";
import { redirect } from "next/navigation";

export interface AuthFormProps {
  signIn: (provider: AuthProvider, formData: FormData) => Promise<AuthResponse>;
  title: string;
  subtitleText: string;
  subtitleHref: string;
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
}: AuthFormProps) => {
  return (
    <AppProvider theme={theme}>
      <Button variant="contained" onClick={redirect("/forgot-password")}>
        forgot password
      </Button>

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
            <Typography align="center" sx={{ mb: 2 }}>
              <Link
                component={NextLink}
                href={subtitleHref}
                underline="hover"
                sx={{ color: "primary.main" }}
              >
                {subtitleText}
              </Link>
            </Typography>
          ),
        }}
      />
    </AppProvider>
  );
};
