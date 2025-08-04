"use client";
import Pagination from "@mui/material/Pagination";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";

type TableStyle = {
  mode: "table";
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (p: number) => void;
  onRowsPerPageChange: (r: number) => void;
};

type DotStyle = {
  mode: "dots";
  pageCount: number;
  page: number;
  onPageChange: (p: number) => void;
};

type PaginationControlsProps = TableStyle | DotStyle;

export const PaginationControls = (props: PaginationControlsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      {props.mode === "table" && (
        <TablePagination
          component="div"
          count={props.count}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          onPageChange={(_, newPage) => props.onPageChange(newPage)}
          onRowsPerPageChange={(e) => {
            props.onRowsPerPageChange(+e.target.value);
            props.onPageChange(0);
          }}
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          sx={{ flex: "0 0 auto" }}
        />
      )}
      {props.mode === "dots" && (
        <Pagination
          count={props.pageCount}
          page={props.page + 1}
          onChange={(_, page) => props.onPageChange(page - 1)}
        />
      )}
    </Box>
  );
};
