'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Send, ArrowLeft, Phone, Video, MoreVertical, Paperclip, Smile } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  status?: 'sending' | 'sent' | 'delivered' | 'read'
}

interface ChatSession {
  id: string
  category: string
  userName: string
  userEmail: string
  agentName: string
  status: 'waiting' | 'connected' | 'ended'
}

const categoryLabels: Record<string, string> = {
  sales: 'Sales',
  support: 'Support',
  technical: 'Technical',
  billing: 'Billing'
}

export default function ChatPage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = params.sessionId as string
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [session, setSession] = useState<ChatSession | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  // Simulate loading session data
  useEffect(() => {
    const loadSession = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockSession: ChatSession = {
        id: sessionId,
        category: 'support', // This would come from URL params or API
        userName: 'John Doe',
        userEmail: 'john@example.com',
        agentName: 'Sarah Wilson',
        status: 'connected'
      }
      
      setSession(mockSession)
      setIsConnected(true)
      
      // Add welcome message
      const welcomeMessage: Message = {
        id: '1',
        text: `Halo ${mockSession.userName}! Saya ${mockSession.agentName} dari tim ${categoryLabels[mockSession.category]}. Ada yang bisa saya bantu?`,
        sender: 'agent',
        timestamp: new Date(),
        status: 'delivered'
      }
      
      setMessages([welcomeMessage])
    }
    
    loadSession()
  }, [sessionId])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Simulate agent typing
  useEffect(() => {
    if (messages.length > 1) {
      const timer = setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          // Add agent response
          const responses = [
            'Terima kasih atas pertanyaannya. Saya akan membantu Anda menyelesaikan masalah ini.',
            'Bisa Anda jelaskan lebih detail mengenai masalah yang Anda hadapi?',
            'Saya sudah memeriksa akun Anda. Mari kita selesaikan ini bersama-sama.',
            'Apakah ada informasi tambahan yang bisa Anda berikan?'
          ]
          
          const randomResponse = responses[Math.floor(Math.random() * responses.length)]
          
          const agentMessage: Message = {
            id: Date.now().toString(),
            text: randomResponse,
            sender: 'agent',
            timestamp: new Date(),
            status: 'delivered'
          }
          
          setMessages(prev => [...prev, agentMessage])
        }, 2000)
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [messages.length])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newMessage.trim()) return
    
    const message: Message = {
      id: Date.now().toString(),
      text: newMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    }
    
    setMessages(prev => [...prev, message])
    setNewMessage('')
    
    // Simulate message delivery
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === message.id 
            ? { ...msg, status: 'delivered' }
            : msg
        )
      )
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Menghubungkan ke agent...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {session.agentName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <div>
                <h1 className="text-white font-semibold">{session.agentName}</h1>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-400 text-sm">
                    {categoryLabels[session.category]} • Online
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-xs lg:max-w-md px-4 py-3 rounded-2xl
                  ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                      : 'bg-gray-800 text-white border border-gray-700'
                  }
                `}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs opacity-70">
                    {formatTime(message.timestamp)}
                  </span>
                  {message.sender === 'user' && (
                    <span className="text-xs opacity-70">
                      {message.status === 'sending' && '⏳'}
                      {message.status === 'sent' && '✓'}
                      {message.status === 'delivered' && '✓✓'}
                      {message.status === 'read' && '✓✓'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 p-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-end space-x-4">
            <div className="flex-1">
              <div className="relative">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage(e)
                    }
                  }}
                  placeholder="Ketik pesan Anda..."
                  rows={1}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
                <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                  <button
                    type="button"
                    className="p-1 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className="p-1 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
                  >
                    <Smile className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="p-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl text-white transition-all duration-200 hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}