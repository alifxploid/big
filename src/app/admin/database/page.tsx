import { Metadata } from 'next'
import { DatabaseOverview } from './components/database-overview'
import { DatabaseTables } from './components/database-tables'
import { DatabaseBackup } from './components/database-backup'
import { DatabaseMonitoring } from './components/database-monitoring'

export const metadata: Metadata = {
  title: 'Database Management - Admin Panel',
  description: 'Manage database operations, monitoring, and backup'
}

export default function DatabasePage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Database Management</h1>
        <p className="text-muted-foreground">
          Monitor database performance, manage tables, and handle backup operations
        </p>
      </div>
      
      {/* Database Overview Stats */}
      <DatabaseOverview />
      
      {/* Database Tables Management */}
      <DatabaseTables />
      
      {/* Database Backup & Restore */}
      <DatabaseBackup />
      
      {/* Real-time Monitoring */}
      <DatabaseMonitoring />
    </div>
  )
}