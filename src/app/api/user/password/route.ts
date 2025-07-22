import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getCurrentUser, verifyPassword } from "@/lib/server/auth";
import { updateUserPassword } from "@/lib/server/auth";

export async function PATCH(req: Request) {
  const { currentPassword, newPassword } = await req.json();

  if (!currentPassword || !newPassword) {
    return NextResponse.json(
      { error: "Both current and new passwords are required" },
      { status: 400 }
    );
  }

  const me = await getCurrentUser();
  if (!me) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  await verifyPassword(currentPassword, me.hash);

  const rounds = parseInt(process.env.BCRYPT_ROUNDS ?? "12", 10);
  const newHash = await bcrypt.hash(newPassword, rounds);

  await updateUserPassword(me.id, newHash);

  return NextResponse.json({ message: "Password changed" });
}
