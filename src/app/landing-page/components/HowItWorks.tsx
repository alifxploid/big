'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { 
  ShoppingCart, 
  MessageSquare, 
  Shield, 
  CheckCircle, 
  FileText, 
  Upload, 
  UserCheck, 
  Handshake,
  ArrowRight
} from 'lucide-react'

const insideSteps = [
  {
    icon: ShoppingCart,
    title: 'Pilih Produk',
    description: 'Browse dan pilih produk yang ingin dibeli dari marketplace internal',
    details: 'Lihat detail produk, harga, dan rating penjual'
  },
  {
    icon: MessageSquare,
    title: 'Chat dengan Admin',
    description: 'Hubungi admin untuk memulai proses rekber',
    details: 'Admin akan memverifikasi detail transaksi dan memberikan instruksi'
  },
  {
    icon: Shield,
    title: 'Rekber Dimulai',
    description: 'Dana buyer ditahan sistem sampai barang diterima',
    details: 'Sistem otomatis mengamankan dana dan memberikan notifikasi ke seller'
  },
  {
    icon: CheckCircle,
    title: 'Konfirmasi Selesai',
    description: 'Buyer konfirmasi barang diterima, dana diteruskan ke seller',
    details: 'Proses otomatis dengan opsi dispute jika ada masalah'
  }
]

const outsideSteps = [
  {
    icon: FileText,
    title: 'Isi Form Data',
    description: 'Input data penjual, pembeli, dan detail transaksi',
    details: 'Nama, kontak, platform asal (Facebook, Instagram, dll)'
  },
  {
    icon: Upload,
    title: 'Upload Bukti',
    description: 'Upload screenshot chat, gambar produk, dan bukti kesepakatan',
    details: 'Maksimal 5 file, format JPG/PNG, ukuran max 5MB per file'
  },
  {
    icon: UserCheck,
    title: 'Verifikasi Admin',
    description: 'Admin memverifikasi data dan memberikan persetujuan',
    details: 'Proses verifikasi 1-24 jam, notifikasi via WhatsApp'
  },
  {
    icon: Handshake,
    title: 'Rekber Aktif',
    description: 'Sistem rekber aktif, dana buyer diamankan sampai deal selesai',
    details: 'Tracking real-time status transaksi di dashboard'
  }
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('inside')

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cara Kerja Rekber
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Dua jalur rekber yang fleksibel untuk semua kebutuhan transaksi online Anda
          </p>
        </div>
        
        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="inside" className="text-sm font-medium">
                Rekber Inside
              </TabsTrigger>
              <TabsTrigger value="outside" className="text-sm font-medium">
                Rekber Outside
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="inside" className="mt-12">
              <div className="text-center mb-8">
                <Badge variant="default" className="mb-4">
                  Transaksi dalam Platform
                </Badge>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Rekber Inside
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Untuk transaksi produk yang tersedia di marketplace internal kami. 
                  Proses otomatis dan terintegrasi penuh.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {insideSteps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <Card key={index} className="relative border-2 hover:border-blue-200 transition-colors">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 mb-4">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-3 left-4">
                          <Badge variant="outline" className="bg-white">
                            {index + 1}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <CardDescription className="text-gray-600 mb-3">
                          {step.description}
                        </CardDescription>
                        <p className="text-xs text-gray-500">
                          {step.details}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="outside" className="mt-12">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">
                  Transaksi Eksternal
                </Badge>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Rekber Outside
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Untuk transaksi yang berasal dari platform lain seperti Facebook, Instagram, 
                  atau marketplace lainnya. Verifikasi manual untuk keamanan maksimal.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {outsideSteps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <Card key={index} className="relative border-2 hover:border-blue-200 transition-colors">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 mb-4">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-3 left-4">
                          <Badge variant="outline" className="bg-white">
                            {index + 1}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <CardDescription className="text-gray-600 mb-3">
                          {step.description}
                        </CardDescription>
                        <p className="text-xs text-gray-500">
                          {step.details}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Siap Memulai Transaksi Aman?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Pilih jenis rekber yang sesuai dengan kebutuhan Anda. 
                Tim support kami siap membantu 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton>
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                    Mulai Rekber Inside
                  </span>
                </ShimmerButton>
                <ShimmerButton>
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                    Mulai Rekber Outside
                  </span>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}