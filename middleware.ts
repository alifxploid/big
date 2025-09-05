import { NextRequest, NextResponse } from 'next/server'

// Konfigurasi path admin dari environment
const ADMIN_LOGIN_PATH = process.env.ADMIN_LOGIN_PATH || '/admin/login'
const ADMIN_BASE_PATH = '/admin'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Handle custom admin login path
  if (pathname === ADMIN_LOGIN_PATH && ADMIN_LOGIN_PATH !== '/admin/login') {
    // Redirect custom path ke /admin/login
    return NextResponse.rewrite(new URL('/admin/login', request.url))
  }
  
  // Proteksi rute admin (kecuali login)
  if (pathname.startsWith(ADMIN_BASE_PATH) && pathname !== '/admin/login') {
    const sessionCookie = request.cookies.get('admin-session')
    
    if (!sessionCookie) {
      return NextResponse.redirect(new URL(ADMIN_LOGIN_PATH, request.url))
    }
    
    try {
      const session = JSON.parse(sessionCookie.value)
      
      // Cek apakah session masih valid
      if (!session.expiresAt || session.expiresAt <= Date.now()) {
        const response = NextResponse.redirect(new URL(ADMIN_LOGIN_PATH, request.url))
        response.cookies.delete('admin-session')
        return response
      }
    } catch (error) {
      // Session tidak valid, redirect ke login
      const response = NextResponse.redirect(new URL(ADMIN_LOGIN_PATH, request.url))
      response.cookies.delete('admin-session')
      return response
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}