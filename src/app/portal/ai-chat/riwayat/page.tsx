"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  History, 
  Search, 
  MessageCircle, 
  Calendar,
  Clock,
  Trash2,
  Eye
} from "lucide-react"
import Link from "next/link"

interface ChatSession {
  id: string
  title: string
  lastMessage: string
  messageCount: number
  createdAt: Date
  updatedAt: Date
}

// Data dummy untuk riwayat chat
const chatSessions: ChatSession[] = [
  {
    id: '1',
    title: 'Pertanyaan tentang layanan SMM',
    lastMessage: 'Terima kasih atas informasinya. Saya akan mencoba layanan tersebut.',
    messageCount: 12,
    createdAt: new Date('2024-01-15T10:30:00'),
    updatedAt: new Date('2024-01-15T11:45:00')
  },
  {
    id: '2',
    title: 'Bantuan penggunaan PPOB',
    lastMessage: 'Bagaimana cara melakukan top up pulsa melalui platform ini?',
    messageCount: 8,
    createdAt: new Date('2024-01-14T14:20:00'),
    updatedAt: new Date('2024-01-14T14:35:00')
  },
  {
    id: '3',
    title: 'Konsultasi payment gateway',
    lastMessage: 'Apakah ada biaya tambahan untuk integrasi payment gateway?',
    messageCount: 15,
    createdAt: new Date('2024-01-13T09:15:00'),
    updatedAt: new Date('2024-01-13T10:20:00')
  },
  {
    id: '4',
    title: 'Pertanyaan umum platform',
    lastMessage: 'Saya ingin tahu lebih detail tentang fitur-fitur yang tersedia.',
    messageCount: 6,
    createdAt: new Date('2024-01-12T16:45:00'),
    updatedAt: new Date('2024-01-12T17:00:00')
  },
  {
    id: '5',
    title: 'Troubleshooting API',
    lastMessage: 'Error 401 terus muncul saat menggunakan API key.',
    messageCount: 20,
    createdAt: new Date('2024-01-11T13:30:00'),
    updatedAt: new Date('2024-01-11T14:45:00')
  }
]

export default function RiwayatChatPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredSessions, setFilteredSessions] = useState(chatSessions)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setFilteredSessions(chatSessions)
    } else {
      const filtered = chatSessions.filter(session => 
        session.title.toLowerCase().includes(query.toLowerCase()) ||
        session.lastMessage.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredSessions(filtered)
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Riwayat Chat</h1>
          <p className="text-muted-foreground">
            Lihat dan kelola riwayat percakapan AI Chat Anda
          </p>
        </div>
        <Button asChild>
          <Link href="/portal/ai-chat/chat">
            <MessageCircle className="size-4 mr-2" />
            Chat Baru
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="size-5" />
            Riwayat Percakapan
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Cari riwayat chat..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          {filteredSessions.length === 0 ? (
            <div className="text-center py-8">
              <History className="size-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tidak ada riwayat chat</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery ? 'Tidak ditemukan hasil untuk pencarian Anda.' : 'Anda belum memiliki riwayat percakapan.'}
              </p>
              <Button asChild>
                <Link href="/portal/ai-chat/chat">
                  <MessageCircle className="size-4 mr-2" />
                  Mulai Chat Baru
                </Link>
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {filteredSessions.map((session) => (
                  <Card key={session.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-sm truncate">
                              {session.title}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {session.messageCount} pesan
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {session.lastMessage}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="size-3" />
                              <span>{formatDate(session.createdAt)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="size-3" />
                              <span>{formatTime(session.updatedAt)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <Link href={`/portal/ai-chat/chat?session=${session.id}`}>
                              <Eye className="size-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  )
}