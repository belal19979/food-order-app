import { Login } from "@/components/auth/Login";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;
  const safeUrl = callbackUrl ?? "/menu";

  return <Login callbackUrl={safeUrl} />;
}
