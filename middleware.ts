import { NextRequest, NextResponse } from "next/server";
import { obtain, isExpired } from "@/actions/action";

const protectedRoutes = ["/product","/analytics"];

export default async function middleware(request: NextRequest) {
  const userToken = await obtain();

  if (!userToken && protectedRoutes.includes(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (userToken) {
    if (
      (await isExpired(userToken.value)) &&
      protectedRoutes.includes(request.nextUrl.pathname)
    ) {
      // Handle token removal or redirection if needed
      console.log("Token has expired");
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
}
