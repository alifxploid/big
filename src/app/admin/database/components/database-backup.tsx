'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
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
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Archive,
  Download,
  Upload,
  MoreHorizontal,
  Trash2,
  Play,
  Pause,
  RefreshCw,
  Calendar,
  Clock,
  HardDrive
} from 'lucide-react'

interface BackupRecord {
  id: string
  name: string
  type: 'full' | 'incremental' | 'differential'
  size: string
  createdAt: string
  status: 'completed' | 'failed' | 'in_progress'
  duration: string
  tables: number
}

interface BackupProgress {
  isRunning: boolean
  progress: number
  currentTable: string
  estimatedTime: string
}

export function DatabaseBackup() {
  const [backups] = useState<BackupRecord[]>([
    {
      id: '1',
      name: 'daily_backup_20240115',
      type: 'full',
      size: '245.8 MB',
      createdAt: '2024-01-15 02:00:00',
      status: 'completed',
      duration: '4m 32s',
      tables: 24
    },
    {
      id: '2',
      name: 'incremental_20240115_14',
      type: 'incremental',
      size: '12.3 MB',
      createdAt: '2024-01-15 14:00:00',
      status: 'completed',
      duration: '45s',
      tables: 8
    },
    {
      id: '3',
      name: 'manual_backup_20240114',
      type: 'full',
      size: '238.1 MB',
      createdAt: '2024-01-14 16:30:00',
      status: 'completed',
      duration: '4m 18s',
      tables: 24
    },
    {
      id: '4',
      name: 'failed_backup_20240113',
      type: 'full',
      size: '0 MB',
      createdAt: '2024-01-13 02:00:00',
      status: 'failed',
      duration: '1m 12s',
      tables: 0
    }
  ])

  const [backupProgress, setBackupProgress] = useState<BackupProgress>({
    isRunning: false,
    progress: 0,
    currentTable: '',
    estimatedTime: ''
  })

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isRestoreDialogOpen, setIsRestoreDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedBackup, setSelectedBackup] = useState<BackupRecord | null>(null)
  const [backupToDelete, setBackupToDelete] = useState<BackupRecord | null>(null)

  const [newBackup, setNewBackup] = useState({
    name: '',
    type: 'full' as 'full' | 'incremental' | 'differential',
    description: '',
    includeTables: 'all' as 'all' | 'selected'
  })

  const handleCreateBackup = () => {
    setBackupProgress({
      isRunning: true,
      progress: 0,
      currentTable: 'users',
      estimatedTime: '4m 30s'
    })
    setIsCreateDialogOpen(false)

    // Simulate backup progress
    const interval = setInterval(() => {
      setBackupProgress(prev => {
        if (prev.progress >= 100) {
          clearInterval(interval)
          return {
            isRunning: false,
            progress: 100,
            currentTable: '',
            estimatedTime: ''
          }
        }
        return {
          ...prev,
          progress: prev.progress + 10,
          currentTable: prev.progress < 50 ? 'users' : prev.progress < 80 ? 'products' : 'orders'
        }
      })
    }, 500)
  }

  const handleRestoreBackup = (backup: BackupRecord) => {
    setSelectedBackup(backup)
    setIsRestoreDialogOpen(true)
  }

  const confirmRestore = () => {
    if (selectedBackup) {
      console.log('Restoring backup:', selectedBackup.name)
      setIsRestoreDialogOpen(false)
      setSelectedBackup(null)
    }
  }

  const handleDeleteBackup = (backup: BackupRecord) => {
    setBackupToDelete(backup)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (backupToDelete) {
      console.log('Deleting backup:', backupToDelete.name)
      setIsDeleteDialogOpen(false)
      setBackupToDelete(null)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600 text-white">Completed</Badge>
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>
      case 'in_progress':
        return <Badge className="bg-blue-600 text-white">In Progress</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'full':
        return <Badge variant="default">Full</Badge>
      case 'incremental':
        return <Badge variant="secondary">Incremental</Badge>
      case 'differential':
        return <Badge variant="outline">Differential</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Backup Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Archive className="h-5 w-5 text-green-600" />
            </div>
            Backup Operations
          </CardTitle>
          <CardDescription>
            Create and manage database backups
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {backupProgress.isRunning ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Backup in Progress</span>
                <Badge className="bg-blue-600 text-white">Running</Badge>
              </div>
              <Progress value={backupProgress.progress} className="h-2" />
              <div className="text-sm text-muted-foreground">
                <p>Current table: {backupProgress.currentTable}</p>
                <p>Estimated time: {backupProgress.estimatedTime}</p>
                <p>Progress: {backupProgress.progress}%</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Button 
                onClick={() => setIsCreateDialogOpen(true)}
                className="w-full"
              >
                <Archive className="h-4 w-4 mr-2" />
                Create New Backup
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </Button>
              </div>
            </div>
          )}
          
          {/* Quick Stats */}
          <div className="border-t pt-4 space-y-3">
            <h4 className="font-medium text-sm">Backup Statistics</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-muted-foreground">Total Backups</p>
                <p className="font-medium">{backups.length}</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Total Size</p>
                <p className="font-medium">496.2 MB</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Last Backup</p>
                <p className="font-medium">2 hours ago</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Success Rate</p>
                <p className="font-medium">95%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Backup History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                Backup History
              </CardTitle>
              <CardDescription>
                Recent backup records and status
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {backups.map((backup) => (
                  <TableRow key={backup.id}>
                    <TableCell>
                      <div className="font-medium">{backup.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {backup.tables} tables • {backup.duration}
                      </div>
                    </TableCell>
                    <TableCell>{getTypeBadge(backup.type)}</TableCell>
                    <TableCell>{backup.size}</TableCell>
                    <TableCell>{getStatusBadge(backup.status)}</TableCell>
                    <TableCell>{backup.createdAt}</TableCell>
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
                          <DropdownMenuItem onClick={() => handleRestoreBackup(backup)}>
                            <Play className="mr-2 h-4 w-4" />
                            Restore
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleDeleteBackup(backup)}
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
        </CardContent>
      </Card>

      {/* Create Backup Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Backup</DialogTitle>
            <DialogDescription>
              Configure backup settings and create a new database backup
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="backup-name">Backup Name</Label>
              <Input
                id="backup-name"
                value={newBackup.name}
                onChange={(e) => setNewBackup({...newBackup, name: e.target.value})}
                placeholder="Enter backup name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backup-type">Backup Type</Label>
              <Select value={newBackup.type} onValueChange={(value: any) => setNewBackup({...newBackup, type: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Backup</SelectItem>
                  <SelectItem value="incremental">Incremental Backup</SelectItem>
                  <SelectItem value="differential">Differential Backup</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="backup-description">Description (Optional)</Label>
              <Textarea
                id="backup-description"
                value={newBackup.description}
                onChange={(e) => setNewBackup({...newBackup, description: e.target.value})}
                placeholder="Enter backup description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateBackup}>
              Create Backup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Restore Confirmation Dialog */}
      <AlertDialog open={isRestoreDialogOpen} onOpenChange={setIsRestoreDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Restore Database</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to restore the database from backup "{selectedBackup?.name}"? 
              This will overwrite the current database and cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRestore} className="bg-blue-600 hover:bg-blue-700">
              Restore Database
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Backup</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the backup "{backupToDelete?.name}"? 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete Backup
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}