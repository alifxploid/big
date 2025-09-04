'use client'

import { Globe } from '@/components/magicui/globe'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { TextAnimate } from '@/components/magicui/text-animate'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center top-32">
        <Globe className="opacity-40 scale-110" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="word"
              delay={0.2}
            >
              Platform
            </TextAnimate>
            <TextAnimate
              as="span"
              className="text-blue-600"
              animation="blurInUp"
              by="word"
              delay={0.4}
            >
              {" All-in-One "}
            </TextAnimate>
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="word"
              delay={0.6}
            >
              untuk Bisnis Digital
            </TextAnimate>
           </h1>
          
          <BoxReveal boxColor="#3b82f6" duration={0.8}>
            <TypingAnimation
              as="p"
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl max-w-3xl mx-auto"
              duration={50}
              delay={1000}
              startOnView={true}
            >
              Solusi lengkap untuk rekening bersama, social media marketing, dan PPOB. Tingkatkan bisnis Anda dengan platform yang aman, cepat, dan terpercaya.
            </TypingAnimation>
          </BoxReveal>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Mulai Sekarang
              </span>
            </ShimmerButton>
            
            <ShinyButton
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors lg:text-base border-gray-200 bg-white/80"
            >
              Pelajari Lebih Lanjut <ArrowRight className="inline h-4 w-4 ml-1" />
            </ShinyButton>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900">100% Aman</dt>
              <dd className="mt-2 text-sm text-gray-600">Transaksi terlindungi</dd>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900">Instan</dt>
              <dd className="mt-2 text-sm text-gray-600">Proses cepat 24/7</dd>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <Users className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900">10K+ User</dt>
              <dd className="mt-2 text-sm text-gray-600">Dipercaya banyak orang</dd>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
    </section>
  )
}