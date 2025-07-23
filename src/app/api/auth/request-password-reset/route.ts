import { NextResponse } from "next/server";
import { requestPasswordReset } from "@/lib/server/auth";

export async function POST(req: Request) {
  const { email } = await req.json();
  console.log("email at route", email);
  await requestPasswordReset(email);
  return NextResponse.json({ ok: true });
}
