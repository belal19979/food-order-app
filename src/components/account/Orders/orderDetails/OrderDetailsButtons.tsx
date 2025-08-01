import { Button, Stack } from "@mui/material";
import Link from "next/link";

export const OrderDetailsButtons = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Button component={Link} variant="contained" href="/account/orders">
        Back to My Orders
      </Button>
      <Button component={Link} variant="contained" href="/">
        Re-order
      </Button>
    </Stack>
  );
};
