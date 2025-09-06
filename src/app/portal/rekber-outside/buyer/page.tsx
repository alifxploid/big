"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, KeyRound, ArrowLeft, MessageCircle, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function BuyerPage() {
  const [chatCode, setChatCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!chatCode.trim()) {
      toast.error("Kode chat wajib diisi!")
      return
    }

    // Validasi format kode (RKB-XXXXXX-XXXX)
    const codePattern = /^RKB-\d{6}-[A-Z0-9]{4}$/
    if (!codePattern.test(chatCode.trim())) {
      toast.error("Format kode tidak valid! Contoh: RKB-123456-ABCD")
      return
    }

    setIsVerifying(true)
    
    try {
      // Simulasi API call untuk verifikasi kode
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulasi validasi kode
      const isValidCode = Math.random() > 0.3 // 70% chance valid untuk demo
      
      if (isValidCode) {
        toast.success("Kode valid! Mengarahkan ke chat room...")
        // Redirect ke halaman chat dengan kode
        setTimeout(() => {
          router.push(`/portal/rekber-outside/chat/${chatCode.trim()}`)
        }, 1500)
      } else {
        toast.error("Kode tidak valid atau sudah kadaluarsa!")
      }
    } catch (error) {
      toast.error("Terjadi kesalahan, silakan coba lagi")
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/portal/rekber-outside">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Masuk sebagai Pembeli</h1>
            <p className="text-muted-foreground">
              Masukkan kode chat yang diberikan oleh penjual
            </p>
          </div>
        </div>
        <Badge variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Pembeli
        </Badge>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeyRound className="h-5 w-5" />
                Input Kode Chat
              </CardTitle>
              <CardDescription>
                Masukkan kode chat yang diberikan oleh penjual untuk bergabung ke transaksi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="chatCode">Kode Chat *</Label>
                  <Input
                    id="chatCode"
                    placeholder="RKB-123456-ABCD"
                    value={chatCode}
                    onChange={(e) => setChatCode(e.target.value.toUpperCase())}
                    className="font-mono text-center text-lg"
                    maxLength={15}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Format: RKB-XXXXXX-XXXX (contoh: RKB-123456-ABCD)
                  </p>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>Pastikan kode benar:</strong> Kode chat hanya berlaku 24 jam sejak dibuat oleh penjual. 
                    Jika kode tidak valid, hubungi penjual untuk mendapatkan kode baru.
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="w-full" size="lg" disabled={isVerifying}>
                  {isVerifying ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Memverifikasi...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Masuk ke Chat Room
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Apa yang Terjadi Selanjutnya?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium">Masuk Chat Room</p>
                    <p className="text-xs text-muted-foreground">Anda akan bergabung dengan penjual dan admin dalam satu ruang chat</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium">Lihat Detail Produk</p>
                    <p className="text-xs text-muted-foreground">Review informasi produk, harga, dan detail transaksi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium">Diskusi & Negosiasi</p>
                    <p className="text-xs text-muted-foreground">Komunikasi dengan penjual untuk memastikan detail transaksi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="text-sm font-medium">Lakukan Pembayaran</p>
                    <p className="text-xs text-muted-foreground">Transfer ke rekening rekber yang disediakan admin</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">Tips untuk Pembeli</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Pastikan detail produk sesuai dengan yang diinginkan</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Tanyakan kondisi barang dan garansi jika ada</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Konfirmasi metode pengiriman dan estimasi waktu</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Jangan transfer ke rekening selain yang diberikan admin</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}