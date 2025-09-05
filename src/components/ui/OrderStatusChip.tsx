import Chip from "@mui/material/Chip";
import { STATUS_META } from "./status";

export function OrderStatusChip({
  status,
  fullWidth,
}: {
  status: keyof typeof STATUS_META;
  fullWidth?: boolean;
}) {
  const meta = STATUS_META[status];
  return (
    <Chip
      size="small"
      label={meta.label}
      color={meta.color}
      variant="filled"
      sx={{
        px: 1,
        py: 2,
        ...(fullWidth && { minWidth: { xs: 120, sm: "auto" } }),
      }}
    />
  );
}
