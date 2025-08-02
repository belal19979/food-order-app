"use client";
import { OrderItem } from "@/types/order";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  TablePagination,
  Avatar,
} from "@mui/material";
import { TablePaginationActions } from "./TablePaginationActions";
import { useState } from "react";
export const OrderItemsTable = ({ items }: { items: OrderItem[] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const itemsToRender =
    rowsPerPage > 0
      ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : items;

  return (
    <TableContainer component={Paper} variant="outlined">
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
          {itemsToRender.map((item) => (
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
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
