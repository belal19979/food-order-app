import { NextResponse } from "next/server";
import { getCurrentUser, updateCurrentUser } from "@/lib/server/auth";

export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json({ user });
}

export async function PATCH(request: Request) {
  const payload = await request.json();
  console.log("payload", payload);
  const user = await updateCurrentUser(payload);
  console.log("user", user);

  return NextResponse.json({ user });
}
