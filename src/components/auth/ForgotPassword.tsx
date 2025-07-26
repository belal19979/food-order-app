"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

type FormData = { email: string };

export function ForgotPassword() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: { email: "" },
  });

  const router = useRouter();
  const qs = useSearchParams();
  const sent = qs?.get("sent");

  const onSubmit = async (data: FormData) => {
    await fetch("/api/auth/request-password-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email }),
    });

    router.replace("/forgot-password?sent=1");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* */}
        <Typography component="h1" variant="h5" gutterBottom>
          Forgot your password?
        </Typography>
        {sent ? (
          <Alert severity="info" sx={{ mt: 2 }}>
            If an account exists for that e-mail, we’ve sent a link to reset
            your password. Check your inbox!
          </Alert>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3, width: "100%" }}
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: "E-mail is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="E-mail Address"
                  type="email"
                  fullWidth
                  required
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Send reset link
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}
