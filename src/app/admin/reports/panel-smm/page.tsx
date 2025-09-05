'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Heart, 
  MessageCircle,
  Share2,
  Eye,
  Download,
  Calendar,
  Filter
} from 'lucide-react'

const platformData = [
  { platform: 'Instagram', followers: 125400, engagement: '4.2%', posts: 156, reach: '2.1M', trend: 'up', growth: '+12.5%' },
  { platform: 'Facebook', followers: 89200, engagement: '3.8%', posts: 142, reach: '1.8M', trend: 'up', growth: '+8.3%' },
  { platform: 'Twitter', followers: 67800, engagement: '5.1%', posts: 298, reach: '1.2M', trend: 'up', growth: '+15.2%' },
  { platform: 'TikTok', followers: 234500, engagement: '6.7%', posts: 89, reach: '3.4M', trend: 'up', growth: '+28.9%' },
  { platform: 'YouTube', followers: 45600, engagement: '7.2%', posts: 24, reach: '890K', trend: 'up', growth: '+18.7%' },
  { platform: 'LinkedIn', followers: 23400, engagement: '2.9%', posts: 67, reach: '456K', trend: 'up', growth: '+6.4%' },
]

const topPosts = [
  { 
    platform: 'Instagram', 
    content: 'Summer Collection Launch 2024', 
    likes: 15400, 
    comments: 892, 
    shares: 234, 
    reach: '125K',
    engagement: '8.2%'
  },
  { 
    platform: 'TikTok', 
    content: 'Behind the Scenes - Product Design', 
    likes: 28900, 
    comments: 1456, 
    shares: 567, 
    reach: '234K',
    engagement: '12.4%'
  },
  { 
    platform: 'Facebook', 
    content: 'Customer Success Story', 
    likes: 8900, 
    comments: 456, 
    shares: 123, 
    reach: '89K',
    engagement: '6.7%'
  },
  { 
    platform: 'YouTube', 
    content: 'Product Tutorial - Getting Started', 
    likes: 5600, 
    comments: 234, 
    shares: 89, 
    reach: '67K',
    engagement: '9.1%'
  },
  { 
    platform: 'Twitter', 
    content: 'Industry Insights Thread', 
    likes: 3400, 
    comments: 189, 
    shares: 456, 
    reach: '45K',
    engagement: '7.8%'
  },
]

const campaignPerformance = [
  { campaign: 'Summer Sale 2024', budget: 'Rp 50,000,000', spent: 'Rp 42,500,000', reach: '1.2M', conversions: 2340, roi: '285%' },
  { campaign: 'Brand Awareness Q2', budget: 'Rp 35,000,000', spent: 'Rp 31,200,000', reach: '890K', conversions: 1560, roi: '198%' },
  { campaign: 'Product Launch', budget: 'Rp 75,000,000', spent: 'Rp 68,900,000', reach: '1.8M', conversions: 3450, roi: '342%' },
  { campaign: 'Holiday Special', budget: 'Rp 25,000,000', spent: 'Rp 23,100,000', reach: '567K', conversions: 890, roi: '156%' },
]

export default function PanelSMMReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Panel SMM Reports</h1>
          <p className="text-muted-foreground">
            Social media marketing performance and engagement metrics
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
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">585,900</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +15.2%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Engagement</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.1%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +0.8%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9.8M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +22.4%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Posts Published</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">776</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +18.9%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="platforms" className="space-y-4">
        <TabsList>
          <TabsTrigger value="platforms">Platform Performance</TabsTrigger>
          <TabsTrigger value="posts">Top Posts</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="platforms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>
                Follower growth, engagement rates, and reach across all platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Posts</TableHead>
                    <TableHead>Reach</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {platformData.map((platform) => (
                    <TableRow key={platform.platform}>
                      <TableCell className="font-medium">{platform.platform}</TableCell>
                      <TableCell>{platform.followers.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{platform.engagement}</Badge>
                      </TableCell>
                      <TableCell>{platform.posts}</TableCell>
                      <TableCell>{platform.reach}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-green-600">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {platform.growth}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="posts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Posts</CardTitle>
              <CardDescription>
                Best-performing content by engagement and reach
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Reach</TableHead>
                    <TableHead>Engagement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPosts.map((post, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Badge variant="outline">{post.platform}</Badge>
                      </TableCell>
                      <TableCell className="font-medium max-w-xs truncate">
                        {post.content}
                      </TableCell>
                      <TableCell>{post.likes.toLocaleString()}</TableCell>
                      <TableCell>{post.comments.toLocaleString()}</TableCell>
                      <TableCell>{post.shares.toLocaleString()}</TableCell>
                      <TableCell>{post.reach}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-green-600">
                          {post.engagement}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>
                Advertising campaign results and return on investment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{campaign.campaign}</h4>
                      <Badge variant="secondary" className="text-green-600">
                        ROI: {campaign.roi}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Budget</p>
                        <p className="font-medium">{campaign.budget}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Spent</p>
                        <p className="font-medium">{campaign.spent}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Reach</p>
                        <p className="font-medium">{campaign.reach}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Conversions</p>
                        <p className="font-medium">{campaign.conversions.toLocaleString()}</p>
                      </div>
                    </div>
                    <Progress 
                      value={(parseFloat(campaign.spent.replace(/[^0-9]/g, '')) / parseFloat(campaign.budget.replace(/[^0-9]/g, ''))) * 100} 
                      className="h-2" 
                    />
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