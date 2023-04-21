import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("미들웨어 실행");
  if (request.nextUrl.pathname.startsWith("/product/1004")) {
    return NextResponse.redirect(new URL("/product", request.url));
  }
  // return NextResponse.redirect(new URL("/about-2", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/product/:path*",
};
