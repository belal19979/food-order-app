import { Skeleton } from "@mui/material";

import { useAuth } from "@/components/AuthProvider";
import { SignInLinks } from "./SignInLinks";
import { AuthDisplay } from "./AuthDisplay";

export function AuthMenu() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Skeleton variant="text" width={100} />;
  }
  if (!user) {
    return <SignInLinks />;
  }
  return <AuthDisplay user={user} />;
}
