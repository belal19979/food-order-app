import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/lib/schemas/auth";
import { withAuthCookie, verifyPassword } from "@/lib/server/auth";

export async function POST(req: Request) {
  const input = LoginSchema.safeParse(await req.json());
  if (!input.success) {
    return NextResponse.json({ error: input.error.errors }, { status: 400 });
  }

  const { email, password } = input.data;

  const user = await prisma.user.findUniqueOrThrow({
    where: { email },
  });

  await verifyPassword(password, user.hash);

  const res = NextResponse.json({ id: user.id, email }, { status: 201 });
  return withAuthCookie(user.id, res);
}
