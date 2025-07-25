import { NextResponse } from "next/server";
import { requestPasswordReset } from "@/lib/server/auth";

export async function POST(req: Request) {
  const { email } = await req.json();
  await requestPasswordReset(email);
  return NextResponse.json({ ok: true });
}
