"use client";

import { Container, Typography, Box, Button, TextField } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  newPassword: string;
  confirmPassword: string;
};

export const ResetPassword = () => {
  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: { newPassword: "", confirmPassword: "" },
  });

  const router = useRouter();
  const params = useSearchParams();
  const token = params?.get("token");

  const onSubmit = async ({ newPassword }: FormData) => {
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, newPassword }),
    });
    if (res.ok) router.push("/login?reset=success");
  };
  const pw = watch("newPassword");
  const cpw = watch("confirmPassword");

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
        {" "}
        <Typography component="h1" variant="h5" gutterBottom>
          Reset your password
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, width: "100%" }}
        >
          <Controller
            name="newPassword"
            control={control}
            rules={{ required: "new Password is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="New Password"
                type="password"
                fullWidth
                required
                sx={{ mb: 3 }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "confirm Password is required",
              validate: (value) => value === pw || "Passwords do not match",
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Confirm Password"
                type="password"
                fullWidth
                required
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            disabled={!pw || pw !== cpw}
          >
            Save New Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
