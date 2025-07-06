import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/schemas/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  const input = RegisterSchema.safeParse(await req.json());
  if (!input.success) {
    return NextResponse.json({ error: input.error.errors }, { status: 400 });
  }

  //check for existing user
  const exists = await prisma.user.findUnique({
    where: { email: input.data.email },
  });
  if (exists) {
    return NextResponse.json(
      { error: "Email already registered" },
      { status: 409 }
    );
  }

  const hash = await bcrypt.hash(input.data.password, 12);

  const user = await prisma.user.create({
    data: { email: input.data.email, hash },
    select: { id: true, email: true },
  });

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "7d",
  });

  const res = NextResponse.json({ user }, { status: 201 });
  res.cookies.set("authTokenMo", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
  return res;
}
