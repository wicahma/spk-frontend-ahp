import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tokenSession = cookies().get("token")?.value ?? null;

  console.log(tokenSession);
  // if (tokenSession && pathname === "/")
  //   return NextResponse.redirect(new URL("/home", request.url));

  // if (!tokenSession && pathname !== "/login")
  //   return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!login|forget-password|api|_next/static|_next/image|favicon.ico|img|icons|svg|images).*)",
  ],
};
