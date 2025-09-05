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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  ShoppingBag,
  TrendingUp,
  Users,
  DollarSign,
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

interface Seller {
  id: string
  name: string
  email: string
  storeName: string
  products: number
  revenue: string
  status: 'active' | 'banned' | 'pending' | 'suspended'
  joinDate: string
  lastActive: string
}

const mockSellers: Seller[] = [
  {
    id: '1',
    name: 'Alex Store',
    email: 'alex.store@example.com',
    storeName: 'Alex Electronics',
    products: 234,
    revenue: '$12.5K',
    status: 'active',
    joinDate: '2024-01-15',
    lastActive: '2024-01-20'
  },
  {
    id: '2',
    name: 'Best Market',
    email: 'best.market@example.com',
    storeName: 'Best Market Store',
    products: 156,
    revenue: '$8.7K',
    status: 'active',
    joinDate: '2024-01-10',
    lastActive: '2024-01-19'
  },
  {
    id: '3',
    name: 'Creative Shop',
    email: 'creative.shop@example.com',
    storeName: 'Creative Design Hub',
    products: 89,
    revenue: '$5.2K',
    status: 'pending',
    joinDate: '2024-01-18',
    lastActive: '2024-01-18'
  },
  {
    id: '4',
    name: 'Digital Store',
    email: 'digital.store@example.com',
    storeName: 'Digital Solutions',
    products: 312,
    revenue: '$18.9K',
    status: 'active',
    joinDate: '2024-01-05',
    lastActive: '2024-01-20'
  },
  {
    id: '5',
    name: 'Fashion Hub',
    email: 'fashion.hub@example.com',
    storeName: 'Fashion Central',
    products: 178,
    revenue: '$9.3K',
    status: 'suspended',
    joinDate: '2024-01-12',
    lastActive: '2024-01-17'
  },
  {
    id: '6',
    name: 'Tech World',
    email: 'tech.world@example.com',
    storeName: 'Tech World Store',
    products: 267,
    revenue: '$15.8K',
    status: 'active',
    joinDate: '2024-01-08',
    lastActive: '2024-01-20'
  },
  {
    id: '7',
    name: 'Home Decor',
    email: 'home.decor@example.com',
    storeName: 'Home & Living',
    products: 145,
    revenue: '$7.1K',
    status: 'banned',
    joinDate: '2024-01-14',
    lastActive: '2024-01-16'
  },
  {
    id: '8',
    name: 'Sports Zone',
    email: 'sports.zone@example.com',
    storeName: 'Sports Equipment',
    products: 198,
    revenue: '$11.2K',
    status: 'active',
    joinDate: '2024-01-11',
    lastActive: '2024-01-19'
  }
]

export function UsersSeller() {
  const [sellers, setSellers] = useState<Seller[]>(mockSellers)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isBanDialogOpen, setIsBanDialogOpen] = useState(false)
  const [banReason, setBanReason] = useState('')
  
  const itemsPerPage = 5
  
  // Filter sellers based on search and status
  const filteredSellers = sellers.filter(seller => {
    const matchesSearch = seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.storeName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || seller.status === statusFilter
    return matchesSearch && matchesStatus
  })
  
  // Pagination
  const totalPages = Math.ceil(filteredSellers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedSellers = filteredSellers.slice(startIndex, startIndex + itemsPerPage)
  
  const getStatusBadge = (status: Seller['status']) => {
    const variants = {
      active: 'bg-green-50 text-green-700 ring-green-600/20',
      banned: 'bg-red-50 text-red-700 ring-red-600/20',
      pending: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
      suspended: 'bg-orange-50 text-orange-700 ring-orange-600/20'
    }
    return (
      <Badge className={`${variants[status]} ring-1 ring-inset`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }
  
  const handleBanSeller = () => {
    if (selectedSeller) {
      setSellers(prev => prev.map(seller => 
        seller.id === selectedSeller.id 
          ? { ...seller, status: 'banned' as const }
          : seller
      ))
      setIsBanDialogOpen(false)
      setBanReason('')
      setSelectedSeller(null)
    }
  }
  
  const handleDeleteSeller = () => {
    if (selectedSeller) {
      setSellers(prev => prev.filter(seller => seller.id !== selectedSeller.id))
      setIsDeleteDialogOpen(false)
      setSelectedSeller(null)
    }
  }
  
  const handleStatusChange = (sellerId: string, newStatus: Seller['status']) => {
    setSellers(prev => prev.map(seller => 
      seller.id === sellerId 
        ? { ...seller, status: newStatus }
        : seller
    ))
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Sellers</h3>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{sellers.length}</div>
          <p className="text-xs text-muted-foreground">
            +180 from last month
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Active Sellers</h3>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{sellers.filter(s => s.status === 'active').length}</div>
          <p className="text-xs text-muted-foreground">
            +12% from last month
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Products</h3>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{sellers.reduce((sum, s) => sum + s.products, 0)}</div>
          <p className="text-xs text-muted-foreground">
            +19% from last month
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Revenue</h3>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">$45,231</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </div>
      </div>

      {/* Sellers Management */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Sellers Management</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Seller
              </Button>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search sellers..."
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
        </div>
        
        <div className="p-6 pt-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Seller</TableHead>
                  <TableHead>Store Name</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
            <TableBody>
              {paginatedSellers.map((seller) => (
                <TableRow key={seller.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/avatars/${seller.id}.jpg`} />
                        <AvatarFallback>{seller.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{seller.name}</div>
                        <div className="text-sm text-muted-foreground">{seller.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{seller.storeName}</TableCell>
                  <TableCell>{seller.products}</TableCell>
                  <TableCell>${seller.revenue.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={seller.status === 'active' ? 'default' : seller.status === 'banned' ? 'destructive' : 'secondary'}>
                      {seller.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{seller.joinDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedSeller(seller)
                            setIsViewDialogOpen(true)
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedSeller(seller)
                            setIsEditDialogOpen(true)
                          }}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {seller.status === 'active' && (
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(seller.id, 'suspended')}
                          >
                            Suspend
                          </DropdownMenuItem>
                        )}
                        {seller.status === 'suspended' && (
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(seller.id, 'active')}
                          >
                            Activate
                          </DropdownMenuItem>
                        )}
                        {seller.status !== 'banned' && (
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedSeller(seller)
                              setIsBanDialogOpen(true)
                            }}
                            className="text-red-600"
                          >
                            <Ban className="mr-2 h-4 w-4" />
                            Ban Seller
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedSeller(seller)
                            setIsDeleteDialogOpen(true)
                          }}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
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
            <div className="flex items-center justify-between space-x-2 py-4">
              <div className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredSellers.length)} of {filteredSellers.length} sellers
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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

      {/* View Seller Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Seller Details</DialogTitle>
            <DialogDescription>
              View detailed information about the seller.
            </DialogDescription>
          </DialogHeader>
          {selectedSeller && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Name</Label>
                  <p className="text-sm text-muted-foreground">{selectedSeller.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm text-muted-foreground">{selectedSeller.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Store Name</Label>
                  <p className="text-sm text-muted-foreground">{selectedSeller.storeName}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedSeller.status)}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Products</Label>
                  <p className="text-sm text-muted-foreground">{selectedSeller.products}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Revenue</Label>
                  <p className="text-sm text-muted-foreground">{selectedSeller.revenue}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Join Date</Label>
                  <p className="text-sm text-muted-foreground">{new Date(selectedSeller.joinDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Last Active</Label>
                  <p className="text-sm text-muted-foreground">{new Date(selectedSeller.lastActive).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Ban Seller Dialog */}
      <AlertDialog open={isBanDialogOpen} onOpenChange={setIsBanDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ban Seller</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to ban this seller? This action will prevent them from accessing their account and selling products.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Label htmlFor="ban-reason">Reason for ban</Label>
            <Textarea
              id="ban-reason"
              placeholder="Enter the reason for banning this seller..."
              value={banReason}
              onChange={(e) => setBanReason(e.target.value)}
              className="mt-2"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleBanSeller} className="bg-red-600 hover:bg-red-700">
              Ban Seller
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Seller Dialog */}
       <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
         <DialogContent className="max-w-2xl">
           <DialogHeader>
             <DialogTitle>Edit Seller</DialogTitle>
             <DialogDescription>
               Update seller information and settings.
             </DialogDescription>
           </DialogHeader>
           {selectedSeller && (
             <div className="grid gap-4 py-4">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <Label htmlFor="edit-name">Name</Label>
                   <Input
                     id="edit-name"
                     defaultValue={selectedSeller.name}
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="edit-email">Email</Label>
                   <Input
                     id="edit-email"
                     type="email"
                     defaultValue={selectedSeller.email}
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="edit-store">Store Name</Label>
                   <Input
                     id="edit-store"
                     defaultValue={selectedSeller.storeName}
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="edit-status">Status</Label>
                   <Select defaultValue={selectedSeller.status}>
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

       {/* Delete Seller Dialog */}
       <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
         <AlertDialogContent>
           <AlertDialogHeader>
             <AlertDialogTitle>Delete Seller</AlertDialogTitle>
             <AlertDialogDescription>
               Are you sure you want to delete this seller? This action cannot be undone and will permanently remove all seller data.
             </AlertDialogDescription>
           </AlertDialogHeader>
           <AlertDialogFooter>
             <AlertDialogCancel>Cancel</AlertDialogCancel>
             <AlertDialogAction onClick={handleDeleteSeller} className="bg-red-600 hover:bg-red-700">
               Delete
             </AlertDialogAction>
           </AlertDialogFooter>
         </AlertDialogContent>
       </AlertDialog>
     </div>
   )
 }