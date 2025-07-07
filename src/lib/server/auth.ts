import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

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
