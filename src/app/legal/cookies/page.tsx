'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Cookie, Settings, Eye, BarChart3, Shield, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { ShineBorder } from '@/components/magicui/shine-border'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'

export default function CookiesPage() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always enabled
    analytics: true,
    marketing: false,
    preferences: true
  })

  const handleCookieToggle = (type: keyof typeof cookieSettings) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const saveSettings = () => {
    // Here you would typically save to localStorage or send to server
    console.log('Cookie settings saved:', cookieSettings)
    alert('Pengaturan cookie telah disimpan!')
  }

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
                <Cookie className="h-12 w-12 text-orange-600 dark:text-orange-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                Kebijakan Cookie
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
                Informasi lengkap tentang penggunaan cookie dan teknologi pelacakan di platform rekber kami.
              </p>
              <Badge variant="secondary" className="mt-4">
                Terakhir diperbarui: 1 Januari 2024
              </Badge>
            </div>
          </ShineBorder>
        </div>

        {/* Cookie Settings Panel */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-white flex items-center">
              <Settings className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Pengaturan Cookie
            </CardTitle>
            <p className="text-neutral-600 dark:text-neutral-300">
              Kelola preferensi cookie Anda. Beberapa cookie diperlukan untuk fungsi dasar situs.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Essential Cookies */}
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-800 dark:text-green-200">Cookie Esensial</h4>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Diperlukan untuk fungsi dasar situs seperti login, keamanan, dan navigasi. Tidak dapat dinonaktifkan.
                </p>
              </div>
              <Switch checked={cookieSettings.essential} disabled className="ml-4" />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-neutral-900 dark:text-white">Cookie Analitik</h4>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Membantu kami memahami bagaimana pengunjung berinteraksi dengan situs untuk meningkatkan layanan.
                </p>
              </div>
              <Switch 
                checked={cookieSettings.analytics} 
                onCheckedChange={() => handleCookieToggle('analytics')}
                className="ml-4" 
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <Eye className="h-5 w-5 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-neutral-900 dark:text-white">Cookie Marketing</h4>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Digunakan untuk menampilkan iklan yang relevan dan mengukur efektivitas kampanye pemasaran.
                </p>
              </div>
              <Switch 
                checked={cookieSettings.marketing} 
                onCheckedChange={() => handleCookieToggle('marketing')}
                className="ml-4" 
              />
            </div>

            {/* Preferences Cookies */}
            <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <Settings className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-neutral-900 dark:text-white">Cookie Preferensi</h4>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Menyimpan pilihan Anda seperti bahasa, tema, dan pengaturan tampilan lainnya.
                </p>
              </div>
              <Switch 
                checked={cookieSettings.preferences} 
                onCheckedChange={() => handleCookieToggle('preferences')}
                className="ml-4" 
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={saveSettings} className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
                Simpan Pengaturan
              </Button>
              <Button variant="outline" onClick={() => setCookieSettings({ essential: true, analytics: false, marketing: false, preferences: false })}>
                Tolak Semua (Kecuali Esensial)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Information */}
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-white flex items-center">
              <Cookie className="mr-3 h-6 w-6 text-orange-600 dark:text-orange-400" />
              Informasi Cookie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="what-are-cookies">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Cookie className="mr-2 h-4 w-4 text-orange-600" />
                    Apa itu Cookie?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Cookie adalah file teks kecil yang disimpan di perangkat Anda ketika mengunjungi situs web. 
                    Cookie membantu situs web mengingat informasi tentang kunjungan Anda, seperti preferensi dan pengaturan.
                  </p>
                  <p>
                    Cookie tidak dapat mengakses file lain di komputer Anda atau menyebabkan kerusakan. Mereka hanya 
                    menyimpan informasi yang Anda berikan atau tindakan yang Anda lakukan di situs web.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-orange-800 dark:text-orange-200 font-medium">
                      🍪 Cookie membantu memberikan pengalaman yang lebih personal dan efisien saat menggunakan layanan kami.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="types-of-cookies">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Settings className="mr-2 h-4 w-4 text-blue-600" />
                    Jenis Cookie yang Kami Gunakan
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Cookie Esensial
                      </h4>
                      <p className="mb-2">
                        Cookie yang diperlukan untuk fungsi dasar situs web dan tidak dapat dinonaktifkan.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Session ID untuk menjaga login Anda</li>
                        <li>Token keamanan untuk mencegah serangan CSRF</li>
                        <li>Preferensi bahasa dan wilayah</li>
                        <li>Status persetujuan cookie</li>
                        <li>Data keranjang belanja sementara</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center">
                        <BarChart3 className="h-4 w-4 text-blue-600 mr-2" />
                        Cookie Analitik
                      </h4>
                      <p className="mb-2">
                        Cookie yang membantu kami memahami bagaimana pengunjung berinteraksi dengan situs.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Google Analytics untuk statistik pengunjung</li>
                        <li>Hotjar untuk analisis perilaku pengguna</li>
                        <li>Tracking halaman yang paling sering dikunjungi</li>
                        <li>Waktu yang dihabiskan di setiap halaman</li>
                        <li>Sumber traffic dan referral</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center">
                        <Eye className="h-4 w-4 text-purple-600 mr-2" />
                        Cookie Marketing
                      </h4>
                      <p className="mb-2">
                        Cookie yang digunakan untuk menampilkan iklan yang relevan dan personal.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Facebook Pixel untuk retargeting</li>
                        <li>Google Ads untuk kampanye pemasaran</li>
                        <li>Tracking konversi dan ROI iklan</li>
                        <li>Personalisasi konten berdasarkan minat</li>
                        <li>A/B testing untuk optimasi</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center">
                        <Settings className="h-4 w-4 text-green-600 mr-2" />
                        Cookie Preferensi
                      </h4>
                      <p className="mb-2">
                        Cookie yang menyimpan pilihan dan pengaturan personal Anda.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Tema tampilan (terang/gelap)</li>
                        <li>Ukuran font dan layout preferensi</li>
                        <li>Pengaturan notifikasi</li>
                        <li>Filter dan sorting yang tersimpan</li>
                        <li>Riwayat pencarian dan bookmark</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="third-party-cookies">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4 text-red-600" />
                    Cookie Pihak Ketiga
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Beberapa cookie di situs kami ditempatkan oleh layanan pihak ketiga yang kami gunakan untuk 
                    meningkatkan fungsionalitas dan menganalisis penggunaan situs.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Layanan Analitik:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Google Analytics:</strong> Menganalisis traffic dan perilaku pengguna</li>
                        <li><strong>Hotjar:</strong> Heatmap dan session recording untuk UX</li>
                        <li><strong>Mixpanel:</strong> Event tracking dan funnel analysis</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Layanan Marketing:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Facebook Pixel:</strong> Retargeting dan konversi tracking</li>
                        <li><strong>Google Ads:</strong> Kampanye iklan dan remarketing</li>
                        <li><strong>LinkedIn Insight:</strong> B2B marketing dan lead generation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Layanan Komunikasi:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Intercom:</strong> Live chat dan customer support</li>
                        <li><strong>Zendesk:</strong> Sistem tiket dan help desk</li>
                        <li><strong>Mailchimp:</strong> Email marketing dan newsletter</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      ⚠️ Cookie pihak ketiga tunduk pada kebijakan privasi masing-masing penyedia layanan.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="manage-cookies">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Settings className="mr-2 h-4 w-4 text-green-600" />
                    Mengelola Cookie
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-300 space-y-4">
                  <p>
                    Anda memiliki kontrol penuh atas cookie yang disimpan di perangkat Anda. Berikut cara mengelolanya:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Melalui Situs Web:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Gunakan panel pengaturan cookie di atas halaman ini</li>
                        <li>Pilih jenis cookie yang ingin Anda aktifkan atau nonaktifkan</li>
                        <li>Simpan pengaturan untuk menerapkan perubahan</li>
                        <li>Pengaturan akan tersimpan untuk kunjungan berikutnya</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Melalui Browser:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Chrome:</strong> Settings {'>'}  Privacy and Security {'>'}  Cookies</li>
                        <li><strong>Firefox:</strong> Options {'>'}  Privacy & Security {'>'}  Cookies</li>
                        <li><strong>Safari:</strong> Preferences {'>'}  Privacy {'>'}  Cookies</li>
                        <li><strong>Edge:</strong> Settings {'>'}  Cookies and site permissions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Opt-out Layanan Pihak Ketiga:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Browser Add-on</a></li>
                        <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ad Preferences</a></li>
                        <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                      ⚠️ Menonaktifkan cookie tertentu dapat mempengaruhi fungsionalitas situs web.
                    </p>
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
                    Kami dapat memperbarui kebijakan cookie ini dari waktu ke waktu untuk mencerminkan perubahan 
                    dalam teknologi, hukum, atau praktik bisnis kami.
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pemberitahuan perubahan melalui banner cookie atau email</li>
                    <li>Periode transisi untuk menyesuaikan pengaturan</li>
                    <li>Riwayat versi kebijakan tersedia untuk referensi</li>
                    <li>Hak untuk mengubah persetujuan kapan saja</li>
                  </ul>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">
                      📅 Periksa tanggal "Terakhir diperbarui" untuk mengetahui versi terbaru.
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
                Butuh bantuan dengan pengaturan cookie?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Tim support kami siap membantu Anda mengelola preferensi cookie dan menjawab pertanyaan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                    Hubungi Support
                  </Button>
                </Link>
                <Button variant="outline" className="border-neutral-300 dark:border-neutral-600">
                  Reset Semua Cookie
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}