"use client";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

export function ActionButtons() {
  const [qty, setQty] = useState(1);
  const saveQty = () => {
    console.log("saved value is ", { qty });
  };
  return (
    <>
      <Button>
        <Button onClick={() => setQty((prev) => prev - 1)}>-</Button>
        <Typography>{qty}</Typography>
        <Button onClick={() => setQty((prev) => prev + 1)}>+</Button>
      </Button>
      <Button onClick={saveQty} variant="contained" sx={{ ml: "auto" }}>
        Add to cart
      </Button>
    </>
  );
}
