"use client";
import { ProfilePanel } from "@/components/account";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "@/components";

export default function Account() {
  const { user, loading } = useAuth();
  if (loading) return <CircularProgress />;
  return <ProfilePanel user={user!} />;
}
