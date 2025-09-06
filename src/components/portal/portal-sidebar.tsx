"use client"

import {
  Home,
  ShoppingCart,
  Shield,
  Smartphone,
  Zap,
  Share2,
  CreditCard,
  ChevronRight,
  HelpCircle,
  Code,
  Bot,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
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
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Link from "next/link"

// Menu items dengan submenu
const menuItems = [
  {
    title: "Dashboard",
    url: "/portal/dashboard",
    icon: Home,
  },
  {
    title: "Ecommerce",
    icon: ShoppingCart,
    submenu: [
      {
        title: "Buy",
        url: "/portal/ecommerce/buy",
      },
      {
        title: "Sell",
        url: "/portal/ecommerce/sell",
      },
    ],
  },
  {
    title: "Rekber Outside",
    url: "/portal/rekber-outside",
    icon: Shield,
  },
  {
    title: "Panel SMM",
    icon: Share2,
    submenu: [
      {
        title: "Order",
        url: "/portal/panel-smm/order",
      },
      {
        title: "Order Massal",
        url: "/portal/panel-smm/order-massal",
      },
      {
        title: "Riwayat Transaksi",
        url: "/portal/panel-smm/riwayat-transaksi",
      },
      {
        title: "Riwayat Refill",
        url: "/portal/panel-smm/riwayat-refill",
      },
      {
        title: "Laporan Pesanan",
        url: "/portal/panel-smm/laporan-pesanan",
      },
    ],
  },
  {
    title: "Pulsa dan PPOB",
    icon: Smartphone,
    submenu: [
      {
        title: "Order",
        url: "/portal/pulsa-ppob/order",
      },
      {
        title: "Riwayat Transaksi",
        url: "/portal/pulsa-ppob/riwayat-transaksi",
      },
    ],
  },
  {
    title: "Sewa SMM dan PPOB",
    icon: Zap,
    submenu: [
      {
        title: "Sewa SMM",
        url: "/portal/sewa/smm",
      },
      {
        title: "Sewa PPOB",
        url: "/portal/sewa/ppob",
      },
    ],
  },
  {
    title: "Tools Social Media",
    icon: Share2,
    submenu: [
      {
        title: "Order",
        url: "/portal/tools-social-media/order",
      },
      {
        title: "Riwayat Transaksi",
        url: "/portal/tools-social-media/riwayat-transaksi",
      },
    ],
  },
  {
    title: "Payment Gateway",
    icon: CreditCard,
    submenu: [
      {
        title: "Order",
        url: "/portal/payment-gateway/order",
      },
      {
        title: "Riwayat Transaksi",
        url: "/portal/payment-gateway/riwayat-transaksi",
      },
    ],
  },
  {
    title: "API Tools",
    icon: Code,
    submenu: [
      {
        title: "Order",
        url: "/portal/api-tools/order",
      },
      {
        title: "Riwayat Transaksi",
        url: "/portal/api-tools/riwayat-transaksi",
      },
    ],
  },
  {
    title: "AI Chat",
    icon: Bot,
    submenu: [
      {
        title: "Chat",
        url: "/portal/ai-chat/chat",
      },
      {
        title: "Riwayat Chat",
        url: "/portal/ai-chat/riwayat",
      },
    ],
  },
]

export function PortalSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <div className="h-full bg-background">
        <SidebarHeader className="p-4 border-b border-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="h-14 px-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Link href="/portal/dashboard">
                  <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <Home className="size-5" />
                  </div>
                  <div className="grid flex-1 text-left leading-tight">
                    <span className="truncate font-bold text-lg">All-in-One</span>
                    <span className="truncate text-sm opacity-80">Platform</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        
        <SidebarContent className="px-3 py-4 flex flex-col">
          <SidebarGroup className="flex-1">
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Main Features</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.submenu ? (
                      <Collapsible className="group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="h-10 px-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium">
                            <item.icon className="size-4" />
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="ml-4 mt-1 space-y-1">
                            {item.submenu.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild className="h-8 px-3 rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-colors">
                                  <Link href={subItem.url}>
                                    <span className="text-sm">{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild className="h-10 px-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium">
                        <Link href={item.url}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Line pembatas */}
          <div className="border-t border-border my-3"></div>
          
          {/* Help Center */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="h-10 px-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium">
                    <Link href="/portal/help" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                      <span>Bantuan</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarRail />
      </div>
    </Sidebar>
  )
}