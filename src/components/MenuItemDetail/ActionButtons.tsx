import { Button } from "@mui/material";

export function ActionButtons() {
  return (
    <>
      <Button variant="outlined">Increase</Button>
      <Button variant="contained" sx={{ ml: "auto" }}>
        Add to cart
      </Button>
    </>
  );
}
