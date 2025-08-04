"use client";
import { OrderItem } from "@/types/order";
import { TableContainer, Paper } from "@mui/material";
import { usePagination } from "@/hooks";
import { PaginationControls } from "@/components/ui";
import { OrderItemsTableContent } from "./OrderItemsTableContent";

export const OrderItemsTable = ({ items }: { items: OrderItem[] }) => {
  const {
    page,
    rowsPerPage,
    slice: itemsToRender,
    setPage,
    setRowsPerPage,
  } = usePagination(items, 5);

  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <OrderItemsTableContent items={itemsToRender} />
      </TableContainer>
      <PaginationControls
        mode="table"
        count={items.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={setPage}
        onRowsPerPageChange={setRowsPerPage}
      />
    </>
  );
};
