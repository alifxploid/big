import { Metadata } from 'next'
import { UsersSeller } from '../components/users-seller'

export const metadata: Metadata = {
  title: 'Users Seller - Admin Panel',
  description: 'Manage seller accounts and permissions'
}

export default function UsersSellerPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Users Seller Management</h1>
        <p className="text-muted-foreground">
          Manage seller accounts, permissions, and store settings
        </p>
      </div>
      
      <UsersSeller />
    </div>
  )
}