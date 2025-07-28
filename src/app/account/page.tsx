import { getCurrentUser } from "@/lib/server/auth";
import { ProfilePanel } from "@/components/account";

import { redirect } from "next/navigation";

export default async function Account() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return <ProfilePanel user={user} />;
}
