'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { 
  ShoppingCart, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  Users,
  Download,
  Calendar,
  Filter
} from 'lucide-react'

const salesData = [
  { period: 'Today', revenue: 'Rp 12,450,000', orders: 156, growth: '+12.5%', trend: 'up' },
  { period: 'Yesterday', revenue: 'Rp 11,200,000', orders: 142, growth: '+8.3%', trend: 'up' },
  { period: 'This Week', revenue: 'Rp 78,900,000', orders: 1024, growth: '+15.2%', trend: 'up' },
  { period: 'Last Week', revenue: 'Rp 68,500,000', orders: 892, growth: '+5.7%', trend: 'up' },
  { period: 'This Month', revenue: 'Rp 324,750,000', orders: 4156, growth: '+18.9%', trend: 'up' },
  { period: 'Last Month', revenue: 'Rp 273,200,000', orders: 3498, growth: '+12.1%', trend: 'up' },
]

const topProducts = [
  { name: 'iPhone 15 Pro Max', sales: 245, revenue: 'Rp 612,500,000', growth: '+23%' },
  { name: 'Samsung Galaxy S24 Ultra', sales: 189, revenue: 'Rp 378,000,000', growth: '+18%' },
  { name: 'MacBook Air M3', sales: 156, revenue: 'Rp 468,000,000', growth: '+15%' },
  { name: 'iPad Pro 12.9"', sales: 134, revenue: 'Rp 201,000,000', growth: '+12%' },
  { name: 'AirPods Pro 2', sales: 298, revenue: 'Rp 119,200,000', growth: '+28%' },
]

const customerSegments = [
  { segment: 'Premium Customers', count: 1234, percentage: 15, revenue: 'Rp 450,000,000' },
  { segment: 'Regular Customers', count: 3456, percentage: 42, revenue: 'Rp 280,000,000' },
  { segment: 'New Customers', count: 2890, percentage: 35, revenue: 'Rp 125,000,000' },
  { segment: 'Inactive Customers', count: 656, percentage: 8, revenue: 'Rp 15,000,000' },
]

export default function EcommerceReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ecommerce Reports</h1>
          <p className="text-muted-foreground">
            Sales analytics, product performance, and customer insights
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
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 324,750,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +18.9%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 78,150</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +6.2%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,236</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +14.3%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales Performance</TabsTrigger>
          <TabsTrigger value="products">Top Products</TabsTrigger>
          <TabsTrigger value="customers">Customer Segments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>
                Revenue and order trends across different time periods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesData.map((item) => (
                    <TableRow key={item.period}>
                      <TableCell className="font-medium">{item.period}</TableCell>
                      <TableCell>{item.revenue}</TableCell>
                      <TableCell>{item.orders.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-green-600">
                          {item.trend === 'up' ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          {item.growth}
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
                Best-selling products by sales volume and revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Units Sold</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.sales.toLocaleString()}</TableCell>
                      <TableCell>{product.revenue}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-green-600">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {product.growth}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Segments</CardTitle>
              <CardDescription>
                Customer distribution and revenue contribution by segment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerSegments.map((segment) => (
                  <div key={segment.segment} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {segment.segment}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {segment.count.toLocaleString()} customers • {segment.revenue}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{segment.percentage}%</p>
                      </div>
                    </div>
                    <Progress value={segment.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}