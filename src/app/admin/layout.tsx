import { Metadata } from 'next'
import { LayoutShell } from './components/layout-shell'

export const metadata: Metadata = {
  title: 'Admin Panel - Big Platform',
  description: 'Admin panel untuk mengelola platform Big',
  robots: 'noindex, nofollow',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutShell>
      {children}
    </LayoutShell>
  )
}