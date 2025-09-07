"use client";

import { Order } from "@/types/order";
import { useEffect, useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { OrderCard } from "./OrderCard";
import { GenericDropDown } from "@/components/Menu/FilterBar/GenericDropDown";
import { OrderStatus } from "@/generated/prisma";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const STATUS_VALUES = Object.values(OrderStatus);

export const OrdersShell = ({ orders }: { orders: Order[] }) => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus | "">("");
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams();

  useEffect(() => {
    const raw = searchParams?.get("status");
    if (!raw) {
      setOrderStatus("");
      return;
    }
    const normalized = raw.toUpperCase() as OrderStatus;
    setOrderStatus(STATUS_VALUES.includes(normalized) ? normalized : "");
  }, [searchParams]);

  const handleStatusChange = (value: OrderStatus | "") => {
    setOrderStatus(value);
    const params = new URLSearchParams(searchParams?.toString());
    if (!value) {
      params.set("status", "all");
    } else {
      params.set("status", value.toLowerCase());
    }
    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
  };
  const filtered = orders.filter(
    (o) => orderStatus === "" || o.status === orderStatus
  );
  if (orders.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6">You have no past orders yet.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <GenericDropDown
        options={STATUS_VALUES}
        value={orderStatus}
        label="Status"
        onChange={handleStatusChange}
      />

      <Stack spacing={4} mt={4}>
        {filtered.length === 0 && (
          <Typography variant="body1">
            No orders found with status {orderStatus}
          </Typography>
        )}
        {filtered.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Stack>
    </Container>
  );
};
