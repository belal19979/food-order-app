import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/schemas/auth";
import bcrypt from "bcrypt";
import { withAuthCookie } from "@/lib/server/auth";

export async function POST(req: Request) {
  const input = RegisterSchema.safeParse(await req.json());
  if (!input.success) {
    return NextResponse.json({ error: input.error.errors }, { status: 400 });
  }
  const { email, password } = input.data;

  const exists = await prisma.user.findUnique({
    where: { email },
  });
  if (exists) {
    return NextResponse.json(
      { error: "Email already registered" },
      { status: 409 }
    );
  }

  const hash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: { email, hash },
    select: { id: true, email: true },
  });

  const res = NextResponse.json({ id: user.id, email }, { status: 201 });
  return withAuthCookie(user.id, res);
}
