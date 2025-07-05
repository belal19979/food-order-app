"use client";
import { Container, Grid, Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./ CheckoutSummary";
import { BackButton } from "@/components/ui";
import { FormValues } from "@/types/form";
import { useCheckout } from "@/hooks";

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });
  const { loading, error, submit } = useCheckout();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await submit(data);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <BackButton text="Back To Cart" href="/cart" />
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Grid
          container
          component="section"
          sx={{ width: "100%" }}
          spacing={5}
          marginTop={10}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <CheckoutForm register={register} errors={errors} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CheckoutSummary isSubmitting={isSubmitting || loading} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
