import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("dta recieved", data);
  // … validate + compute totals …
  //   const order = await prisma.order.create({ data });
  return Response.json("order", { status: 201 });
}
