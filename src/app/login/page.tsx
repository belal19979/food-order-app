import { Login } from "@/components/auth/Login";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) {
  const callbackUrl = searchParams?.callbackUrl || "menu";

  return <Login callbackUrl={callbackUrl} />;
}
