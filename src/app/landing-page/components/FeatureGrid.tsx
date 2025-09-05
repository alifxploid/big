'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Shield, TrendingUp, Smartphone, ArrowRight, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Rekening Bersama (Rekber)',
    description: 'Sistem escrow yang aman untuk transaksi online Anda',
    badge: 'Paling Populer',
    badgeVariant: 'default' as const,
    features: [
      'Rekber Inside - Transaksi dalam platform',
      'Rekber Outside - Transaksi eksternal (Facebook, dll)',
      'Verifikasi otomatis dan manual',
      'Dispute resolution 24/7',
      'Fee kompetitif mulai 1%'
    ],
    cta: 'Mulai Rekber'
  },
  {
    icon: TrendingUp,
    title: 'Social Media Marketing',
    description: 'Tingkatkan engagement media sosial dengan layanan SMM terlengkap',
    badge: 'Trending',
    badgeVariant: 'secondary' as const,
    features: [
      'Instagram Followers & Likes',
      'YouTube Views & Subscribers',
      'TikTok Followers & Views',
      'Facebook Page Likes',
      'Twitter/X Followers & Retweets'
    ],
    cta: 'Lihat Paket SMM'
  },
  {
    icon: Smartphone,
    title: 'Pulsa & PPOB',
    description: 'Layanan pembayaran dan top-up terlengkap untuk kebutuhan sehari-hari',
    badge: 'Hemat',
    badgeVariant: 'outline' as const,
    features: [
      'Pulsa semua operator',
      'Paket data internet',
      'Token listrik PLN',
      'BPJS & Asuransi',
      'Tagihan TV & Internet'
    ],
    cta: 'Top Up Sekarang'
  }
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Tiga Layanan Utama
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Platform all-in-one yang menggabungkan keamanan rekber, kekuatan SMM, dan kemudahan PPOB
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-900">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white">
                      <IconComponent className="h-6 w-6 text-white dark:text-black" />
                    </div>
                    <Badge variant={feature.badgeVariant}>{feature.badge}</Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-white mt-4">
                    {feature.title}
                  </CardTitle>
                  
                  <CardDescription className="text-neutral-600 dark:text-neutral-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <ShimmerButton className="w-full">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                      {feature.cta}
                    </span>
                  </ShimmerButton>
                </CardContent>
                
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neutral-50 dark:from-neutral-800/20 to-transparent opacity-50" />
              </Card>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Semua layanan terintegrasi dalam satu platform yang mudah digunakan
          </p>
          <a
            href="#how-it-works"
            className="inline-flex items-center text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 font-medium transition-colors"
          >
            Pelajari cara kerjanya
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}