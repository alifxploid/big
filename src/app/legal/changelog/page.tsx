'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ChangelogTimeline from '@/components/magicui/changelog-timeline'
import { ShineBorder } from '@/components/magicui/shine-border'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'

const changelogData = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    type: 'major' as const,
    title: 'Fitur Rekber Outside & Peningkatan Keamanan',
    description: 'Peluncuran fitur rekber untuk transaksi di luar platform dengan sistem keamanan berlapis.',
    changes: [
      'Fitur Rekber Outside untuk transaksi eksternal',
      'Sistem verifikasi identitas berlapis',
      'Notifikasi real-time untuk semua transaksi',
      'Dashboard analytics yang lebih komprehensif',
      'API rate limiting untuk keamanan'
    ]
  },
  {
    version: '2.0.5',
    date: '2024-01-08',
    type: 'patch' as const,
    title: 'Perbaikan Bug & Optimasi Performa',
    description: 'Perbaikan berbagai bug dan peningkatan performa aplikasi.',
    changes: [
      'Perbaikan bug pada sistem notifikasi',
      'Optimasi loading time halaman dashboard',
      'Perbaikan responsive design pada mobile',
      'Update library keamanan'
    ]
  },
  {
    version: '2.0.0',
    date: '2024-01-01',
    type: 'major' as const,
    title: 'Redesign UI/UX & Fitur Baru',
    description: 'Pembaruan besar-besaran dengan desain baru dan fitur-fitur canggih.',
    changes: [
      'Redesign complete UI/UX dengan tema modern',
      'Sistem multi-currency support',
      'Fitur escrow otomatis',
      'Integration dengan payment gateway lokal',
      'Mobile app companion'
    ]
  },
  {
    version: '1.5.2',
    date: '2023-12-20',
    type: 'minor' as const,
    title: 'Peningkatan Sistem Keamanan',
    description: 'Penambahan fitur keamanan dan perbaikan sistem existing.',
    changes: [
      'Two-factor authentication (2FA)',
      'Sistem backup otomatis',
      'Enkripsi end-to-end untuk chat',
      'Audit log untuk admin'
    ]
  },
  {
    version: '1.5.0',
    date: '2023-12-10',
    type: 'minor' as const,
    title: 'Fitur Chat & Komunikasi',
    description: 'Penambahan sistem komunikasi real-time antara buyer dan seller.',
    changes: [
      'Real-time chat system',
      'File sharing dalam chat',
      'Sistem rating dan review',
      'Notifikasi push'
    ]
  }
]

export default function ChangelogPage() {
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
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
                Changelog
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
                Ikuti perkembangan terbaru dari platform rekber kami. Setiap update dirancang untuk memberikan pengalaman yang lebih baik.
              </p>
            </div>
          </ShineBorder>
        </div>

        {/* Changelog Timeline */}
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Riwayat Perubahan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChangelogTimeline />
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card className="mt-8 border-0 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Ada saran atau feedback?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Kami selalu terbuka untuk mendengar masukan dari pengguna untuk terus meningkatkan layanan.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Kirim Feedback
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}