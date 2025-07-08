"use client";
import { Button, Typography, Skeleton } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useAuth } from "@/components/AuthProvider";

export function AuthLinks() {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    redirect("/login");
  };
  return (
    <>
      {loading ? (
        <Skeleton variant="text" width={100} />
      ) : user ? (
        <>
          <Typography>Hi, {user.email}</Typography>
          <Button color="inherit" onClick={handleLogout}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          {" "}
          <Button color="inherit" component={Link} href="/login">
            Sign In
          </Button>
          <Button color="inherit" component={Link} href="/register">
            Sign Up
          </Button>
        </>
      )}
    </>
  );
}
