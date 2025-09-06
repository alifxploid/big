"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, ShieldCheck, Copy, CheckCircle, AlertCircle, Info, ArrowLeft } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface FormData {
  productName: string
  description: string
  price: string
  category: string
  buyerName: string
  buyerContact: string
  sellerName: string
  sellerContact: string
  image: File | null
}

export default function RekberOutsidePage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    productName: "",
    description: "",
    price: "",
    category: "",
    buyerName: "",
    buyerContact: "",
    sellerName: "",
    sellerContact: "",
    image: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCodeDialog, setShowCodeDialog] = useState(false)
  const [chatCode, setChatCode] = useState("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, image: file }))
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateChatCode = () => {
    const prefix = "RKB"
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.random().toString(36).substring(2, 6).toUpperCase()
    return `${prefix}-${timestamp}-${random}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validasi form
    if (!formData.productName || !formData.description || !formData.price || 
        !formData.category || !formData.buyerName || !formData.buyerContact ||
        !formData.sellerName || !formData.sellerContact) {
      toast.error("Semua field wajib diisi!")
      return
    }

    if (!formData.image) {
      toast.error("Gambar produk wajib diupload!")
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Generate chat code
      const code = generateChatCode()
      setChatCode(code)
      setShowCodeDialog(true)
      
      toast.success("Rekber berhasil dibuat!")
    } catch (error) {
      toast.error("Terjadi kesalahan, silakan coba lagi")
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(chatCode)
      toast.success("Kode berhasil disalin!")
    } catch (error) {
      toast.error("Gagal menyalin kode")
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
            <h1 className="text-3xl font-bold tracking-tight">Buat Rekber Outside</h1>
            <p className="text-muted-foreground">
              Isi form untuk membuat transaksi rekber baru
            </p>
          </div>
        </div>
        <Badge variant="outline" className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          Penjual
        </Badge>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Form Rekber Outside</CardTitle>
              <CardDescription>
                Isi semua informasi dengan lengkap dan benar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informasi Produk</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="productName">Nama Produk *</Label>
                      <Input
                        id="productName"
                        placeholder="Masukkan nama produk"
                        value={formData.productName}
                        onChange={(e) => handleInputChange("productName", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Kategori *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elektronik">Elektronik</SelectItem>
                          <SelectItem value="fashion">Fashion</SelectItem>
                          <SelectItem value="otomotif">Otomotif</SelectItem>
                          <SelectItem value="rumah-tangga">Rumah Tangga</SelectItem>
                          <SelectItem value="olahraga">Olahraga</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi Produk *</Label>
                    <Textarea
                      id="description"
                      placeholder="Jelaskan detail produk, kondisi, spesifikasi, dll"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Harga (Rp) *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="0"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Gambar Produk *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        {imagePreview ? (
                          <div className="relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="max-w-full h-32 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2"
                              onClick={() => {
                                setImagePreview(null)
                                setFormData(prev => ({ ...prev, image: null }))
                              }}
                            >
                              Ganti Gambar
                            </Button>
                          </div>
                        ) : (
                          <>
                            <Upload className="h-8 w-8 text-muted-foreground" />
                            <div className="text-center">
                              <p className="text-sm font-medium">Upload gambar produk</p>
                              <p className="text-xs text-muted-foreground">PNG, JPG hingga 5MB</p>
                            </div>
                          </>
                        )}
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="imageUpload"
                        />
                        {!imagePreview && (
                          <Label htmlFor="imageUpload" className="cursor-pointer">
                            <Button type="button" variant="outline" size="sm">
                              Pilih Gambar
                            </Button>
                          </Label>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buyer Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informasi Pembeli</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="buyerName">Nama Pembeli *</Label>
                      <Input
                        id="buyerName"
                        placeholder="Nama lengkap pembeli"
                        value={formData.buyerName}
                        onChange={(e) => handleInputChange("buyerName", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="buyerContact">Kontak Pembeli *</Label>
                      <Input
                        id="buyerContact"
                        placeholder="WhatsApp/Telegram/Email"
                        value={formData.buyerContact}
                        onChange={(e) => handleInputChange("buyerContact", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Seller Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informasi Penjual</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="sellerName">Nama Penjual *</Label>
                      <Input
                        id="sellerName"
                        placeholder="Nama lengkap penjual"
                        value={formData.sellerName}
                        onChange={(e) => handleInputChange("sellerName", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sellerContact">Kontak Penjual *</Label>
                      <Input
                        id="sellerContact"
                        placeholder="WhatsApp/Telegram/Email"
                        value={formData.sellerContact}
                        onChange={(e) => handleInputChange("sellerContact", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Memproses..." : "Buat Rekber"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Tata Cara Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Tata Cara Rekber Outside</CardTitle>
              <CardDescription>
                Panduan lengkap menggunakan layanan rekber
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                        1
                      </div>
                      Pengisian Form
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Isi semua informasi produk, pembeli, dan penjual dengan lengkap dan benar.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Upload gambar produk yang jelas</li>
                      <li>• Pastikan harga sesuai kesepakatan</li>
                      <li>• Kontak harus aktif dan valid</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                        2
                      </div>
                      Kode Chat
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Setelah submit, Anda akan mendapat kode unik untuk komunikasi dengan pembeli.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Bagikan kode ke pembeli</li>
                      <li>• Kode berlaku 24 jam</li>
                      <li>• Simpan kode dengan aman</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                        3
                      </div>
                      Pembayaran
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Pembeli melakukan pembayaran ke rekening rekber yang disediakan.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Dana ditahan di rekening rekber</li>
                      <li>• Konfirmasi pembayaran otomatis</li>
                      <li>• Penjual akan dinotifikasi</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                        4
                      </div>
                      Pengiriman
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Penjual mengirim barang setelah konfirmasi pembayaran diterima.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Upload bukti pengiriman</li>
                      <li>• Berikan nomor resi</li>
                      <li>• Pantau status pengiriman</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-5">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                        5
                      </div>
                      Penyelesaian
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Pembeli konfirmasi penerimaan barang, dana diteruskan ke penjual.
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Pembeli cek kondisi barang</li>
                      <li>• Konfirmasi penerimaan</li>
                      <li>• Dana otomatis diteruskan</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>Biaya Layanan:</strong> 2% dari nilai transaksi dengan minimum Rp 5.000
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chat Code Dialog */}
      <Dialog open={showCodeDialog} onOpenChange={setShowCodeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Rekber Berhasil Dibuat
            </DialogTitle>
            <DialogDescription>
              Kode chat telah dibuat. Bagikan kode ini kepada pembeli untuk memulai transaksi.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <Label htmlFor="chatCode" className="text-sm font-medium">
                  Kode Chat
                </Label>
                <div className="flex mt-1">
                  <Input
                    id="chatCode"
                    value={chatCode}
                    readOnly
                    className="font-mono text-center text-lg font-bold"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="ml-2"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Penting:</strong> Simpan kode ini dengan aman. Kode berlaku selama 24 jam dan diperlukan untuk komunikasi dengan pembeli.
              </AlertDescription>
            </Alert>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowCodeDialog(false)}>
                Tutup
              </Button>
              <Button onClick={() => {
                // Redirect ke chat room
                router.push(`/portal/rekber-outside/chat/${chatCode}`)
              }}>
                Masuk ke Chat Room
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}