import { Order } from "@/types/order";
import { Box, Stack, Typography } from "@mui/material";

export const OrdersShell = ({ orders }: { orders: Order[] }) => {
  return (
    <div>
      {orders.map((o) => {
        return (
          <Box key={o.id}>
            <Stack>
              <Typography variant="h6">Order ID </Typography>
              <Typography variant="h6">{o.id}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">Order Date </Typography>
              <Typography variant="h6">{o.createdAt}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">Total price </Typography>
              <Typography variant="h6">{o.total}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">items </Typography>
              {o.items.map((item) => {
                return (
                  <Typography
                    key={item.id}
                  >{`${item.food.name}*${item.quantity}`}</Typography>
                );
              })}
            </Stack>
          </Box>
        );
      })}
    </div>
  );
};
