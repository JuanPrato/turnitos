import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const log = request.cookies.get("log")?.value;

  if (log) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/admin", request.url));
}

export const config = {
  matcher: "/admin/dashboard",
};
