import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { CreateOrderInput, CreateOrderSchema } from "@/lib/schemas/order";
import { computeTotals, buildLineItems } from "@/lib/server/orders";

export async function POST(req: Request) {
  let payload: CreateOrderInput;
  try {
    const json = await req.json();
    payload = CreateOrderSchema.parse(json);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  let lineItems;
  try {
    lineItems = await buildLineItems(payload);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 404 });
  }

  const { subtotal, deliveryFee, tax, total } = computeTotals(lineItems);

  const order = await prisma.order.create({
    data: {
      customerName: payload.customerName,
      customerPhone: payload.customerPhone,
      customerEmail: payload.customerEmail,
      deliveryAddress: payload.deliveryAddress,
      deliveryNote: payload.deliveryNote,

      subtotal,
      deliveryFee: new Prisma.Decimal(deliveryFee),
      tax,
      total,
      items: {
        create: lineItems.map((li) => ({
          foodId: li.foodId,
          quantity: li.quantity,
          price: li.price,
        })),
      },
    },
  });

  return NextResponse.json(order, { status: 201 });
}
