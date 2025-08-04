import { useState } from "react";

export const usePagination = <T>(items: T[], defaultRowsPerPage = 3) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const pageCount = Math.ceil(items.length / rowsPerPage);
  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const slice = items.slice(start, end);

  return {
    page,
    rowsPerPage,
    pageCount,
    slice,
    setPage,
    setRowsPerPage,
  };
};
