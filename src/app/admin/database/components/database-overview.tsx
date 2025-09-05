'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Database,
  HardDrive,
  Activity,
  Clock,
  Users,
  FileText,
  TrendingUp,
  AlertTriangle
} from 'lucide-react'

interface DatabaseStats {
  totalSize: string
  usedSpace: string
  freeSpace: string
  usagePercentage: number
  totalTables: number
  totalRecords: string
  activeConnections: number
  avgResponseTime: string
  uptime: string
  lastBackup: string
}

export function DatabaseOverview() {
  const [stats, setStats] = useState<DatabaseStats>({
    totalSize: '2.4 GB',
    usedSpace: '1.8 GB',
    freeSpace: '0.6 GB',
    usagePercentage: 75,
    totalTables: 24,
    totalRecords: '1.2M',
    activeConnections: 12,
    avgResponseTime: '45ms',
    uptime: '15 days 4 hours',
    lastBackup: '2 hours ago'
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const overviewCards = [
    {
      title: 'Database Size',
      value: stats.totalSize,
      description: `${stats.usedSpace} used of ${stats.totalSize}`,
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Tables',
      value: stats.totalTables.toString(),
      description: `${stats.totalRecords} total records`,
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Active Connections',
      value: stats.activeConnections.toString(),
      description: `Avg response: ${stats.avgResponseTime}`,
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'System Uptime',
      value: stats.uptime,
      description: `Last backup: ${stats.lastBackup}`,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 bg-muted rounded w-20"></div>
              <div className="h-4 w-4 bg-muted rounded"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-16 mb-2"></div>
              <div className="h-3 bg-muted rounded w-24"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {overviewCards.map((card, index) => {
          const Icon = card.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${card.bgColor}`}>
                  <Icon className={`h-4 w-4 ${card.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Storage Usage */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <HardDrive className="h-5 w-5 text-blue-600" />
              </div>
              Storage Usage
            </CardTitle>
            <CardDescription>
              Current database storage utilization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Used Space</span>
                <span>{stats.usagePercentage}%</span>
              </div>
              <Progress value={stats.usagePercentage} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-muted-foreground">Used</p>
                <p className="font-medium">{stats.usedSpace}</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Free</p>
                <p className="font-medium">{stats.freeSpace}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              Performance Status
            </CardTitle>
            <CardDescription>
              Real-time database performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Database Status</span>
              <Badge className="bg-green-600 text-white">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Connection Pool</span>
              <Badge variant="outline">Normal</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Query Performance</span>
              <Badge className="bg-blue-600 text-white">Optimal</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Memory Usage</span>
              <Badge variant="secondary">65%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}