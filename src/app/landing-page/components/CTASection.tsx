'use client'

import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Users, Shield, Zap, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Transaksi Berhasil', value: '50K+', icon: TrendingUp },
  { label: 'User Aktif', value: '10K+', icon: Users },
  { label: 'Rating Kepuasan', value: '4.9/5', icon: Star },
  { label: 'Uptime System', value: '99.9%', icon: Zap },
]

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative z-10">
          {/* Main CTA Content */}
          <div className="text-center">
            <Badge variant="outline" className="mb-8 bg-gradient-to-r from-gray-900 to-gray-700 text-white border-gray-300 px-4 py-2">
              Platform Terpercaya #1 di Indonesia
            </Badge>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Siap Memulai Bisnis
              <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Digital Anda?
              </span>
            </h2>
            
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Bergabunglah dengan ribuan pengguna yang sudah merasakan kemudahan dan keamanan 
              platform all-in-one kami. Mulai gratis hari ini!
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <ShimmerButton className="shadow-xl bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 px-8 py-4">
                <span className="whitespace-pre-wrap text-center text-lg font-semibold leading-none tracking-tight">
                  Daftar Gratis Sekarang
                </span>
              </ShimmerButton>
              
              <a
                href="#features"
                className="inline-flex items-center text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors group"
              >
                Lihat Demo Live
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <p className="mt-8 text-sm text-gray-500">
              Gratis untuk memulai • Tanpa biaya setup • Support 24/7
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="mt-24">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
          
          {/* Partner Section */}
          <div className="mt-20 text-center">
            <TextAnimate 
              animation="blurInUp" 
              by="word" 
              className="text-6xl md:text-8xl font-creepster text-gray-900 tracking-wider"
              duration={0.5}
              delay={0.2}
            >
              PARTNER
            </TextAnimate>
            <TextAnimate 
              animation="fadeIn" 
              by="character" 
              className="text-2xl md:text-3xl font-creepster text-gray-600 mt-4 tracking-wide"
              duration={0.3}
              delay={1}
            >
              Coming Soon
            </TextAnimate>
          </div>
          
          {/* Security Badge */}
          <div className="mt-16 flex justify-center">
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-gray-900">
                  <p className="text-sm font-semibold">100% Aman & Terenkripsi</p>
                  <p className="text-xs text-gray-600">Sertifikat SSL & Compliance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-200/30 to-gray-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-100/20 to-gray-200/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}