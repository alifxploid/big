'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Users, CreditCard, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { ShineBorder } from '@/components/magicui/shine-border'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 relative overflow-hidden">
      {/* Background Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          
          <ShineBorder
            className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-8 md:shadow-xl"
            color="#A07CFE"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                Syarat & Ketentuan
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
                Ketentuan penggunaan layanan rekber yang mengatur hak dan kewajiban semua pihak.
              </p>
              <Badge variant="secondary" className="mt-4">
                Berlaku sejak: 1 Januari 2024
              </Badge>
            </div>
          </ShineBorder>
        </div>

        {/* Terms Content */}
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-white flex items-center">
              <Users className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Ketentuan Layanan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="general">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4 text-green-600" />
                    Ketentuan Umum
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Dengan menggunakan layanan rekber kami, Anda menyetujui untuk terikat dengan syarat dan ketentuan berikut. 
                    Layanan ini dirancang untuk memberikan keamanan dalam transaksi online antara pembeli dan penjual.
                  </p>
                  <p>
                    Platform kami bertindak sebagai pihak ketiga yang netral untuk memastikan kedua belah pihak memenuhi 
                    kewajiban mereka sesuai dengan kesepakatan yang telah dibuat.
                  </p>
                  <p>
                    Pengguna wajib memberikan informasi yang akurat dan terkini saat mendaftar dan menggunakan layanan kami.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seller">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4 text-blue-600" />
                    Kewajiban Penjual
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Penjual wajib menyediakan barang atau jasa sesuai dengan deskripsi yang telah disepakati dengan pembeli.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Memberikan informasi produk yang akurat dan lengkap</li>
                    <li>Mengirimkan barang dalam kondisi baik dan sesuai waktu yang disepakati</li>
                    <li>Menyediakan bukti pengiriman yang valid</li>
                    <li>Merespons komunikasi dari pembeli dengan wajar</li>
                    <li>Tidak melakukan tindakan penipuan atau menyesatkan</li>
                  </ul>
                  <p>
                    Penjual bertanggung jawab penuh atas kualitas dan keaslian barang yang dijual.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buyer">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-purple-600" />
                    Kewajiban Pembeli
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Pembeli wajib melakukan pembayaran sesuai dengan kesepakatan dan mengkonfirmasi penerimaan barang.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
                    <li>Memberikan alamat pengiriman yang akurat dan lengkap</li>
                    <li>Mengkonfirmasi penerimaan barang dalam batas waktu yang ditentukan</li>
                    <li>Melaporkan masalah atau ketidaksesuaian barang dengan segera</li>
                    <li>Berkomunikasi dengan sopan dan profesional</li>
                  </ul>
                  <p>
                    Pembeli berhak mendapatkan barang sesuai deskripsi dan dalam kondisi baik.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="platform">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4 text-orange-600" />
                    Tanggung Jawab Platform
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Platform berkomitmen untuk menyediakan layanan rekber yang aman dan terpercaya.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Menjaga keamanan dana yang dititipkan selama proses transaksi</li>
                    <li>Memfasilitasi komunikasi antara pembeli dan penjual</li>
                    <li>Menyelesaikan sengketa dengan adil dan objektif</li>
                    <li>Melindungi data pribadi pengguna sesuai kebijakan privasi</li>
                    <li>Memberikan dukungan teknis dan customer service</li>
                  </ul>
                  <p>
                    Platform tidak bertanggung jawab atas kerugian yang timbul akibat kelalaian pengguna atau 
                    force majeure yang berada di luar kendali kami.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fees">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4 text-green-600" />
                    Biaya Layanan
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Platform mengenakan biaya layanan untuk setiap transaksi yang berhasil diselesaikan.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Biaya layanan sebesar 2% dari nilai transaksi</li>
                    <li>Biaya minimum Rp 5.000 per transaksi</li>
                    <li>Biaya administrasi untuk penarikan dana Rp 2.500</li>
                    <li>Tidak ada biaya tersembunyi atau biaya tambahan</li>
                  </ul>
                  <p>
                    Struktur biaya dapat berubah sewaktu-waktu dengan pemberitahuan sebelumnya.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disputes">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-red-600" />
                    Penyelesaian Sengketa
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Jika terjadi sengketa antara pembeli dan penjual, platform akan bertindak sebagai mediator.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sengketa harus dilaporkan dalam waktu 3x24 jam setelah transaksi</li>
                    <li>Kedua belah pihak wajib menyediakan bukti yang relevan</li>
                    <li>Keputusan platform bersifat final dan mengikat</li>
                    <li>Proses mediasi akan diselesaikan dalam 7 hari kerja</li>
                  </ul>
                  <p>
                    Platform berhak menahan dana hingga sengketa diselesaikan secara adil.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="termination">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-yellow-600" />
                    Penangguhan dan Pemutusan
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Platform berhak menangguhkan atau menutup akun pengguna yang melanggar ketentuan.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Melakukan tindakan penipuan atau kecurangan</li>
                    <li>Memberikan informasi palsu atau menyesatkan</li>
                    <li>Melanggar hukum yang berlaku</li>
                    <li>Menggunakan platform untuk tujuan ilegal</li>
                    <li>Melakukan spam atau tindakan yang merugikan pengguna lain</li>
                  </ul>
                  <p>
                    Pengguna dapat mengajukan banding atas keputusan penangguhan dalam waktu 14 hari.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-8 border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Ada pertanyaan tentang ketentuan ini?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Tim legal kami siap membantu menjelaskan setiap poin dalam syarat dan ketentuan.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Hubungi Tim Legal
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}