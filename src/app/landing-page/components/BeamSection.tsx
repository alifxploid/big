'use client'

import { useRef, forwardRef } from 'react'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { ShineBorder } from '@/components/magicui/shine-border'
import { Shield, TrendingUp, Smartphone, Zap, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

const Circle = forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode; glowColor?: string[] }>(({ className, children, glowColor }, ref) => {
  return (
    <ShineBorder
      className="rounded-full"
      shineColor={glowColor || ['#3b82f6', '#1d4ed8']}
      borderWidth={2}
      duration={6}
    >
      <div
        ref={ref}
        className={cn(
          'z-10 flex h-16 w-16 items-center justify-center rounded-full border-0 bg-white dark:bg-neutral-800 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300',
          className,
        )}
      >
        {children}
      </div>
    </ShineBorder>
  )
})

Circle.displayName = 'Circle'

const FeatureIcon = forwardRef<HTMLDivElement, { 
  icon: React.ReactNode; 
  label: string; 
  description: string;
  className?: string;
  glowColor?: string[];
}>(({ icon, label, description, className, glowColor }, ref) => {
  return (
    <div className={cn('flex flex-col items-center text-center space-y-2', className)}>
      <Circle ref={ref} glowColor={glowColor}>
        {icon}
      </Circle>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
        <p className="text-xs text-gray-600 dark:text-gray-300 max-w-20">{description}</p>
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
  const div5Ref = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ekosistem Terintegrasi
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Semua layanan terhubung dalam satu platform yang powerful dan mudah digunakan
          </p>
        </div>
        
        <div className="relative">
          <div
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-10 md:shadow-xl"
            ref={containerRef}
          >
            {/* Grid 3 baris: atas, tengah (pusat), bawah */}
            <div className="flex h-full w-full flex-col items-stretch justify-between">
              {/* Atas */}
              <div className="flex flex-row items-start justify-between">
                <FeatureIcon
                  ref={div1Ref}
                  icon={<Shield className="h-7 w-7 text-black dark:text-white" />}
                  label="Rekber"
                  description="Aman & terpercaya"
                  glowColor={['#000000', '#374151']}
                  className="ml-2"
                />
                <FeatureIcon
                  ref={div2Ref}
                  icon={<TrendingUp className="h-7 w-7 text-green-600" />}
                  label="SMM Panel"
                  description="Boost engagement"
                  glowColor={['#10b981', '#059669']}
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
                  glowColor={['#f97316', '#ea580c']}
                />
              </div>

              {/* Bawah */}
              <div className="flex flex-row items-end justify-between">
                <FeatureIcon
                  ref={div3Ref}
                  icon={<Smartphone className="h-7 w-7 text-purple-600" />}
                  label="PPOB"
                  description="Bayar tagihan"
                  glowColor={['#8b5cf6', '#7c3aed']}
                  className="ml-2"
                />
                <FeatureIcon
                  ref={div5Ref}
                  icon={<MoreHorizontal className="h-7 w-7 text-purple-600" />}
                  label="Fitur Lainnya"
                  description="Layanan tambahan"
                  glowColor={['#8b5cf6', '#7c3aed']}
                  className="mr-2"
                />
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
              glowingBorder={true}
              glowProximity={150}
              glowSpread={30}
              glowBorderWidth={3}
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
              glowingBorder={true}
              glowProximity={150}
              glowSpread={25}
              glowBorderWidth={3}
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
              glowingBorder={true}
              glowProximity={150}
              glowSpread={28}
              glowBorderWidth={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              curvature={90}
              endYOffset={10}
              reverse
              duration={10}
              pathOpacity={0.3}
              pathWidth={2}
              glowingBorder={true}
              glowProximity={150}
              glowSpread={32}
              glowBorderWidth={3}
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sinkronisasi Real-time</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Semua transaksi dan aktivitas tersinkronisasi secara real-time di seluruh platform
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dashboard Terpadu</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Kelola semua layanan dari satu dashboard yang intuitif dan mudah digunakan
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">API Integration</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Integrasi mudah dengan sistem existing melalui API yang powerful dan dokumentasi lengkap
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}