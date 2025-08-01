"use client";
import { Stack } from "@mui/material";
import { Order } from "@/types/order";
import { BackButton } from "@/components/ui";
import { ReorderButton } from "@/components/ui/ReorderButton";

export const OrderDetailsButtons = ({ order }: { order: Order }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <BackButton text="Back to My Orders" href="/account/orders"></BackButton>
      <ReorderButton order={order} />
    </Stack>
  );
};
