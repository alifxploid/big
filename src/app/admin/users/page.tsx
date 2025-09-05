import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, ShoppingBag, ShoppingCart, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Users Management - Admin Panel',
  description: 'Manage platform users and permissions'
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Users Management</h1>
        <p className="text-muted-foreground">
          Manage platform users through the navigation menu
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <ShoppingBag className="h-5 w-5 text-green-600" />
              </div>
              <span>Users Seller</span>
            </CardTitle>
            <CardDescription>
              Access seller management through the sidebar menu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/users/seller" className="flex items-center gap-2">
                Go to Sellers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
              </div>
              <span>Users Buyer</span>
            </CardTitle>
            <CardDescription>
              Access buyer management through the sidebar menu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/users/buyer" className="flex items-center gap-2">
                Go to Buyers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Users className="h-5 w-5" />
            <span>Navigation Guide</span>
          </CardTitle>
          <CardDescription>
            Use the sidebar menu to access specific user management features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/50">
              <h4 className="font-medium mb-2">How to Navigate</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Click on "Users" in the sidebar to expand the submenu</li>
                <li>• Select "Users Seller" to manage seller accounts</li>
                <li>• Select "Users Buyer" to manage buyer accounts</li>
                <li>• Each section has full CRUD operations and filtering</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}