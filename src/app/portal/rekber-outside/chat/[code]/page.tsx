"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Send, 
  ArrowLeft, 
  Shield, 
  User, 
  Store, 
  Crown, 
  Clock, 
  Package, 
  CreditCard,
  Truck,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { toast } from "sonner"

interface Message {
  id: string
  sender: 'buyer' | 'seller' | 'admin'
  senderName: string
  message: string
  timestamp: Date
  type: 'text' | 'system' | 'payment' | 'shipping'
}

interface TransactionData {
  productName: string
  description: string
  price: string
  category: string
  buyerName: string
  sellerName: string
  status: 'waiting_payment' | 'paid' | 'shipped' | 'completed' | 'cancelled'
  createdAt: Date
}

export default function ChatRoomPage() {
  const params = useParams()
  const chatCode = params.code as string
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [currentUser] = useState<'buyer' | 'seller'>('buyer') // Simulasi, bisa dari auth context
  const [transactionData, setTransactionData] = useState<TransactionData | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Simulasi load data transaksi dan chat history
    const loadTransactionData = () => {
      setTransactionData({
        productName: "iPhone 14 Pro Max 256GB",
        description: "iPhone 14 Pro Max warna Deep Purple, kondisi 95%, fullset box, charger, earphone. Garansi resmi iBox masih 8 bulan.",
        price: "15500000",
        category: "Elektronik",
        buyerName: "Ahmad Buyer",
        sellerName: "Toko Seller",
        status: "waiting_payment",
        createdAt: new Date()
      })

      // Simulasi chat history
      const initialMessages: Message[] = [
        {
          id: "1",
          sender: "admin",
          senderName: "Admin Rekber",
          message: `Selamat datang di chat room transaksi ${chatCode}. Saya akan membantu memfasilitasi transaksi ini.`,
          timestamp: new Date(Date.now() - 300000),
          type: "system"
        },
        {
          id: "2",
          sender: "seller",
          senderName: "Toko Seller",
          message: "Halo, terima kasih sudah bergabung. Produk yang dijual adalah iPhone 14 Pro Max seperti yang tertera di detail.",
          timestamp: new Date(Date.now() - 240000),
          type: "text"
        },
        {
          id: "3",
          sender: "buyer",
          senderName: "Ahmad Buyer",
          message: "Halo, saya tertarik dengan iPhone nya. Kondisinya masih bagus kan?",
          timestamp: new Date(Date.now() - 180000),
          type: "text"
        },
        {
          id: "4",
          sender: "seller",
          senderName: "Toko Seller",
          message: "Iya kondisi masih sangat bagus, 95%. Ada sedikit bekas pemakaian normal tapi tidak mengganggu fungsi.",
          timestamp: new Date(Date.now() - 120000),
          type: "text"
        },
        {
          id: "5",
          sender: "admin",
          senderName: "Admin Rekber",
          message: "Silakan lakukan pembayaran ke rekening BCA 1234567890 a.n. PT Alip ganteng Indonesia sebesar Rp 15.500.000 + biaya admin Rp 310.000 = Total Rp 15.810.000",
          timestamp: new Date(Date.now() - 60000),
          type: "payment"
        }
      ]
      setMessages(initialMessages)
    }

    loadTransactionData()
  }, [chatCode])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      sender: currentUser,
      senderName: currentUser === 'buyer' ? 'Ahmad Buyer' : 'Toko Seller',
      message: newMessage.trim(),
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, message])
    setNewMessage("")
    
    // Simulasi auto reply dari admin atau pihak lain
    if (Math.random() > 0.7) {
      setTimeout(() => {
        const autoReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: currentUser === 'buyer' ? 'seller' : 'admin',
          senderName: currentUser === 'buyer' ? 'Toko Seller' : 'Admin Rekber',
          message: currentUser === 'buyer' ? 'Baik, saya menunggu pembayaran Anda.' : 'Terima kasih atas konfirmasinya.',
          timestamp: new Date(),
          type: 'text'
        }
        setMessages(prev => [...prev, autoReply])
      }, 2000)
    }
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      waiting_payment: { label: 'Menunggu Pembayaran', variant: 'secondary' as const, icon: CreditCard },
      paid: { label: 'Sudah Dibayar', variant: 'default' as const, icon: CheckCircle },
      shipped: { label: 'Dikirim', variant: 'default' as const, icon: Truck },
      completed: { label: 'Selesai', variant: 'default' as const, icon: CheckCircle },
      cancelled: { label: 'Dibatalkan', variant: 'destructive' as const, icon: AlertCircle }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig]
    const Icon = config.icon
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    )
  }

  const getSenderIcon = (sender: string) => {
    switch (sender) {
      case 'buyer': return <User className="h-4 w-4" />
      case 'seller': return <Store className="h-4 w-4" />
      case 'admin': return <Crown className="h-4 w-4" />
      default: return <User className="h-4 w-4" />
    }
  }

  const getSenderColor = (sender: string) => {
    switch (sender) {
      case 'buyer': return 'bg-blue-500'
      case 'seller': return 'bg-green-500'
      case 'admin': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  if (!transactionData) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/portal/rekber-outside">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Chat Room Rekber</h1>
            <p className="text-muted-foreground">Kode: {chatCode}</p>
          </div>
        </div>
        {getStatusBadge(transactionData.status)}
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Transaction Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Package className="h-4 w-4" />
                Detail Transaksi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium">{transactionData.productName}</p>
                <p className="text-xs text-muted-foreground mt-1">{transactionData.description}</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Harga:</span>
                  <span className="font-medium">Rp {parseInt(transactionData.price).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Biaya Admin (2%):</span>
                  <span className="font-medium">Rp {(parseInt(transactionData.price) * 0.02).toLocaleString('id-ID')}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm font-semibold">
                  <span>Total:</span>
                  <span>Rp {(parseInt(transactionData.price) * 1.02).toLocaleString('id-ID')}</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-500" />
                  <span className="text-muted-foreground">Pembeli:</span>
                  <span className="font-medium">{transactionData.buyerName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">Penjual:</span>
                  <span className="font-medium">{transactionData.sellerName}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {transactionData.status === 'waiting_payment' && (
            <Alert className="mt-4">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Pembayaran:</strong><br />
                BCA 1234567890<br />
                a.n. PT Rekber Indonesia<br />
                <strong>Rp {(parseInt(transactionData.price) * 1.02).toLocaleString('id-ID')}</strong>
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Chat Section */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Chat Room
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Online</span>
                </div>
              </div>
              <CardDescription>
                Komunikasi aman dengan penjual dan admin rekber
              </CardDescription>
            </CardHeader>
            
            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto space-y-4 pb-4">
              {messages.map((message) => (
                <div key={message.id} className="flex gap-3">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className={`${getSenderColor(message.sender)} text-white text-xs`}>
                      {getSenderIcon(message.sender)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{message.senderName}</span>
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString('id-ID', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                    
                    <div className={`p-3 rounded-lg text-sm ${
                      message.type === 'system' || message.type === 'payment' 
                        ? 'bg-muted border border-border' 
                        : message.sender === currentUser 
                          ? 'bg-primary text-primary-foreground ml-8' 
                          : 'bg-muted'
                    }`}>
                      {message.message}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>
            
            {/* Message Input */}
            <div className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ketik pesan..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}