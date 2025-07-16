import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/server/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ items: [] });
  const items = await prisma.cartItem.findMany({
    where: { userId: user.id },
    include: { food: true },
  });

  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  const { foodId, quantity } = (await req.json()) as {
    foodId: string;
    quantity: number;
  };
  console.log("recieved quantity", quantity);
  const user = await getCurrentUser();
  if (!user) return NextResponse.error();

  const item = await prisma.cartItem.upsert({
    where: { userId_foodId: { userId: user.id, foodId } },
    create: { userId: user.id, foodId, quantity },
    update: { quantity },
  });

  return NextResponse.json({ item });
}

export async function DELETE(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.error();

  const body = await req.json().catch(() => ({}));
  // if they passed a foodId, just delete that one:
  if (body.foodId) {
    await prisma.cartItem.delete({
      where: {
        userId_foodId: { userId: user.id, foodId: body.foodId },
      },
    });
  } else {
    // otherwise clear *all* items for this user
    await prisma.cartItem.deleteMany({
      where: { userId: user.id },
    });
  }

  return NextResponse.json({ success: true });
}
