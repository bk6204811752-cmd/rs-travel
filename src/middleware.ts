import { NextResponse } from 'next/server';

/**
 * Middleware — passthrough.
 * www/https domain redirects are handled by vercel.json at the edge level.
 * This avoids "Page with redirect" flags in Google Search Console.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$).*)',
  ],
};
