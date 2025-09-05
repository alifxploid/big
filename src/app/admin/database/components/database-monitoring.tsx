'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Activity,
  Cpu,
  HardDrive,
  Network,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react'

interface PerformanceMetric {
  name: string
  value: number
  unit: string
  status: 'good' | 'warning' | 'critical'
  trend: 'up' | 'down' | 'stable'
  threshold: number
}

interface ConnectionInfo {
  id: string
  user: string
  host: string
  database: string
  command: string
  time: number
  state: string
  info: string
}

interface QueryLog {
  id: string
  query: string
  duration: number
  timestamp: string
  status: 'success' | 'error'
  rows: number
}

export function DatabaseMonitoring() {
  const [isRealTime, setIsRealTime] = useState(true)
  const [refreshInterval, setRefreshInterval] = useState('5')
  const [lastUpdate, setLastUpdate] = useState(new Date())

  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      name: 'CPU Usage',
      value: 45,
      unit: '%',
      status: 'good',
      trend: 'stable',
      threshold: 80
    },
    {
      name: 'Memory Usage',
      value: 68,
      unit: '%',
      status: 'warning',
      trend: 'up',
      threshold: 85
    },
    {
      name: 'Disk I/O',
      value: 23,
      unit: 'MB/s',
      status: 'good',
      trend: 'down',
      threshold: 100
    },
    {
      name: 'Network I/O',
      value: 12,
      unit: 'MB/s',
      status: 'good',
      trend: 'stable',
      threshold: 50
    },
    {
      name: 'Query Rate',
      value: 156,
      unit: 'q/s',
      status: 'good',
      trend: 'up',
      threshold: 500
    },
    {
      name: 'Response Time',
      value: 45,
      unit: 'ms',
      status: 'good',
      trend: 'stable',
      threshold: 100
    }
  ])

  const [connections] = useState<ConnectionInfo[]>([
    {
      id: '1',
      user: 'app_user',
      host: '192.168.1.100',
      database: 'big_platform',
      command: 'Query',
      time: 2,
      state: 'executing',
      info: 'SELECT * FROM users WHERE status = "active"'
    },
    {
      id: '2',
      user: 'admin',
      host: 'localhost',
      database: 'big_platform',
      command: 'Sleep',
      time: 45,
      state: 'idle',
      info: ''
    },
    {
      id: '3',
      user: 'backup_user',
      host: '192.168.1.200',
      database: 'big_platform',
      command: 'Query',
      time: 120,
      state: 'copying to tmp table',
      info: 'CREATE INDEX idx_product_category ON products(category_id)'
    }
  ])

  const [queryLogs] = useState<QueryLog[]>([
    {
      id: '1',
      query: 'SELECT COUNT(*) FROM users WHERE created_at > NOW() - INTERVAL 1 DAY',
      duration: 23,
      timestamp: '2024-01-15 16:45:32',
      status: 'success',
      rows: 1
    },
    {
      id: '2',
      query: 'UPDATE products SET stock = stock - 1 WHERE id = 12345',
      duration: 12,
      timestamp: '2024-01-15 16:45:28',
      status: 'success',
      rows: 1
    },
    {
      id: '3',
      query: 'SELECT * FROM orders o JOIN users u ON o.user_id = u.id WHERE o.status = "pending"',
      duration: 156,
      timestamp: '2024-01-15 16:45:15',
      status: 'success',
      rows: 234
    },
    {
      id: '4',
      query: 'INSERT INTO audit_log (action, user_id, timestamp) VALUES ("login", 12345, NOW())',
      duration: 8,
      timestamp: '2024-01-15 16:45:10',
      status: 'success',
      rows: 1
    },
    {
      id: '5',
      query: 'SELECT * FROM non_existent_table',
      duration: 5,
      timestamp: '2024-01-15 16:44:58',
      status: 'error',
      rows: 0
    }
  ])

  useEffect(() => {
    if (!isRealTime) return

    const interval = setInterval(() => {
      // Simulate real-time updates
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, metric.value + (Math.random() - 0.5) * 10),
        trend: Math.random() > 0.7 ? (Math.random() > 0.5 ? 'up' : 'down') : 'stable'
      })))
      setLastUpdate(new Date())
    }, parseInt(refreshInterval) * 1000)

    return () => clearInterval(interval)
  }, [isRealTime, refreshInterval])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case 'critical':
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-3 w-3 text-red-500" />
      case 'down':
        return <TrendingDown className="h-3 w-3 text-green-500" />
      default:
        return <Minus className="h-3 w-3 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <Badge className="bg-green-600 text-white">Good</Badge>
      case 'warning':
        return <Badge className="bg-yellow-600 text-white">Warning</Badge>
      case 'critical':
        return <Badge variant="destructive">Critical</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getQueryStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-600 text-white">Success</Badge>
      case 'error':
        return <Badge variant="destructive">Error</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Monitoring Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                Real-time Monitoring
              </CardTitle>
              <CardDescription>
                Monitor database performance and health in real-time
              </CardDescription>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium">Refresh:</label>
                <Select value={refreshInterval} onValueChange={setRefreshInterval}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1s</SelectItem>
                    <SelectItem value="5">5s</SelectItem>
                    <SelectItem value="10">10s</SelectItem>
                    <SelectItem value="30">30s</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant={isRealTime ? "default" : "outline"}
                size="sm"
                onClick={() => setIsRealTime(!isRealTime)}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRealTime ? 'animate-spin' : ''}`} />
                {isRealTime ? 'Live' : 'Paused'}
              </Button>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
        </CardHeader>
      </Card>

      {/* Performance Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => {
          const progressColor = metric.status === 'good' ? 'bg-green-600' : 
                               metric.status === 'warning' ? 'bg-yellow-600' : 'bg-red-600'
          
          return (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(metric.trend)}
                    {getStatusIcon(metric.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      {metric.value.toFixed(1)}{metric.unit}
                    </span>
                    {getStatusBadge(metric.status)}
                  </div>
                  <Progress 
                    value={(metric.value / metric.threshold) * 100} 
                    className="h-2"
                  />
                  <div className="text-xs text-muted-foreground">
                    Threshold: {metric.threshold}{metric.unit}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Active Connections and Query Logs */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Connections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Network className="h-5 w-5 text-blue-600" />
              </div>
              Active Connections ({connections.length})
            </CardTitle>
            <CardDescription>
              Current database connections and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {connections.map((conn) => (
                <div key={conn.id} className="border rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{conn.user}</Badge>
                      <span className="text-sm text-muted-foreground">{conn.host}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{conn.time}s</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p><strong>Database:</strong> {conn.database}</p>
                    <p><strong>Command:</strong> {conn.command}</p>
                    <p><strong>State:</strong> {conn.state}</p>
                    {conn.info && (
                      <p className="text-xs text-muted-foreground mt-1 font-mono bg-muted p-1 rounded">
                        {conn.info.length > 60 ? `${conn.info.substring(0, 60)}...` : conn.info}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Query Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              Recent Queries
            </CardTitle>
            <CardDescription>
              Latest database query execution logs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {queryLogs.map((log) => (
                <div key={log.id} className="border rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getQueryStatusBadge(log.status)}
                      <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{log.duration}ms</span>
                      <span className="text-xs text-muted-foreground">{log.rows} rows</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    {log.query.length > 80 ? `${log.query.substring(0, 80)}...` : log.query}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}