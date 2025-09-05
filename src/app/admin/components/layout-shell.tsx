'use client'

import { usePathname } from 'next/navigation'
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar'
import { AdminSidebar } from '@/components/shared/admin-sidebar'
import { AdminFooter } from '@/components/shared/admin-footer'
import { AdminNavbar } from '@/components/shared/admin-navbar'
import { clearAdminSessionCookie } from '../lib/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface LayoutShellProps {
  children: React.ReactNode
}

interface AdminSession {
  username: string
  role: string
  loginTime: number
}

function LoginLayoutContent({ children }: LayoutShellProps) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}

function DashboardLayoutContent({ children }: LayoutShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [session, setSession] = useState<AdminSession | null>(null)
  const { toggleSidebar } = useSidebar()

  useEffect(() => {
    if (pathname !== '/admin/login') {
      try {
        const sessionCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('admin-session='))
        
        if (sessionCookie) {
          const sessionData = JSON.parse(sessionCookie.split('=')[1])
          if (sessionData.expiresAt > Date.now()) {
            setSession(sessionData)
          }
        }
      } catch (error) {
        console.error('Error checking session:', error)
      }
    }
  }, [pathname])

  const handleLogout = () => {
    clearAdminSessionCookie()
    router.push('/admin/login')
  }
  
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar 
          username={session?.username}
          role={session?.role}
          onLogout={handleLogout}
          onToggleSidebar={toggleSidebar}
        />
        <main className="flex-1 p-6 bg-muted/30">
          {children}
        </main>
        <AdminFooter />
      </div>
    </div>
  )
}

export function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname()
  
  // Jangan gunakan SidebarProvider untuk halaman login
  if (pathname === '/admin/login') {
    return <LoginLayoutContent>{children}</LoginLayoutContent>
  }
  
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  )
}