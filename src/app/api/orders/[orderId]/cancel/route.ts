import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/server/auth";
import { OrderStatus } from "@/generated/prisma";

type Params = { params: { orderId: string } };

export async function POST(req: Request, { params }: Params) {
  const user = await getCurrentUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { orderId } = params;
  const result = await prisma.order.updateMany({
    where: {
      id: orderId,
      userId: user.id,
      status: OrderStatus.PENDING,
    },
    data: {
      status: OrderStatus.CANCELLED,
      statusUpdatedAt: new Date(),
    },
  });
  if (result.count === 0) {
    //either not found or not owned by user or the state is pending
    const current = await prisma.order.findFirst({
      where: { id: orderId, userId: user.id },
      select: { id: true, status: true },
    });
    if (!current) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    if (current.status !== OrderStatus.PENDING) {
      return NextResponse.json(
        {
          error: "This order can no longer be cancelled",
          status: current.status,
        },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: "Unable to cancel" }, { status: 400 });
  }
  return NextResponse.json(
    {
      ok: true,
      status: OrderStatus.CANCELLED,
      message: "order cancelled successfully",
    },
    { status: 200 }
  );
}
