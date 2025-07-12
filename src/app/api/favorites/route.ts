import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/server/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ favorites: [] });
  const favs = await prisma.favorite.findMany({
    where: { userId: user.id },
    select: { foodId: true },
  });
  return NextResponse.json({ favorites: favs.map((f) => f.foodId) });
}

export async function POST(req: Request) {
  const { foodId, action } = (await req.json()) as {
    foodId: string;
    action: "add" | "remove";
  };
  const user = await getCurrentUser();
  if (!user) return NextResponse.error();

  if (action === "add") {
    const exists = await prisma.favorite.findFirst({
      where: { userId: user.id, foodId },
      select: { id: true },
    });
    if (!exists) {
      await prisma.favorite.create({
        data: { userId: user.id, foodId },
      });
    }
  } else {
    await prisma.favorite.deleteMany({
      where: { userId: user.id, foodId },
    });
  }

  return NextResponse.json({ success: true });
}
