'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  FileText,
  MoreHorizontal,
  Eye,
  Download,
  Trash2,
  Search,
  Filter,
  RefreshCw,
  Database,
  Plus,
  X
} from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface DatabaseTable {
  id: string
  name: string
  type: 'table' | 'view' | 'index'
  records: number
  size: string
  lastModified: string
  status: 'active' | 'inactive' | 'maintenance'
  engine: string
}

interface TableColumn {
  id: string
  name: string
  type: string
  length?: string
  nullable: boolean
  defaultValue?: string
  isPrimaryKey: boolean
  isAutoIncrement: boolean
}

interface CreateTableForm {
  name: string
  engine: string
  comment: string
  columns: TableColumn[]
}

export function DatabaseTables() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [selectedTable, setSelectedTable] = useState<DatabaseTable | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [tableToDelete, setTableToDelete] = useState<DatabaseTable | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [createForm, setCreateForm] = useState<CreateTableForm>({
    name: '',
    engine: 'InnoDB',
    comment: '',
    columns: [{
      id: '1',
      name: 'id',
      type: 'INT',
      length: '11',
      nullable: false,
      isPrimaryKey: true,
      isAutoIncrement: true
    }]
  })

  // Mock data
  const [tables] = useState<DatabaseTable[]>([
    {
      id: '1',
      name: 'users',
      type: 'table',
      records: 10234,
      size: '45.2 MB',
      lastModified: '2024-01-15 14:30:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '2',
      name: 'products',
      type: 'table',
      records: 5678,
      size: '128.5 MB',
      lastModified: '2024-01-15 12:15:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '3',
      name: 'orders',
      type: 'table',
      records: 23456,
      size: '89.3 MB',
      lastModified: '2024-01-15 16:45:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '4',
      name: 'user_sessions',
      type: 'table',
      records: 1234,
      size: '12.1 MB',
      lastModified: '2024-01-15 10:20:00',
      status: 'maintenance',
      engine: 'Memory'
    },
    {
      id: '5',
      name: 'product_view',
      type: 'view',
      records: 5678,
      size: '0 MB',
      lastModified: '2024-01-14 09:30:00',
      status: 'active',
      engine: 'View'
    },
    {
      id: '6',
      name: 'idx_user_email',
      type: 'index',
      records: 0,
      size: '8.5 MB',
      lastModified: '2024-01-13 15:45:00',
      status: 'active',
      engine: 'BTree'
    }
  ])

  const filteredTables = tables.filter(table => {
    const matchesSearch = table.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === 'all' || table.type === typeFilter
    return matchesSearch && matchesType
  })

  const handleViewTable = (table: DatabaseTable) => {
    setSelectedTable(table)
    setIsViewDialogOpen(true)
  }

  const handleDeleteTable = (table: DatabaseTable) => {
    setTableToDelete(table)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (tableToDelete) {
      // Implement delete logic here
      console.log('Deleting table:', tableToDelete.name)
      setIsDeleteDialogOpen(false)
      setTableToDelete(null)
    }
  }

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate refresh
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const handleCreateTable = () => {
    setIsCreateDialogOpen(true)
  }

  const addColumn = () => {
    const newColumn: TableColumn = {
      id: Date.now().toString(),
      name: '',
      type: 'VARCHAR',
      length: '255',
      nullable: true,
      isPrimaryKey: false,
      isAutoIncrement: false
    }
    setCreateForm(prev => ({
      ...prev,
      columns: [...prev.columns, newColumn]
    }))
  }

  const removeColumn = (columnId: string) => {
    setCreateForm(prev => ({
      ...prev,
      columns: prev.columns.filter(col => col.id !== columnId)
    }))
  }

  const updateColumn = (columnId: string, field: keyof TableColumn, value: any) => {
    setCreateForm(prev => ({
      ...prev,
      columns: prev.columns.map(col => 
        col.id === columnId ? { ...col, [field]: value } : col
      )
    }))
  }

  const handleSubmitCreateTable = () => {
    // Validate form
    if (!createForm.name.trim()) {
      alert('Table name is required')
      return
    }
    
    if (createForm.columns.length === 0) {
      alert('At least one column is required')
      return
    }

    // Check if all columns have names
    const hasEmptyColumnNames = createForm.columns.some(col => !col.name.trim())
    if (hasEmptyColumnNames) {
      alert('All columns must have names')
      return
    }

    // Here you would typically make an API call to create the table
    console.log('Creating table:', createForm)
    
    // Reset form and close dialog
    setCreateForm({
      name: '',
      engine: 'InnoDB',
      comment: '',
      columns: [{
        id: '1',
        name: 'id',
        type: 'INT',
        length: '11',
        nullable: false,
        isPrimaryKey: true,
        isAutoIncrement: true
      }]
    })
    setIsCreateDialogOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-600 text-white">Active</Badge>
      case 'maintenance':
        return <Badge variant="destructive">Maintenance</Badge>
      case 'inactive':
        return <Badge variant="secondary">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'table':
        return <FileText className="h-4 w-4 text-blue-600" />
      case 'view':
        return <Eye className="h-4 w-4 text-green-600" />
      case 'index':
        return <Database className="h-4 w-4 text-purple-600" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Database className="h-5 w-5 text-blue-600" />
              </div>
              Database Tables
            </CardTitle>
            <CardDescription>
              Manage database tables, views, and indexes
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button size="sm" onClick={handleCreateTable}>
              <Plus className="h-4 w-4 mr-2" />
              Create Table
            </Button>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tables..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="table">Tables</SelectItem>
              <SelectItem value="view">Views</SelectItem>
              <SelectItem value="index">Indexes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="rounded-md border overflow-x-auto">
          <Table className="min-w-[800px]">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Records</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Engine</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTables.map((table) => (
                <TableRow key={table.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(table.type)}
                      <div>
                        <div className="font-medium">{table.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {table.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{table.records.toLocaleString()}</TableCell>
                  <TableCell>{table.size}</TableCell>
                  <TableCell>{table.engine}</TableCell>
                  <TableCell>{getStatusBadge(table.status)}</TableCell>
                  <TableCell>{table.lastModified}</TableCell>
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
                        <DropdownMenuItem onClick={() => handleViewTable(table)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Structure
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Export Data
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          onClick={() => handleDeleteTable(table)}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Drop Table
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* View Table Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Table Structure: {selectedTable?.name}</DialogTitle>
            <DialogDescription>
              View table schema and structure details
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {selectedTable && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><strong>Type:</strong> {selectedTable.type}</p>
                  <p><strong>Records:</strong> {selectedTable.records.toLocaleString()}</p>
                  <p><strong>Size:</strong> {selectedTable.size}</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Engine:</strong> {selectedTable.engine}</p>
                  <p><strong>Status:</strong> {selectedTable.status}</p>
                  <p><strong>Last Modified:</strong> {selectedTable.lastModified}</p>
                </div>
              </div>
            )}
            <div className="border rounded-lg p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Table schema would be displayed here</p>
              <code className="text-xs">DESCRIBE {selectedTable?.name};</code>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the table "{tableToDelete?.name}" and all its data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete Table
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Create Table Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Table</DialogTitle>
            <DialogDescription>
              Define the structure and properties for your new database table
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Basic Table Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tableName">Table Name *</Label>
                <Input
                  id="tableName"
                  placeholder="Enter table name"
                  value={createForm.name}
                  onChange={(e) => setCreateForm(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="engine">Storage Engine</Label>
                <Select value={createForm.engine} onValueChange={(value) => setCreateForm(prev => ({ ...prev, engine: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="InnoDB">InnoDB</SelectItem>
                    <SelectItem value="MyISAM">MyISAM</SelectItem>
                    <SelectItem value="MEMORY">MEMORY</SelectItem>
                    <SelectItem value="CSV">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comment">Table Comment</Label>
              <Textarea
                id="comment"
                placeholder="Optional description for this table"
                value={createForm.comment}
                onChange={(e) => setCreateForm(prev => ({ ...prev, comment: e.target.value }))}
                rows={2}
              />
            </div>

            {/* Columns Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium">Table Columns</h4>
                <Button type="button" variant="outline" size="sm" onClick={addColumn}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Column
                </Button>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted/50 p-3 grid grid-cols-12 gap-2 text-sm font-medium">
                  <div className="col-span-2">Name *</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-1">Length</div>
                  <div className="col-span-1">Null</div>
                  <div className="col-span-1">PK</div>
                  <div className="col-span-1">AI</div>
                  <div className="col-span-3">Default</div>
                  <div className="col-span-1">Action</div>
                </div>
                
                <div className="divide-y">
                  {createForm.columns.map((column, index) => (
                    <div key={column.id} className="p-3 grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-2">
                        <Input
                          placeholder="Column name"
                          value={column.name}
                          onChange={(e) => updateColumn(column.id, 'name', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      <div className="col-span-2">
                        <Select value={column.type} onValueChange={(value) => updateColumn(column.id, 'type', value)}>
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="INT">INT</SelectItem>
                            <SelectItem value="BIGINT">BIGINT</SelectItem>
                            <SelectItem value="VARCHAR">VARCHAR</SelectItem>
                            <SelectItem value="TEXT">TEXT</SelectItem>
                            <SelectItem value="LONGTEXT">LONGTEXT</SelectItem>
                            <SelectItem value="DECIMAL">DECIMAL</SelectItem>
                            <SelectItem value="FLOAT">FLOAT</SelectItem>
                            <SelectItem value="DOUBLE">DOUBLE</SelectItem>
                            <SelectItem value="DATE">DATE</SelectItem>
                            <SelectItem value="DATETIME">DATETIME</SelectItem>
                            <SelectItem value="TIMESTAMP">TIMESTAMP</SelectItem>
                            <SelectItem value="BOOLEAN">BOOLEAN</SelectItem>
                            <SelectItem value="JSON">JSON</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-1">
                        <Input
                          placeholder="Length"
                          value={column.length || ''}
                          onChange={(e) => updateColumn(column.id, 'length', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <input
                          type="checkbox"
                          checked={column.nullable}
                          onChange={(e) => updateColumn(column.id, 'nullable', e.target.checked)}
                          className="h-4 w-4"
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <input
                          type="checkbox"
                          checked={column.isPrimaryKey}
                          onChange={(e) => updateColumn(column.id, 'isPrimaryKey', e.target.checked)}
                          className="h-4 w-4"
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <input
                          type="checkbox"
                          checked={column.isAutoIncrement}
                          onChange={(e) => updateColumn(column.id, 'isAutoIncrement', e.target.checked)}
                          className="h-4 w-4"
                          disabled={!column.isPrimaryKey}
                        />
                      </div>
                      <div className="col-span-3">
                        <Input
                          placeholder="Default value"
                          value={column.defaultValue || ''}
                          onChange={(e) => updateColumn(column.id, 'defaultValue', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeColumn(column.id)}
                          disabled={createForm.columns.length === 1}
                          className="h-8 w-8 p-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleSubmitCreateTable}>
              Create Table
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}