"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, User } from "lucide-react"
import { PromptInputBox } from "@/components/ai-prompt-box"

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Halo! Saya adalah AI Assistant. Bagaimana saya bisa membantu Anda hari ini?',
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (message: string, files?: File[]) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    // Simulasi response AI
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Terima kasih atas pertanyaan Anda: "${userMessage.content}". Saya sedang memproses permintaan Anda dan akan memberikan respons yang sesuai.`,
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <Bot className="size-5 text-primary" />
            AI Chat Assistant
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="size-4" />
                    ) : (
                      <Bot className="size-4" />
                    )}
                  </div>
                  
                  <div className={`flex-1 max-w-[80%] ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    <div className={`inline-block p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                    <Bot className="size-4" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block p-3 rounded-lg bg-muted text-foreground">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="border-t border-border p-4">
            <PromptInputBox
              onSend={handleSendMessage}
              isLoading={isLoading}
              placeholder="Ketik pesan Anda..."
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}