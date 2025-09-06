"use client"

import { Separator } from "@/components/ui/separator"

export function PortalFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col items-center justify-between gap-4 py-6 px-4 md:h-16 md:flex-row md:py-0 md:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Portal Dashboard. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <a 
            href="/portal/help" 
            className="hover:text-foreground transition-colors"
          >
            Help
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a 
            href="/portal/privacy" 
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a 
            href="/portal/terms" 
            className="hover:text-foreground transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}