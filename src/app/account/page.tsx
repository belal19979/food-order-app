import { getCurrentUser } from "@/lib/server/auth";
import { AccountPage } from "@/components";
import { redirect } from "next/navigation";

export default async function Account() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return <AccountPage user={user} />;
}
