"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, TextField, Paper, Stack, Typography } from "@mui/material";

type FormValues = {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  deliveryNote?: string;
};
export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("submit", data);
  };

  return (
    <Box maxWidth="sm" mx="auto" component={Paper} p={3}>
      <Typography variant="h5" mb={5}>
        Your Details
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField
            label="Full Name"
            {...register("fullName", { required: "Full name is required" })}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            fullWidth
          />
          <TextField
            label="Phone Number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Must be 10–15 digits",
              },
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
          />
          <TextField
            label="Email Address"
            {...register("email", {
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message || "Optional"}
            fullWidth
          />
          <TextField
            label="Delivery Address"
            {...register("address", { required: "Address is required" })}
            error={!!errors.address}
            helperText={errors.address?.message}
            fullWidth
          />

          <TextField
            label="Delivery Note"
            {...register("deliveryNote")}
            helperText="Optional"
            fullWidth
            multiline
            rows={2}
          />
        </Stack>
      </form>
    </Box>
  );
};
