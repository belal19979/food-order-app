import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "../prisma";

const JWT_SECRET = process.env.JWT_SECRET!;

export function withAuthCookie(userId: string, response: NextResponse) {
  const token = jwt.sign({ userId }, JWT_SECRET, {
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
  return await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true, createdAt: true, hash: true },
  });
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
    data: { hash },
  });
}
