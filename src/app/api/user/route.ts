import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/server/auth";

export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json({ user });
}
