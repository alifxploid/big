import { Metadata } from 'next'
import { UsersBuyer } from '../components/users-buyer'

export const metadata: Metadata = {
  title: 'Users Buyer - Admin Panel',
  description: 'Manage buyer accounts and permissions'
}

export default function UsersBuyerPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Users Buyer Management</h1>
        <p className="text-muted-foreground">
          Manage buyer accounts, orders, and customer settings
        </p>
      </div>
      
      <UsersBuyer />
    </div>
  )
}