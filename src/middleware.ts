import { NextResponse } from 'next/server';

/**
 * Middleware — simplified.
 * 
 * www/https domain redirects are now handled by vercel.json at the edge level.
 * This avoids "Page with redirect" flags in Google Search Console, because
 * edge redirects fire BEFORE the Next.js app, making them invisible to GSC.
 * 
 * This middleware is kept as a passthrough for any future internal routing logic.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$).*)',
  ],
};
