import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/server/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, newPassword } = await req.json();
}
