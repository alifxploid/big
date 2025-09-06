'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, AlertTriangle, Shield, Info, ExternalLink, Scale, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ShineBorder } from '@/components/magicui/shine-border'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'

export default function DisclaimerPage() {
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
                <AlertTriangle className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                Disclaimer
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
                Penting untuk dibaca: Batasan tanggung jawab dan ketentuan penggunaan layanan rekber.
              </p>
              <Badge variant="secondary" className="mt-4">
                Terakhir diperbarui: 1 Januari 2024
              </Badge>
            </div>
          </ShineBorder>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800 dark:text-yellow-200">
            <strong>Perhatian:</strong> Harap baca disclaimer ini dengan seksama sebelum menggunakan layanan kami. 
            Penggunaan layanan berarti Anda memahami dan menyetujui semua ketentuan yang tercantum.
          </AlertDescription>
        </Alert>

        {/* Disclaimer Content */}
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-white flex items-center">
              <Shield className="mr-3 h-6 w-6 text-red-600 dark:text-red-400" />
              Batasan Tanggung Jawab
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="general">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Info className="mr-2 h-4 w-4 text-blue-600" />
                    Disclaimer Umum
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Platform rekber kami menyediakan layanan perantara untuk memfasilitasi transaksi antara pembeli dan penjual. 
                    Kami berkomitmen untuk memberikan layanan terbaik, namun terdapat batasan tanggung jawab yang perlu dipahami.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Peran Platform:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Kami bertindak sebagai perantara netral dalam transaksi</li>
                        <li>Tidak terlibat langsung dalam negosiasi harga atau kualitas barang</li>
                        <li>Menyediakan sistem keamanan dan verifikasi standar</li>
                        <li>Memfasilitasi komunikasi antara pihak yang bertransaksi</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Batasan Layanan:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Tidak menjamin ketersediaan layanan 24/7 tanpa gangguan</li>
                        <li>Tidak bertanggung jawab atas kegagalan sistem pihak ketiga</li>
                        <li>Tidak dapat mengontrol kualitas atau keaslian barang yang diperjualbelikan</li>
                        <li>Tidak menjamin hasil atau keuntungan dari transaksi</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">
                      💡 Kami berusaha memberikan layanan terbaik dalam batas kemampuan dan teknologi yang tersedia.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="user-responsibility">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-green-600" />
                    Tanggung Jawab Pengguna
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Setiap pengguna bertanggung jawab penuh atas tindakan dan keputusan yang diambil dalam menggunakan platform kami.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Verifikasi dan Due Diligence:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Memverifikasi identitas dan kredibilitas pihak lawan transaksi</li>
                        <li>Memeriksa kualitas, keaslian, dan kondisi barang sebelum transaksi</li>
                        <li>Memahami risiko yang terkait dengan setiap transaksi</li>
                        <li>Melakukan riset pasar untuk harga yang wajar</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Kepatuhan Hukum:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Mematuhi semua hukum dan regulasi yang berlaku</li>
                        <li>Tidak menggunakan platform untuk aktivitas ilegal</li>
                        <li>Melaporkan aktivitas mencurigakan atau pelanggaran</li>
                        <li>Bertanggung jawab atas pajak dan kewajiban finansial</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Keamanan Akun:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Menjaga kerahasiaan password dan informasi login</li>
                        <li>Menggunakan autentikasi dua faktor jika tersedia</li>
                        <li>Melaporkan segera jika akun diduga diretas</li>
                        <li>Tidak membagikan akses akun kepada pihak lain</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transaction-risks">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-yellow-600" />
                    Risiko Transaksi
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Setiap transaksi memiliki risiko inheren yang harus dipahami dan diterima oleh semua pihak yang terlibat.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Risiko Finansial:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Kemungkinan kerugian finansial dari transaksi yang gagal</li>
                        <li>Fluktuasi nilai tukar atau harga pasar</li>
                        <li>Biaya tambahan yang tidak terduga (pengiriman, pajak, dll.)</li>
                        <li>Keterlambatan pembayaran atau pengembalian dana</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Risiko Produk:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Barang tidak sesuai dengan deskripsi atau ekspektasi</li>
                        <li>Kerusakan atau kehilangan selama pengiriman</li>
                        <li>Produk palsu atau tidak original</li>
                        <li>Masalah garansi atau after-sales service</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Risiko Teknis:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Gangguan sistem atau downtime platform</li>
                        <li>Kesalahan dalam pemrosesan transaksi</li>
                        <li>Kehilangan data atau informasi</li>
                        <li>Serangan siber atau pelanggaran keamanan</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                      ⚠️ Selalu lakukan transaksi dengan hati-hati dan jangan menginvestasikan lebih dari yang Anda mampu untuk kehilangan.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="third-party">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4 text-purple-600" />
                    Layanan Pihak Ketiga
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Platform kami mengintegrasikan berbagai layanan pihak ketiga untuk meningkatkan fungsionalitas. 
                    Kami tidak bertanggung jawab atas kinerja atau keandalan layanan tersebut.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Layanan Pembayaran:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Gateway pembayaran (Midtrans, Xendit, dll.)</li>
                        <li>E-wallet dan mobile banking</li>
                        <li>Sistem transfer bank</li>
                        <li>Cryptocurrency payment processor</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Layanan Logistik:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Kurir dan ekspedisi (JNE, TIKI, Pos Indonesia, dll.)</li>
                        <li>Tracking dan monitoring pengiriman</li>
                        <li>Asuransi pengiriman</li>
                        <li>Layanan COD (Cash on Delivery)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Layanan Verifikasi:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Verifikasi identitas (KYC)</li>
                        <li>Verifikasi nomor telepon dan email</li>
                        <li>Credit scoring dan risk assessment</li>
                        <li>Background check untuk seller</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-purple-800 dark:text-purple-200 font-medium">
                      🔗 Setiap layanan pihak ketiga memiliki terms of service dan privacy policy tersendiri.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="limitation-liability">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Scale className="mr-2 h-4 w-4 text-red-600" />
                    Pembatasan Tanggung Jawab
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Dalam batas maksimal yang diizinkan oleh hukum, kami membatasi tanggung jawab untuk kerugian yang mungkin timbul.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Pengecualian Tanggung Jawab:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                        <li>Kehilangan keuntungan, data, atau peluang bisnis</li>
                        <li>Kerusakan reputasi atau goodwill</li>
                        <li>Kerugian akibat force majeure (bencana alam, perang, dll.)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Batas Maksimal Ganti Rugi:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Tidak melebihi total biaya layanan yang dibayarkan dalam 12 bulan terakhir</li>
                        <li>Maksimal Rp 10.000.000 untuk setiap klaim individual</li>
                        <li>Tidak termasuk biaya hukum atau administrative</li>
                        <li>Tunduk pada investigasi dan verifikasi klaim</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Prosedur Klaim:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Laporan harus diajukan dalam 30 hari setelah kejadian</li>
                        <li>Menyertakan bukti dan dokumentasi yang lengkap</li>
                        <li>Menjalani proses investigasi dan mediasi</li>
                        <li>Keputusan final berdasarkan kebijakan internal</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      ⚖️ Pembatasan ini tidak berlaku untuk kerugian akibat kelalaian berat atau kesengajaan dari pihak kami.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="force-majeure">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-orange-600" />
                    Force Majeure
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Kami tidak bertanggung jawab atas kegagalan atau keterlambatan dalam memenuhi kewajiban yang disebabkan oleh 
                    keadaan di luar kendali kami.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Keadaan Force Majeure:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Bencana alam (gempa bumi, tsunami, banjir, dll.)</li>
                        <li>Perang, terorisme, atau kerusuhan sipil</li>
                        <li>Pandemi atau wabah penyakit</li>
                        <li>Kebijakan pemerintah atau perubahan regulasi mendadak</li>
                        <li>Gangguan infrastruktur internet atau telekomunikasi</li>
                        <li>Serangan siber skala besar atau cyber warfare</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Tindakan Mitigasi:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Pemberitahuan segera kepada pengguna tentang situasi</li>
                        <li>Upaya maksimal untuk meminimalkan dampak</li>
                        <li>Rencana pemulihan dan kontinuitas bisnis</li>
                        <li>Komunikasi berkala tentang perkembangan situasi</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-orange-800 dark:text-orange-200 font-medium">
                      🌪️ Dalam situasi force majeure, kami akan berusaha memberikan layanan alternatif atau kompensasi yang wajar.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Info className="mr-2 h-4 w-4 text-blue-600" />
                    Perubahan Disclaimer
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Disclaimer ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam layanan, 
                    hukum, atau praktik bisnis kami.
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pemberitahuan perubahan melalui email dan notifikasi platform</li>
                    <li>Periode transisi 30 hari untuk perubahan material</li>
                    <li>Riwayat versi disclaimer tersedia untuk referensi</li>
                    <li>Hak untuk menghentikan penggunaan layanan jika tidak setuju</li>
                  </ul>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">
                      📋 Penggunaan layanan setelah perubahan disclaimer dianggap sebagai persetujuan terhadap versi terbaru.
                    </p>
                  </div>
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
                Pertanyaan tentang disclaimer atau batasan tanggung jawab?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Tim legal kami siap memberikan klarifikasi dan menjawab pertanyaan terkait disclaimer ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                    Hubungi Tim Legal
                  </Button>
                </Link>
                <Link href="/legal/terms">
                  <Button variant="outline" className="border-neutral-300 dark:border-neutral-600">
                    Baca Syarat & Ketentuan
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}