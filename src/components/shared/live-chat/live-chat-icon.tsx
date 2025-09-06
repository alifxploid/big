'use client'

import React, { useState } from 'react'
import { MessageCircle, X, Send, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface LiveChatIconProps {
  className?: string
}

export function LiveChatIcon({ className }: LiveChatIconProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isOnline] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !name.trim() || !email.trim()) return
    
    // Simulasi kirim pesan
    console.log('Pesan dikirim:', { name, email, message })
    setMessage('')
    // Reset form atau lakukan aksi lainnya
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className={cn(
        "fixed bottom-6 right-6 z-50",
        className
      )}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className={cn(
            "h-14 w-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110",
            "bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900",
            "border-2 border-gray-700/50 backdrop-blur-sm ring-1 ring-white/10",
            isOpen && "rotate-180"
          )}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
        
        {/* Online Status Badge */}
        {isOnline && !isOpen && (
          <Badge 
            variant="secondary" 
            className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 p-0 animate-pulse ring-2 ring-black"
          >
            <span className="sr-only">Online</span>
          </Badge>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl border border-gray-800/50 bg-gray-900/95 backdrop-blur-md ring-1 ring-white/10">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                  <CardTitle className="text-lg text-white">Live Support</CardTitle>
                </div>
                <Badge variant="outline" className="text-xs border-red-500/50 text-red-400">
                  Online
                </Badge>
              </div>
              <p className="text-sm text-gray-400">
                Tim expert kami siap membantu Anda
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Chat Messages Area */}
              <div className="h-32 rounded-lg bg-black/50 border border-gray-800/50 p-3 overflow-y-auto">
                <div className="flex items-start gap-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <User className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-gray-800 border border-gray-700/50 rounded-lg p-2 text-sm shadow-sm text-gray-200">
                    Halo! Ada yang bisa kami bantu hari ini?
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-sm"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-sm"
                    required
                  />
                </div>
                
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Tulis pesan Anda..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-sm resize-none"
                    rows={2}
                    required
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="self-end h-10 w-10 p-0 bg-red-600 hover:bg-red-700 border border-red-500/50"
                    disabled={!message.trim() || !name.trim() || !email.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
              
              <p className="text-xs text-gray-500 text-center">
                Response time: {'<'} 2 menit
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}