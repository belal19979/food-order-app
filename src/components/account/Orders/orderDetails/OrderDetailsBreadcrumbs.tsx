import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export function OrderDetailsBreadcrumbs({ orderId }: { orderId: string }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ mb: 2 }}
    >
      <Link underline="hover" color="inherit" href="/account">
        Account
      </Link>

      <Link underline="hover" color="inherit" href="/account/orders">
        My Orders
      </Link>

      <Typography color="primary">#{orderId.slice(0, 6)}</Typography>
    </Breadcrumbs>
  );
}
