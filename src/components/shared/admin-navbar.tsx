'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Bell,
  Settings,
  LogOut,
  User,
  Menu,
} from 'lucide-react'

interface AdminNavbarProps {
  username?: string
  role?: string
  onLogout?: () => void
  onToggleSidebar?: () => void
}

export function AdminNavbar({ 
  username = 'Admin', 
  role = 'Administrator',
  onLogout,
  onToggleSidebar 
}: AdminNavbarProps) {
  const pathname = usePathname()
  
  // Get page title from pathname
  const getPageTitle = (path: string) => {
    const segments = path.split('/').filter(Boolean)
    const lastSegment = segments[segments.length - 1]
    return lastSegment ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1) : 'Dashboard'
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 w-full items-center px-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={onToggleSidebar}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Page title */}
        <div className="mr-4 flex">
          <div className="mr-6 flex items-center space-x-2">
            <h1 className="text-lg font-semibold">{getPageTitle(pathname)}</h1>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Right side actions */}
          <nav className="flex items-center space-x-2">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>

            <Separator orientation="vertical" className="h-4" />

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt={username} />
                    <AvatarFallback className="text-xs">
                      {username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{username}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {role}
                      </Badge>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}