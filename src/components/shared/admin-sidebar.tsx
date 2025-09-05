'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  Shield,
  Database,
  Bell,
  FileText,
  HelpCircle,
  ChevronDown,
} from 'lucide-react'

const navigationItems = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: Users,
    items: [
      {
        title: 'Users Seller',
        url: '/admin/users/seller',
      },
      {
        title: 'Users Buyer',
        url: '/admin/users/buyer',
      },
    ],
  },
  {
    title: 'Analytics',
    url: '/admin/analytics',
    icon: BarChart3,
    items: [
      {
        title: 'Ecommerce',
        url: '/admin/analytics/ecommerce',
      },
      {
        title: 'Panel SMM',
        url: '/admin/analytics/panel-smm',
      },
      {
        title: 'Pulsa PPOB',
        url: '/admin/analytics/pulsa-ppob',
      },
    ],
  },
  {
    title: 'Database',
    url: '/admin/database',
    icon: Database,
  },
  {
    title: 'Reports',
    url: '/admin/reports',
    icon: FileText,
  },
]

const systemItems = [
  {
    title: 'Settings',
    url: '/admin/settings',
    icon: Settings,
  },
  {
    title: 'Notifications',
    url: '/admin/notifications',
    icon: Bell,
  },
  {
    title: 'Help',
    url: '/admin/help',
    icon: HelpCircle,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Admin Panel</span>
            <span className="truncate text-xs text-muted-foreground">Big Platform</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <div className="p-4">
          <Card className="mb-4">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Quick Stats</CardTitle>
              <CardDescription className="text-xs">
                System overview
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Active Users</span>
                  <Badge variant="secondary" className="text-xs">1,234</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">System Load</span>
                  <Badge variant="outline" className="text-xs">Normal</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    {item.items ? (
                      <Collapsible className="group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton isActive={isActive}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <Link href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <Separator />
        
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Version</span>
            <Badge variant="secondary" className="text-xs">v1.0.0</Badge>
          </div>
        </div>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}