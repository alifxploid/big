'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { ShineBorder } from '@/components/magicui/shine-border'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'

export default function PrivacyPage() {
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
                <Lock className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                Kebijakan Privasi
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
                Komitmen kami dalam melindungi data pribadi dan privasi pengguna layanan rekber.
              </p>
              <Badge variant="secondary" className="mt-4">
                Terakhir diperbarui: 1 Januari 2024
              </Badge>
            </div>
          </ShineBorder>
        </div>

        {/* Privacy Content */}
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-white flex items-center">
              <Shield className="mr-3 h-6 w-6 text-green-600 dark:text-green-400" />
              Perlindungan Data Pribadi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="overview">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Eye className="mr-2 h-4 w-4 text-blue-600" />
                    Ringkasan Kebijakan
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan ini menjelaskan 
                    bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan.
                  </p>
                  <p>
                    Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan privasi ini. 
                    Kami akan selalu transparan tentang data yang kami kumpulkan dan bagaimana penggunaannya.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">
                      🔒 Prinsip Utama: Kami tidak akan pernah menjual data pribadi Anda kepada pihak ketiga.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="collection">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Database className="mr-2 h-4 w-4 text-purple-600" />
                    Data yang Kami Kumpulkan
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Kami mengumpulkan informasi yang diperlukan untuk menyediakan layanan rekber yang aman dan efektif.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Informasi Identitas:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Nama lengkap dan nama pengguna</li>
                        <li>Alamat email dan nomor telepon</li>
                        <li>Alamat fisik untuk pengiriman</li>
                        <li>Dokumen identitas (KTP/SIM) untuk verifikasi</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Informasi Transaksi:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Riwayat transaksi dan pembayaran</li>
                        <li>Detail rekening bank atau e-wallet</li>
                        <li>Komunikasi dengan pengguna lain</li>
                        <li>Rating dan ulasan yang diberikan</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Data Teknis:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Alamat IP dan informasi perangkat</li>
                        <li>Log aktivitas dan penggunaan aplikasi</li>
                        <li>Cookie dan teknologi pelacakan serupa</li>
                        <li>Lokasi geografis (dengan persetujuan)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="usage">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <UserCheck className="mr-2 h-4 w-4 text-green-600" />
                    Penggunaan Data
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Data yang kami kumpulkan digunakan untuk tujuan yang sah dan terbatas sesuai dengan layanan yang kami berikan.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Operasional Layanan:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Memproses dan memfasilitasi transaksi rekber</li>
                        <li>Verifikasi identitas dan pencegahan penipuan</li>
                        <li>Komunikasi terkait transaksi dan layanan</li>
                        <li>Penyelesaian sengketa dan dukungan pelanggan</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Peningkatan Layanan:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Analisis penggunaan untuk perbaikan platform</li>
                        <li>Pengembangan fitur baru yang relevan</li>
                        <li>Personalisasi pengalaman pengguna</li>
                        <li>Riset dan pengembangan produk</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Keamanan dan Kepatuhan:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Deteksi dan pencegahan aktivitas mencurigakan</li>
                        <li>Kepatuhan terhadap regulasi dan hukum yang berlaku</li>
                        <li>Audit keamanan dan investigasi internal</li>
                        <li>Perlindungan hak dan keselamatan pengguna</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sharing">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4 text-orange-600" />
                    Pembagian Data
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Kami tidak menjual data pribadi Anda. Pembagian data hanya dilakukan dalam situasi terbatas dan dengan perlindungan yang ketat.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Pihak Ketiga Terpercaya:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Penyedia layanan pembayaran (bank, e-wallet)</li>
                        <li>Layanan verifikasi identitas</li>
                        <li>Penyedia layanan cloud dan hosting</li>
                        <li>Layanan analitik dan keamanan</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Kewajiban Hukum:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Permintaan dari otoritas penegak hukum</li>
                        <li>Kepatuhan terhadap perintah pengadilan</li>
                        <li>Investigasi aktivitas ilegal atau penipuan</li>
                        <li>Perlindungan hak dan keselamatan publik</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-orange-800 dark:text-orange-200 font-medium">
                      ⚠️ Semua pihak ketiga yang bekerja sama dengan kami wajib mematuhi standar perlindungan data yang ketat.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Lock className="mr-2 h-4 w-4 text-red-600" />
                    Keamanan Data
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Kami menerapkan berbagai langkah keamanan teknis dan organisasi untuk melindungi data Anda.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Keamanan Teknis:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Enkripsi data end-to-end untuk komunikasi sensitif</li>
                        <li>Penyimpanan data terenkripsi dengan standar AES-256</li>
                        <li>Autentikasi dua faktor (2FA) untuk akun pengguna</li>
                        <li>Monitoring keamanan 24/7 dan deteksi intrusi</li>
                        <li>Backup data reguler dengan enkripsi</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Keamanan Organisasi:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Akses data terbatas berdasarkan prinsip need-to-know</li>
                        <li>Pelatihan keamanan reguler untuk karyawan</li>
                        <li>Audit keamanan internal dan eksternal berkala</li>
                        <li>Kebijakan keamanan informasi yang ketat</li>
                        <li>Incident response plan untuk pelanggaran data</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      🚨 Jika terjadi pelanggaran data, kami akan memberitahu Anda dalam waktu 72 jam.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rights">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <UserCheck className="mr-2 h-4 w-4 text-purple-600" />
                    Hak Pengguna
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Anda memiliki berbagai hak terkait data pribadi yang kami simpan dan proses.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Hak Akses dan Kontrol:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                        <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                        <li>Menghapus akun dan data pribadi (right to be forgotten)</li>
                        <li>Membatasi pemrosesan data untuk tujuan tertentu</li>
                        <li>Memindahkan data ke layanan lain (data portability)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Hak Informasi:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Mengetahui data apa saja yang kami kumpulkan</li>
                        <li>Memahami tujuan pemrosesan data</li>
                        <li>Mengetahui pihak ketiga yang menerima data</li>
                        <li>Mendapatkan salinan data dalam format yang dapat dibaca</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-purple-800 dark:text-purple-200 font-medium">
                      📧 Untuk menggunakan hak-hak ini, hubungi tim privacy kami di privacy@rekber.com
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="retention">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Database className="mr-2 h-4 w-4 text-yellow-600" />
                    Penyimpanan Data
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Kami menyimpan data pribadi hanya selama diperlukan untuk tujuan yang sah dan sesuai dengan hukum yang berlaku.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Periode Penyimpanan:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Data akun aktif: Selama akun masih digunakan</li>
                        <li>Riwayat transaksi: 7 tahun untuk keperluan audit</li>
                        <li>Data komunikasi: 3 tahun untuk penyelesaian sengketa</li>
                        <li>Log keamanan: 1 tahun untuk investigasi</li>
                        <li>Data marketing: Hingga Anda mencabut persetujuan</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Penghapusan Data:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Penghapusan otomatis setelah periode retensi berakhir</li>
                        <li>Penghapusan aman dengan metode yang tidak dapat dipulihkan</li>
                        <li>Sertifikat penghapusan untuk data sensitif</li>
                        <li>Backup data juga akan dihapus sesuai jadwal</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Eye className="mr-2 h-4 w-4 text-blue-600" />
                    Perubahan Kebijakan
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam layanan atau hukum yang berlaku.
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pemberitahuan perubahan melalui email dan notifikasi aplikasi</li>
                    <li>Periode transisi 30 hari untuk perubahan material</li>
                    <li>Riwayat versi kebijakan tersedia untuk referensi</li>
                    <li>Hak untuk menolak perubahan dengan menutup akun</li>
                  </ul>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">
                      📅 Selalu periksa tanggal "Terakhir diperbarui" di bagian atas halaman ini.
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
                Pertanyaan tentang privasi data Anda?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Tim privacy kami siap membantu menjawab pertanyaan dan menangani permintaan terkait data pribadi.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
                    Hubungi Tim Privacy
                  </Button>
                </Link>
                <Button variant="outline" className="border-neutral-300 dark:border-neutral-600">
                  Download Data Saya
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}