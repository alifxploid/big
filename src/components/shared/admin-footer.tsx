import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export function AdminFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="flex w-full flex-col items-center justify-between gap-4 py-6 px-4 md:h-16 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Big Platform. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Status:</span>
            <Badge variant="secondary" className="text-xs">
              Online
            </Badge>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Admin Panel</span>
            <Badge variant="outline" className="text-xs">
              v1.0.0
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  )
}