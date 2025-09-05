'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ShoppingCart,
  TrendingUp,
  Users,
  Heart,
  MoreHorizontal,
  Eye,
  Edit,
  Ban,
  Trash2,
  Search,
  Filter,
  Download,
  Plus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface Buyer {
  id: string
  name: string
  email: string
  orders: number
  totalSpent: string
  status: 'active' | 'banned' | 'pending' | 'suspended'
  joinDate: string
  lastActive: string
  wishlistItems: number
}

const mockBuyers: Buyer[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    orders: 45,
    totalSpent: '$2,340',
    status: 'active',
    joinDate: '2024-01-15',
    lastActive: '2024-01-20',
    wishlistItems: 12
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    orders: 32,
    totalSpent: '$1,890',
    status: 'active',
    joinDate: '2024-01-10',
    lastActive: '2024-01-19',
    wishlistItems: 8
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    orders: 18,
    totalSpent: '$756',
    status: 'pending',
    joinDate: '2024-01-18',
    lastActive: '2024-01-18',
    wishlistItems: 5
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    orders: 67,
    totalSpent: '$4,230',
    status: 'active',
    joinDate: '2024-01-05',
    lastActive: '2024-01-20',
    wishlistItems: 23
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.brown@example.com',
    orders: 23,
    totalSpent: '$1,120',
    status: 'suspended',
    joinDate: '2024-01-12',
    lastActive: '2024-01-17',
    wishlistItems: 7
  },
  {
    id: '6',
    name: 'Lisa Davis',
    email: 'lisa.davis@example.com',
    orders: 89,
    totalSpent: '$5,670',
    status: 'active',
    joinDate: '2024-01-08',
    lastActive: '2024-01-20',
    wishlistItems: 34
  },
  {
    id: '7',
    name: 'Tom Miller',
    email: 'tom.miller@example.com',
    orders: 12,
    totalSpent: '$456',
    status: 'banned',
    joinDate: '2024-01-14',
    lastActive: '2024-01-16',
    wishlistItems: 3
  },
  {
    id: '8',
    name: 'Emma Garcia',
    email: 'emma.garcia@example.com',
    orders: 56,
    totalSpent: '$3,450',
    status: 'active',
    joinDate: '2024-01-11',
    lastActive: '2024-01-19',
    wishlistItems: 19
  }
]

export function UsersBuyer() {
  const [buyers, setBuyers] = useState<Buyer[]>(mockBuyers)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedBuyer, setSelectedBuyer] = useState<Buyer | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isBanDialogOpen, setIsBanDialogOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Filter buyers based on search term and status
  const filteredBuyers = buyers.filter(buyer => {
    const matchesSearch = buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         buyer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || buyer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredBuyers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedBuyers = filteredBuyers.slice(startIndex, startIndex + itemsPerPage)

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-100 text-green-800',
      banned: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800',
      suspended: 'bg-gray-100 text-gray-800'
    }
    return variants[status as keyof typeof variants] || variants.pending
  }

  const handleView = (buyer: Buyer) => {
    setSelectedBuyer(buyer)
    setIsViewDialogOpen(true)
  }

  const handleEdit = (buyer: Buyer) => {
    setSelectedBuyer(buyer)
    setIsEditDialogOpen(true)
  }

  const handleBan = (buyer: Buyer) => {
    setSelectedBuyer(buyer)
    setIsBanDialogOpen(true)
  }

  const handleDelete = (buyer: Buyer) => {
    setSelectedBuyer(buyer)
    setIsDeleteDialogOpen(true)
  }

  const confirmBan = () => {
    if (selectedBuyer) {
      setBuyers(buyers.map(buyer => 
        buyer.id === selectedBuyer.id 
          ? { ...buyer, status: buyer.status === 'banned' ? 'active' : 'banned' as const }
          : buyer
      ))
    }
    setIsBanDialogOpen(false)
    setSelectedBuyer(null)
  }

  const confirmDelete = () => {
    if (selectedBuyer) {
      setBuyers(buyers.filter(buyer => buyer.id !== selectedBuyer.id))
    }
    setIsDeleteDialogOpen(false)
    setSelectedBuyer(null)
  }

  // Calculate statistics
  const totalBuyers = buyers.length
  const activeBuyers = buyers.filter(buyer => buyer.status === 'active').length
  const totalOrders = buyers.reduce((sum, buyer) => sum + buyer.orders, 0)
  const totalWishlistItems = buyers.reduce((sum, buyer) => sum + buyer.wishlistItems, 0)

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Total Buyers</h3>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold">{totalBuyers.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Active Buyers</h3>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold">{activeBuyers.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Total Orders</h3>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold">{totalOrders.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Wishlist Items</h3>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <p className="text-2xl font-bold">{totalWishlistItems.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">+25% from last month</p>
          </div>
        </div>
      </div>
      
      {/* Buyers Management */}
      <div className="rounded-lg border bg-card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Buyers Management</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Buyer
              </Button>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search buyers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="banned">Banned</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Buyers Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Wishlist</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedBuyers.map((buyer) => (
                  <TableRow key={buyer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-medium">
                            {buyer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{buyer.name}</p>
                          <p className="text-sm text-muted-foreground">{buyer.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{buyer.orders}</TableCell>
                    <TableCell>{buyer.totalSpent}</TableCell>
                    <TableCell>{buyer.wishlistItems}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(buyer.status)}>
                        {buyer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{buyer.joinDate}</TableCell>
                    <TableCell>{buyer.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleView(buyer)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(buyer)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Buyer
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleBan(buyer)}>
                            <Ban className="mr-2 h-4 w-4" />
                            {buyer.status === 'banned' ? 'Unban' : 'Ban'} Buyer
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(buyer)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Buyer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredBuyers.length)} of {filteredBuyers.length} buyers
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* View Buyer Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Buyer Details</DialogTitle>
            <DialogDescription>
              View detailed information about this buyer.
            </DialogDescription>
          </DialogHeader>
          {selectedBuyer && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Name</Label>
                  <p className="text-sm text-muted-foreground">{selectedBuyer.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm text-muted-foreground">{selectedBuyer.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <Badge className={getStatusBadge(selectedBuyer.status)}>
                    {selectedBuyer.status}
                  </Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium">Total Orders</Label>
                  <p className="text-sm text-muted-foreground">{selectedBuyer.orders}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Total Spent</Label>
                  <p className="text-sm text-muted-foreground">{selectedBuyer.totalSpent}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Wishlist Items</Label>
                  <p className="text-sm text-muted-foreground">{selectedBuyer.wishlistItems}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Join Date</Label>
                  <p className="text-sm text-muted-foreground">{selectedBuyer.joinDate}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Last Active</Label>
                  <p className="text-sm text-muted-foreground">{selectedBuyer.lastActive}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Buyer Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Buyer</DialogTitle>
            <DialogDescription>
              Update buyer information.
            </DialogDescription>
          </DialogHeader>
          {selectedBuyer && (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={selectedBuyer.name} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={selectedBuyer.email} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue={selectedBuyer.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="banned">Banned</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsEditDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Ban/Unban Confirmation Dialog */}
      <AlertDialog open={isBanDialogOpen} onOpenChange={setIsBanDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {selectedBuyer?.status === 'banned' ? 'Unban' : 'Ban'} Buyer
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {selectedBuyer?.status === 'banned' ? 'unban' : 'ban'} {selectedBuyer?.name}? 
              {selectedBuyer?.status !== 'banned' && ' This will prevent them from making purchases.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmBan}>
              {selectedBuyer?.status === 'banned' ? 'Unban' : 'Ban'} Buyer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Buyer</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedBuyer?.name}? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete Buyer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}