import { NextRequest, NextResponse } from 'next/server'

// Interface untuk kredensial admin
export interface AdminCredentials {
  username: string
  password: string
}

// Interface untuk session admin
export interface AdminSession {
  id: string
  username: string
  role: 'admin' | 'super_admin'
  loginTime: number
  expiresAt: number
}

// Konfigurasi default admin (dalam production, gunakan database)
const DEFAULT_ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin123'
}

// Durasi session (24 jam)
const SESSION_DURATION = 24 * 60 * 60 * 1000

/**
 * Validasi kredensial admin
 */
export async function validateAdminCredentials(
  credentials: AdminCredentials
): Promise<boolean> {
  try {
    // Dalam production, validasi dengan database
    // Untuk demo, gunakan kredensial default
    return (
      credentials.username === DEFAULT_ADMIN_CREDENTIALS.username &&
      credentials.password === DEFAULT_ADMIN_CREDENTIALS.password
    )
  } catch (error) {
    console.error('Error validating admin credentials:', error)
    return false
  }
}

/**
 * Membuat session admin
 */
export function createAdminSession(username: string): AdminSession {
  const now = Date.now()
  return {
    id: generateSessionId(),
    username,
    role: 'admin',
    loginTime: now,
    expiresAt: now + SESSION_DURATION
  }
}

/**
 * Validasi session admin
 */
export function validateAdminSession(session: AdminSession | null): boolean {
  if (!session) return false
  
  const now = Date.now()
  return session.expiresAt > now
}

/**
 * Generate session ID
 */
function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/**
 * Mendapatkan path login admin dari environment
 */
export function getAdminLoginPath(): string {
  return process.env.ADMIN_LOGIN_PATH || '/admin/login'
}

/**
 * Middleware untuk proteksi rute admin
 */
export function createAdminMiddleware() {
  return async (request: NextRequest) => {
    const { pathname } = request.nextUrl
    const adminLoginPath = getAdminLoginPath()
    
    // Jika mengakses halaman login admin, izinkan
    if (pathname === adminLoginPath) {
      return NextResponse.next()
    }
    
    // Jika mengakses rute admin lainnya, cek autentikasi
    if (pathname.startsWith('/admin')) {
      const sessionCookie = request.cookies.get('admin-session')
      
      if (!sessionCookie) {
        return NextResponse.redirect(new URL(adminLoginPath, request.url))
      }
      
      try {
        const session: AdminSession = JSON.parse(sessionCookie.value)
        
        if (!validateAdminSession(session)) {
          const response = NextResponse.redirect(new URL(adminLoginPath, request.url))
          response.cookies.delete('admin-session')
          return response
        }
      } catch (error) {
        const response = NextResponse.redirect(new URL(adminLoginPath, request.url))
        response.cookies.delete('admin-session')
        return response
      }
    }
    
    return NextResponse.next()
  }
}

/**
 * Utility untuk set session cookie
 */
export function setAdminSessionCookie(session: AdminSession) {
  if (typeof document !== 'undefined') {
    document.cookie = `admin-session=${JSON.stringify(session)}; path=/; max-age=${SESSION_DURATION / 1000}; secure; samesite=strict`
  }
}

/**
 * Utility untuk hapus session cookie
 */
export function clearAdminSessionCookie() {
  if (typeof document !== 'undefined') {
    document.cookie = 'admin-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}