import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";
import { redirect } from "next/navigation";

const publicOnlyPaths: { [key: string]: boolean } = {
  "/": true,
  "/join": true,
  "/login": true,
  "/sms": true,
};

const authOnlyPaths: { [key: string]: boolean } = {
  "/profile": true,
  "/products": true,
};

export const middleware = async (request: NextRequest) => {
  const { userId } = await getSession();

  if (userId) {
    if (publicOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  } else {
    if (authOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
