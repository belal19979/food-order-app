import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "../prisma";
import { randomBytes } from "node:crypto";
import { sendResetEmail } from "../sendResetEmail";
import dayjs from "dayjs";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function withAuthCookie(userId: string, response: NextResponse) {
  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const token = jwt.sign({ userId, version: user.tokenVersion }, JWT_SECRET, {
    expiresIn: "7d",
  });
  response.cookies.set("authToken", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}

export async function verifyPassword(
  plain: string,
  hash: string
): Promise<true | NextResponse> {
  const ok = await bcrypt.compare(plain, hash);
  if (!ok) {
    throw NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
  return true;
}

export async function getCurrentUser() {
  const token = (await cookies()).get("authToken")?.value;
  if (!token) return null;
  const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
  const userId = payload.userId;
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      hash: true,
      tokenVersion: true,
    },
  });

  // if the token’s version doesn’t match the DB, it’s invalid
  if (payload.version !== user.tokenVersion) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tokenVersion, ...rest } = user;

  return rest;
}

export async function updateCurrentUser(data: { name: string }) {
  const me = await getCurrentUser();
  if (!me) throw new Error("Not authenticated");
  return prisma.user.update({
    where: { id: me.id },
    data,
  });
}

export async function updateUserPassword(userId: string, hash: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { hash, tokenVersion: { increment: 1 } },
  });
}

export async function requestPasswordReset(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return;
  //remove any previous unused token //
  await prisma.passwordResetToken.deleteMany({
    where: { userId: user.id, used: false },
  });

  //create a new token
  const token = randomBytes(32).toString("hex");

  await prisma.passwordResetToken.create({
    data: {
      token,
      userId: user.id,
      expiresAt: dayjs().add(60, "minute").toDate(),
    },
  });
  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;
  await sendResetEmail(user.email, resetUrl);
}
