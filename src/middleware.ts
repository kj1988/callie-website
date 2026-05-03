import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Some clients only fetch /favicon.ico; serve the actual logo JPEG there. */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/favicon.ico") {
    return NextResponse.rewrite(new URL("/logo.jpeg", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/favicon.ico",
};
