'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { 
  Smartphone, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  CreditCard, 
  Wifi,
  Phone,
  Tv,
  Download,
  Calendar,
  Filter,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react'

const transactionData = [
  { period: 'Today', transactions: 1456, revenue: 'Rp 45,600,000', success: '98.2%', failed: '1.8%' },
  { period: 'Yesterday', transactions: 1342, revenue: 'Rp 42,100,000', success: '97.8%', failed: '2.2%' },
  { period: 'This Week', transactions: 9876, revenue: 'Rp 312,400,000', success: '98.5%', failed: '1.5%' },
  { period: 'Last Week', transactions: 8934, revenue: 'Rp 289,200,000', success: '97.9%', failed: '2.1%' },
  { period: 'This Month', transactions: 42156, revenue: 'Rp 1,324,750,000', success: '98.1%', failed: '1.9%' },
  { period: 'Last Month', transactions: 38942, revenue: 'Rp 1,198,600,000', success: '97.6%', failed: '2.4%' },
]

const topProducts = [
  { name: 'Pulsa Telkomsel', transactions: 8945, revenue: 'Rp 267,450,000', commission: 'Rp 13,372,500', success: '98.9%' },
  { name: 'Pulsa Indosat', transactions: 6234, revenue: 'Rp 186,120,000', commission: 'Rp 9,306,000', success: '98.1%' },
  { name: 'PLN Token', transactions: 5678, revenue: 'Rp 284,500,000', commission: 'Rp 14,225,000', success: '99.2%' },
  { name: 'Pulsa XL', transactions: 4567, revenue: 'Rp 136,890,000', commission: 'Rp 6,844,500', success: '97.8%' },
  { name: 'BPJS Kesehatan', transactions: 3456, revenue: 'Rp 172,800,000', commission: 'Rp 8,640,000', success: '99.5%' },
  { name: 'Pulsa Tri', transactions: 2890, revenue: 'Rp 86,700,000', commission: 'Rp 4,335,000', success: '98.3%' },
]

const providerPerformance = [
  { provider: 'Telkomsel', share: 35, transactions: 8945, revenue: 'Rp 267,450,000', uptime: '99.8%' },
  { provider: 'Indosat', share: 24, transactions: 6234, revenue: 'Rp 186,120,000', uptime: '99.2%' },
  { provider: 'XL Axiata', share: 18, transactions: 4567, revenue: 'Rp 136,890,000', uptime: '98.9%' },
  { provider: 'Tri', share: 12, transactions: 2890, revenue: 'Rp 86,700,000', uptime: '99.1%' },
  { provider: 'Smartfren', share: 11, transactions: 2156, revenue: 'Rp 64,680,000', uptime: '98.7%' },
]

const recentTransactions = [
  { id: 'TRX001234', type: 'Pulsa Telkomsel', amount: 'Rp 50,000', phone: '0812****5678', status: 'success', time: '2 min ago' },
  { id: 'TRX001235', type: 'PLN Token', amount: 'Rp 100,000', phone: '1234****890', status: 'success', time: '3 min ago' },
  { id: 'TRX001236', type: 'Pulsa Indosat', amount: 'Rp 25,000', phone: '0815****9012', status: 'pending', time: '5 min ago' },
  { id: 'TRX001237', type: 'BPJS Kesehatan', amount: 'Rp 150,000', phone: '0821****3456', status: 'success', time: '7 min ago' },
  { id: 'TRX001238', type: 'Pulsa XL', amount: 'Rp 30,000', phone: '0817****7890', status: 'failed', time: '8 min ago' },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'success':
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case 'pending':
      return <Clock className="h-4 w-4 text-yellow-600" />
    case 'failed':
      return <XCircle className="h-4 w-4 text-red-600" />
    default:
      return <Clock className="h-4 w-4 text-gray-600" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'success':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Success</Badge>
    case 'pending':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
    case 'failed':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

export default function PulsaPPOBReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pulsa PPOB Reports</h1>
          <p className="text-muted-foreground">
            Mobile credit and bill payment transaction reports
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42,156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8.2%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 1.32B</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +10.5%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.1%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +0.5%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 66.2M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12.3%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Transaction Overview</TabsTrigger>
          <TabsTrigger value="products">Top Products</TabsTrigger>
          <TabsTrigger value="providers">Provider Performance</TabsTrigger>
          <TabsTrigger value="recent">Recent Transactions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Overview</CardTitle>
              <CardDescription>
                Transaction volume, revenue, and success rates across different periods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Failed Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactionData.map((item) => (
                    <TableRow key={item.period}>
                      <TableCell className="font-medium">{item.period}</TableCell>
                      <TableCell>{item.transactions.toLocaleString()}</TableCell>
                      <TableCell>{item.revenue}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          {item.success}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                          {item.failed}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>
                Best-selling PPOB products by transaction volume and revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Commission</TableHead>
                    <TableHead>Success Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.transactions.toLocaleString()}</TableCell>
                      <TableCell>{product.revenue}</TableCell>
                      <TableCell>{product.commission}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          {product.success}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="providers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Provider Performance</CardTitle>
              <CardDescription>
                Market share and performance metrics by service provider
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {providerPerformance.map((provider) => (
                  <div key={provider.provider} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {provider.provider}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {provider.transactions.toLocaleString()} transactions • {provider.revenue} • Uptime: {provider.uptime}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{provider.share}%</p>
                      </div>
                    </div>
                    <Progress value={provider.share} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Latest PPOB transactions with real-time status updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Phone/ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.phone}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(transaction.status)}
                          {getStatusBadge(transaction.status)}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{transaction.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}