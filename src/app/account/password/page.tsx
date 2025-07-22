import { getCurrentUser } from "@/lib/server/auth";
import { ChangePasswordPanel } from "@/components";
import { redirect } from "next/navigation";

export default async function ChangePasswordPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return <ChangePasswordPanel />;
}
