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
  X,
  Code,
  CheckCircle
} from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'

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
  const [showSqlPreview, setShowSqlPreview] = useState(false)
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

  // MySQL Data Types
  const mysqlDataTypes = [
    // Numeric Types
    'TINYINT', 'SMALLINT', 'MEDIUMINT', 'INT', 'BIGINT',
    'DECIMAL', 'NUMERIC', 'FLOAT', 'DOUBLE', 'BIT',
    // String Types
    'CHAR', 'VARCHAR', 'BINARY', 'VARBINARY',
    'TINYBLOB', 'BLOB', 'MEDIUMBLOB', 'LONGBLOB',
    'TINYTEXT', 'TEXT', 'MEDIUMTEXT', 'LONGTEXT',
    // Date and Time Types
    'DATE', 'TIME', 'DATETIME', 'TIMESTAMP', 'YEAR',
    // JSON Type
    'JSON',
    // Spatial Types
    'GEOMETRY', 'POINT', 'LINESTRING', 'POLYGON'
  ]

  // MySQL Storage Engines
  const mysqlEngines = [
    'InnoDB', 'MyISAM', 'Memory', 'Archive', 'CSV', 'Federated', 'NDB'
  ]

  // Enhanced MySQL Mock Data
  const [tables] = useState<DatabaseTable[]>([
    {
      id: '1',
      name: 'users',
      type: 'table',
      records: 15847,
      size: '52.3 MB',
      lastModified: '2024-01-15 14:30:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '2',
      name: 'products',
      type: 'table',
      records: 8934,
      size: '156.7 MB',
      lastModified: '2024-01-15 12:15:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '3',
      name: 'orders',
      type: 'table',
      records: 34567,
      size: '124.8 MB',
      lastModified: '2024-01-15 16:45:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '4',
      name: 'order_items',
      type: 'table',
      records: 89234,
      size: '78.9 MB',
      lastModified: '2024-01-15 15:20:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '5',
      name: 'categories',
      type: 'table',
      records: 156,
      size: '2.1 MB',
      lastModified: '2024-01-14 11:30:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '6',
      name: 'user_sessions',
      type: 'table',
      records: 2847,
      size: '18.4 MB',
      lastModified: '2024-01-15 10:20:00',
      status: 'maintenance',
      engine: 'Memory'
    },
    {
      id: '7',
      name: 'product_reviews',
      type: 'table',
      records: 12456,
      size: '34.2 MB',
      lastModified: '2024-01-15 13:45:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '8',
      name: 'shopping_cart',
      type: 'table',
      records: 5678,
      size: '12.7 MB',
      lastModified: '2024-01-15 17:10:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '9',
      name: 'payment_transactions',
      type: 'table',
      records: 23890,
      size: '67.3 MB',
      lastModified: '2024-01-15 16:30:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '10',
      name: 'product_inventory',
      type: 'table',
      records: 8934,
      size: '23.1 MB',
      lastModified: '2024-01-15 14:50:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '11',
      name: 'user_addresses',
      type: 'table',
      records: 18456,
      size: '28.9 MB',
      lastModified: '2024-01-15 12:40:00',
      status: 'active',
      engine: 'InnoDB'
    },
    {
      id: '12',
      name: 'product_view',
      type: 'view',
      records: 8934,
      size: '0 MB',
      lastModified: '2024-01-14 09:30:00',
      status: 'active',
      engine: 'View'
    },
    {
      id: '13',
      name: 'order_summary_view',
      type: 'view',
      records: 34567,
      size: '0 MB',
      lastModified: '2024-01-14 10:15:00',
      status: 'active',
      engine: 'View'
    },
    {
      id: '14',
      name: 'idx_user_email',
      type: 'index',
      records: 0,
      size: '12.3 MB',
      lastModified: '2024-01-13 15:45:00',
      status: 'active',
      engine: 'BTree'
    },
    {
      id: '15',
      name: 'idx_product_category',
      type: 'index',
      records: 0,
      size: '8.7 MB',
      lastModified: '2024-01-13 16:20:00',
      status: 'active',
      engine: 'BTree'
    },
    {
      id: '16',
      name: 'idx_order_date',
      type: 'index',
      records: 0,
      size: '15.2 MB',
      lastModified: '2024-01-13 14:30:00',
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

  // Generate SQL Preview
  const generateSqlPreview = () => {
    if (!createForm.name.trim()) return 'CREATE TABLE table_name (\n  -- Add table name and columns\n);'
    
    let sql = `CREATE TABLE \`${createForm.name}\` (\n`
    
    // Add columns
    const columnDefinitions = createForm.columns.map(col => {
      if (!col.name.trim()) return '  -- Column name required'
      
      let definition = `  \`${col.name}\` ${col.type}`
      
      // Add length for applicable types
      if (col.length && ['VARCHAR', 'CHAR', 'DECIMAL', 'NUMERIC', 'FLOAT', 'DOUBLE'].includes(col.type)) {
        definition += `(${col.length})`
      }
      
      // Add NOT NULL
      if (!col.nullable) {
        definition += ' NOT NULL'
      }
      
      // Add AUTO_INCREMENT
      if (col.isAutoIncrement) {
        definition += ' AUTO_INCREMENT'
      }
      
      // Add default value
      if (col.defaultValue && col.defaultValue.trim()) {
        definition += ` DEFAULT '${col.defaultValue}'`
      }
      
      return definition
    })
    
    sql += columnDefinitions.join(',\n')
    
    // Add primary key
    const primaryKeys = createForm.columns.filter(col => col.isPrimaryKey)
    if (primaryKeys.length > 0) {
      sql += `,\n  PRIMARY KEY (${primaryKeys.map(col => `\`${col.name}\``).join(', ')})`
    }
    
    sql += `\n) ENGINE=${createForm.engine}`
    
    // Add comment
    if (createForm.comment.trim()) {
      sql += ` COMMENT='${createForm.comment}'`
    }
    
    sql += ';'
    
    return sql
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
    // Enhanced validation
    if (!createForm.name.trim()) {
      alert('Nama tabel wajib diisi')
      return
    }

    // Validate table name format (MySQL naming rules)
    const tableNameRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/
    if (!tableNameRegex.test(createForm.name)) {
      alert('Nama tabel hanya boleh mengandung huruf, angka, dan underscore. Harus dimulai dengan huruf atau underscore.')
      return
    }

    if (createForm.columns.length === 0) {
      alert('Minimal satu kolom diperlukan')
      return
    }

    // Check if all columns have valid names
    const invalidColumns = createForm.columns.filter(col => !col.name.trim() || !/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(col.name))
    if (invalidColumns.length > 0) {
      alert('Semua kolom harus memiliki nama yang valid (huruf, angka, underscore)')
      return
    }

    // Check for duplicate column names
    const columnNames = createForm.columns.map(col => col.name.toLowerCase())
    const duplicates = columnNames.filter((name, index) => columnNames.indexOf(name) !== index)
    if (duplicates.length > 0) {
      alert('Nama kolom tidak boleh duplikat')
      return
    }

    // Validate AUTO_INCREMENT columns
    const autoIncrementCols = createForm.columns.filter(col => col.isAutoIncrement)
    if (autoIncrementCols.length > 1) {
      alert('Hanya satu kolom yang boleh memiliki AUTO_INCREMENT')
      return
    }

    if (autoIncrementCols.length > 0 && !autoIncrementCols[0].isPrimaryKey) {
      alert('Kolom AUTO_INCREMENT harus menjadi PRIMARY KEY')
      return
    }

    // Log the create table data with SQL preview
    const sqlPreview = generateSqlPreview()
    console.log('Creating table:', createForm)
    console.log('SQL Preview:', sqlPreview)
    
    // Show success message
    alert(`Tabel '${createForm.name}' berhasil dibuat!\n\nSQL yang dijalankan:\n${sqlPreview}`)
    
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
    setShowSqlPreview(false)
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
                    {mysqlEngines.map(engine => (
                      <SelectItem key={engine} value={engine}>{engine}</SelectItem>
                    ))}
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
                            {mysqlDataTypes.map(dataType => (
                              <SelectItem key={dataType} value={dataType}>{dataType}</SelectItem>
                            ))}
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
                        <Checkbox
                          checked={column.nullable}
                          onCheckedChange={(checked) => updateColumn(column.id, 'nullable', checked === true)}
                          aria-label={`Allow NULL for ${column.name || 'column'}`}
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <Checkbox
                          checked={column.isPrimaryKey}
                          onCheckedChange={(checked) => updateColumn(column.id, 'isPrimaryKey', checked === true)}
                          aria-label={`Primary key for ${column.name || 'column'}`}
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <Checkbox
                          checked={column.isAutoIncrement}
                          onCheckedChange={(checked) => updateColumn(column.id, 'isAutoIncrement', checked === true)}
                          disabled={!column.isPrimaryKey}
                          aria-label={`Auto increment for ${column.name || 'column'}`}
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
            
            {/* SQL Preview Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">SQL Preview</Label>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowSqlPreview(!showSqlPreview)}
                >
                  {showSqlPreview ? 'Hide SQL' : 'Show SQL'}
                </Button>
              </div>
              
              {showSqlPreview && (
                <div className="border rounded-lg p-4 bg-muted/30">
                  <pre className="text-sm font-mono whitespace-pre-wrap text-muted-foreground">
                    {generateSqlPreview()}
                  </pre>
                </div>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => {
              setIsCreateDialogOpen(false)
              setShowSqlPreview(false)
            }}>
              Batal
            </Button>
            <Button type="button" variant="outline" onClick={() => setShowSqlPreview(!showSqlPreview)}>
              {showSqlPreview ? 'Sembunyikan SQL' : 'Preview SQL'}
            </Button>
            <Button type="button" onClick={handleSubmitCreateTable}>
              Buat Tabel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}