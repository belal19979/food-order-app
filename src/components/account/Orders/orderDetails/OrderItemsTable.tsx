import { OrderItem } from "@/types/order";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
export const OrderItemsTable = ({ items }: { items: OrderItem[] }) => {
  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Img</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Line Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Avatar
                  src={item.food.image}
                  variant="square"
                  sx={{ width: 40, height: 40 }}
                />
              </TableCell>
              <TableCell>{item.food.name}</TableCell>
              <TableCell align="right">€{item.price.toFixed(2)}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">
                €{(item.price * item.quantity).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
