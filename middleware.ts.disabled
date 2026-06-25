import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  
  // Lascia passare la pagina coming soon e i file statici
  if (url.startsWith('/coming-soon') || url.startsWith('/_next') || url.startsWith('/api')) {
    return NextResponse.next();
  }
  
  return NextResponse.redirect(new URL('/coming-soon', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};