import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const { pathname, origin } = req.nextUrl;

  if (
    ["/cart", "/checkout", "/order-confirmation", "/orders"].some((p) =>
      pathname.startsWith(p)
    ) &&
    !token
  ) {
    const loginUrl = new URL("/login", origin);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart/:path*",
    "/checkout/:path*",
    "/order-confirmation/:path*",
    "/orders/:path*",
  ],
};
