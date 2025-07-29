import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookieName = process.env.ADMIN_COOKIE_NAME ?? "pomelia_admin";
  const isAuth = request.cookies.get(cookieName)?.value === "ok";
  const isLogin = request.nextUrl.pathname === "/admin/login";

  if (!isAuth && !isLogin && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  if (isAuth && isLogin) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
