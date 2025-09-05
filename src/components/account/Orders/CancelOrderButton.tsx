import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/context/toast/ToastProvider";

export function CancelOrderButton({ orderId }: { orderId: string }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const router = useRouter();

  const onConfirm = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/orders/${orderId}/cancel`, {
        method: "POST",
      });
      const json = await res.json();
      if (!res.ok) {
        if (res.status === 409) {
          showToast("error", "This order can no longer be cancelled.");
        } else if (res.status === 404) {
          showToast("error", "Order not found.");
        } else {
          showToast(
            "error",
            json.error ?? "Failed to cancel order. Please try again."
          );
        }
        return;
      }
      showToast("success", "Order cancelled successfully.");
      setOpen(false);
      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      showToast("error", "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button
        variant="contained"
        size="medium"
        sx={{
          transition: "transform 0.2s, background-color 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        onClick={() => setOpen(true)}
      >
        Cancel order
      </Button>
      <Dialog open={open} onClose={() => !loading && setOpen(false)}>
        <DialogTitle>Cancel order ?</DialogTitle>
        <DialogContent>
          Are you sure you want to cancel this order? This action cannot be
          undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            No , keep order
          </Button>
          <Button
            onClick={onConfirm}
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={16} /> : null}
          >
            yes ,cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
