'use client'

import Link from 'next/link'
import ChangelogTimeline from '@/components/magicui/changelog-timeline'
import { Calendar, History, ArrowLeft } from 'lucide-react'

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <div className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/landing-page"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-black dark:bg-white rounded-full">
                <History className="h-6 w-6 text-white dark:text-black" />
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
                Changelog
              </h1>
            </div>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Ikuti perkembangan terbaru AllInOne Platform. Lihat semua fitur baru, 
              perbaikan bug, dan peningkatan yang kami lakukan untuk memberikan 
              pengalaman terbaik bagi Anda.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-neutral-500 dark:text-neutral-400">
              <Calendar className="h-4 w-4" />
              <span>Diperbarui secara berkala</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                Riwayat Perubahan
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Semua update dan perubahan diurutkan dari yang terbaru
              </p>
            </div>
            
            <div className="hidden sm:flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Fitur Baru</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span>Peningkatan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span>Perbaikan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span>Breaking</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <ChangelogTimeline />
      </div>
      
      {/* Footer CTA */}
      <div className="bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Ada Saran atau Feedback?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              Kami selalu terbuka untuk mendengar masukan dari Anda. 
              Bantu kami mengembangkan platform yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
              >
                Kirim Feedback
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-base font-medium rounded-md text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
              >
                Request Fitur
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}