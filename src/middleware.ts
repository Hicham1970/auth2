import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ['/', '/sign-in', '/sign-up'];

export default authMiddleware({
  // Use afterAuth hook for protection logic
  afterAuth(auth, req: NextRequest) {
    const { pathname } = new URL(req.url);

    // Allow public paths
    if (publicPaths.includes(pathname)) {
      return NextResponse.next();
    }

    // Redirect unauthenticated users to sign-in
    if (!auth.userId) {
      const signInUrl = new URL(
        `/sign-in?redirect_url=${encodeURIComponent(pathname)}`,
        req.url
      );
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};