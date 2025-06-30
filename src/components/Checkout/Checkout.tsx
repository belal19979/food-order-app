"use client";
import { Container, Grid, Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./ CheckoutSummary";
import { BackButton } from "@/components/ui";
import { useCart } from "@/context";
import { FormValues } from "@/types/form";
import { CreateOrderPayload } from "@/types/order";

export const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });

  useEffect(() => {
    if (cart.length === 0 && !isNavigating) router.replace("/menu");
  }, [cart, router, isNavigating]);

  if (cart.length === 0 && !isNavigating) return null;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const payload: CreateOrderPayload = {
      items: cart.map(({ slug, quantity }) => ({
        slug,
        quantity,
      })),
      customer: data,
    };
    setIsNavigating(true);
    console.log("sending payload:", payload);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const orderId = 1234;
    router.replace(`/order-confirmation/${orderId}`);
    clearCart();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <BackButton text="Back To Cart" href="/cart" />
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
            <CheckoutSummary isSubmitting={isSubmitting} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
