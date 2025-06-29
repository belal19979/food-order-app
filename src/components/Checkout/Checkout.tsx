import { Container, Grid } from "@mui/material";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./ CheckoutSummary";
import { BackButton } from "@/components/ui";

export const Checkout = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <BackButton text="Back To Cart" href="/cart" />
      <Grid
        container
        component="section"
        sx={{ width: "100%" }}
        spacing={5}
        marginTop={10}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <CheckoutForm />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CheckoutSummary />
        </Grid>
      </Grid>
    </Container>
  );
};
