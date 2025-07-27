import { prisma } from "@/lib/prisma";

import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, newPassword } = await req.json();

  const resetRow = await prisma.passwordResetToken.findUnique({
    where: { token },
    select: { id: true, userId: true, used: true, expiresAt: true },
  });

  if (!resetRow || resetRow.used || resetRow.expiresAt < new Date()) {
    return NextResponse.json(
      { error: "Invalid or expired reset token" },
      { status: 400 }
    );
  }

  const newHash = await bcrypt.hash(
    newPassword,
    parseInt(process.env.BCRYPT_ROUNDS || "12")
  );

  // Update the user's password and bump tokenVersion to invalidate old JWTs
  await prisma.user.update({
    where: { id: resetRow.userId },
    data: {
      hash: newHash,
      tokenVersion: { increment: 1 },
    },
  });

  // Mark this token as used so it can't be replayed
  await prisma.passwordResetToken.update({
    where: { id: resetRow.id },
    data: { used: true },
  });

  return NextResponse.json({ ok: true });
}
