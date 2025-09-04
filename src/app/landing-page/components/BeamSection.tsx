'use client'

import { useRef, forwardRef } from 'react'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { Shield, TrendingUp, Smartphone, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const Circle = forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300',
        className,
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = 'Circle'

const FeatureIcon = forwardRef<HTMLDivElement, { 
  icon: React.ReactNode; 
  label: string; 
  description: string;
  className?: string;
  iconColor?: string;
}>(({ icon, label, description, className, iconColor }, ref) => {
  return (
    <div className={cn('flex flex-col items-center text-center space-y-2', className)}>
      <Circle ref={ref} className={cn('border-2', iconColor)}>
        {icon}
      </Circle>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-600 max-w-20">{description}</p>
      </div>
    </div>
  )
})

FeatureIcon.displayName = 'FeatureIcon'

export default function BeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ekosistem Terintegrasi
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Semua layanan terhubung dalam satu platform yang powerful dan mudah digunakan
          </p>
        </div>
        
        <div className="relative">
          <div
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl border bg-white p-10 md:shadow-xl"
            ref={containerRef}
          >
            {/* Grid 3 baris: atas, tengah (pusat), bawah */}
            <div className="flex h-full w-full flex-col items-stretch justify-between">
              {/* Atas */}
              <div className="flex flex-row items-start justify-between">
                <FeatureIcon
                  ref={div1Ref}
                  icon={<Shield className="h-7 w-7 text-blue-600" />}
                  label="Rekber"
                  description="Aman & terpercaya"
                  iconColor="border-blue-500"
                  className="ml-2"
                />
                <FeatureIcon
                  ref={div2Ref}
                  icon={<TrendingUp className="h-7 w-7 text-green-600" />}
                  label="SMM Panel"
                  description="Boost engagement"
                  iconColor="border-green-500"
                  className="mr-2"
                />
              </div>

              {/* Tengah */}
              <div className="flex flex-row items-center justify-center">
                <FeatureIcon
                  ref={div4Ref}
                  icon={<Zap className="h-8 w-8 text-orange-600" />}
                  label="AllInOne"
                  description="Platform terpadu"
                  iconColor="border-orange-500"
                />
              </div>

              {/* Bawah */}
              <div className="flex flex-row items-end justify-between">
                <FeatureIcon
                  ref={div3Ref}
                  icon={<Smartphone className="h-7 w-7 text-purple-600" />}
                  label="PPOB"
                  description="Bayar tagihan"
                  iconColor="border-purple-500"
                  className="ml-2"
                />
                <div className="w-16" />
              </div>
            </div>

            {/* Beams di belakang */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-90}
              endYOffset={-8}
              duration={9}
              pathOpacity={0.35}
              pathWidth={2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
              curvature={90}
              endYOffset={-8}
              reverse
              duration={8}
              pathOpacity={0.3}
              pathWidth={2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={-90}
              endYOffset={10}
              duration={11}
              pathOpacity={0.35}
              pathWidth={2}
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Sinkronisasi Real-time</h4>
            <p className="text-sm text-gray-600">
              Semua transaksi dan aktivitas tersinkronisasi secara real-time di seluruh platform
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Dashboard Terpadu</h4>
            <p className="text-sm text-gray-600">
              Kelola semua layanan dari satu dashboard yang intuitif dan mudah digunakan
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">API Integration</h4>
            <p className="text-sm text-gray-600">
              Integrasi mudah dengan sistem existing melalui API yang powerful dan dokumentasi lengkap
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}