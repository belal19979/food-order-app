import { Button } from "@mui/material";
import Link from "next/link";

export function SignInLinks() {
  return (
    <>
      <Button color="inherit" component={Link} href="/login">
        Sign In
      </Button>
      <Button color="inherit" component={Link} href="/register">
        Sign Up
      </Button>
    </>
  );
}
