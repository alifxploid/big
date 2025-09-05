'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'

import { clearAdminSessionCookie } from '../lib/auth'
import { 
  Users, 
  Settings, 
  BarChart3, 
  Shield, 
  LogOut, 
  Bell,
  Activity,
  TrendingUp,
  Database
} from 'lucide-react'

interface AdminSession {
  username: string
  role: string
  loginTime: number
}

export default function AdminDashboard() {
  const [session, setSession] = useState<AdminSession | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkSession = () => {
      try {
        const sessionCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('admin-session='))
        
        if (sessionCookie) {
          const sessionData = JSON.parse(sessionCookie.split('=')[1])
          if (sessionData.expiresAt > Date.now()) {
            setSession(sessionData)
          } else {
            router.push('/admin/login')
          }
        } else {
          router.push('/admin/login')
        }
      } catch (error) {
        console.error('Error checking session:', error)
        router.push('/admin/login')
      }
      setIsLoading(false)
    }

    checkSession()
  }, [router])

  const handleLogout = () => {
    clearAdminSessionCookie()
    router.push('/admin/login')
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const stats = [
    {
      title: 'Total Users',
      value: '10,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '+5%',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      title: 'Revenue',
      value: 'Rp 45.2M',
      change: '+18%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Database Size',
      value: '2.4 GB',
      change: '+3%',
      icon: Database,
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="space-y-6">


      {/* Main Content */}
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-black text-foreground tracking-tight">
                DASHBOARD
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-foreground to-transparent rounded-full max-w-32"></div>
            </div>
            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              PLATFORM MANAGEMENT CONTROL CENTER
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title} className="border-2 hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="p-2 bg-muted rounded-lg">
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <p className="text-xs text-green-600 font-medium">
                      {stat.change} from last month
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-lg font-semibold">User Management</span>
                </div>
              </CardTitle>
              <CardDescription>
                Manage platform users and permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="text-sm font-medium">Active Users</span>
                <Badge variant="secondary">8,234</Badge>
              </div>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline">
                  View All
                </Button>
                <Button size="sm">
                  Add User
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <span className="text-lg font-semibold">Analytics</span>
                </div>
              </CardTitle>
              <CardDescription>
                Monitor platform performance and metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="text-sm font-medium">Today's Transactions</span>
                <Badge variant="secondary">1,234</Badge>
              </div>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline">
                  View Report
                </Button>
                <Button size="sm">
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <span className="text-lg font-semibold">Security</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Status</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Secure</Badge>
                </div>
                <Button className="w-full" variant="destructive">
                  Security Scan
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Database className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-lg font-semibold">Database</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Health</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Optimal</Badge>
                </div>
                <Button className="w-full" variant="secondary">
                  Backup Now
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Activity className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <span className="text-lg font-semibold">Performance</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">CPU Usage</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">45%</Badge>
                </div>
                <Button className="w-full" variant="secondary">
                  Optimize
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall System Status */}
        <div className="mt-10">
          <Card className="border-2">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Settings className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <span className="text-lg font-semibold">System Status</span>
                </div>
              </CardTitle>
              <CardDescription>
                Real-time service monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <span className="text-sm font-medium">Database</span>
                  <Badge className="bg-green-600 text-white">Online</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <span className="text-sm font-medium">API Server</span>
                  <Badge className="bg-green-600 text-white">Online</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <span className="text-sm font-medium">Payment Gateway</span>
                  <Badge className="bg-green-600 text-white">Online</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}