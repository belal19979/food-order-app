import { PriceTotal } from "@/components/Cart/CartSummary/PriceTotal";
import { SummaryRow } from "@/components/ui";
import { Order } from "@/types/order";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { OrderItemsTable } from "./OrderItemsTable";
import { OrderDetailsHeader } from "./OrderDetailsHeader";
import { DeliveryNotes } from "./DeliveryNotes";
import { OrderDetailsButtons } from "./OrderDetailsButtons";
import { OrderDetailsBreadcrumbs } from "./OrderDetailsBreadcrumbs";

export const OrderDetailsPage = ({ order }: { order: Order }) => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <OrderDetailsBreadcrumbs orderId={order.id} />
      <Typography variant="h4">Order Details</Typography>
      <Stack pt={3} direction="column" spacing={2} divider={<Divider />}>
        <OrderDetailsHeader id={order.id} createdAt={order.createdAt} />
        <OrderDetailsButtons order={order} />

        <Stack mt={4}>
          <Typography variant="h6" gutterBottom>
            Items Ordered:
          </Typography>
          <OrderItemsTable items={order.items} />
        </Stack>

        <DeliveryNotes
          recipient={order.customerName}
          phone={order.customerPhone}
          note={order.deliveryNote}
        />
        {/**summary */}
        <Stack direction="column" spacing={2}>
          <SummaryRow label="Subtotal:" value={order.subtotal} />
          <SummaryRow label=" Tax (9%):" value={order.tax} />
          <SummaryRow label="Delivery Fee:" value={order.deliveryFee} />
        </Stack>
        <PriceTotal total={order.total} />
      </Stack>
    </Container>
  );
};
