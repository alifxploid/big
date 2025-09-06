"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { PortalNavbar } from "./portal-navbar"
import { PortalSidebar } from "./portal-sidebar"
import { PortalFooter } from "./portal-footer"

interface PortalLayoutProps {
  children: React.ReactNode
}

export function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <PortalSidebar />
        
        <SidebarInset className="flex flex-1 flex-col">
          <PortalNavbar />
          
          <main className="flex-1 space-y-4 p-4 md:p-8">
            {children}
          </main>
          
          <PortalFooter />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}