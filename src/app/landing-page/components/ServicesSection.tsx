'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { 
  Code, 
  Users, 
  CreditCard, 
  Facebook, 
  Instagram, 
  X, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Code,
    title: 'API Tools',
    description: 'Akses API lengkap untuk integrasi sistem dan automasi bisnis',
    badge: 'Developer',
    badgeVariant: 'secondary' as const,
    features: [
      'REST API Documentation',
      'Webhook Integration',
      'Rate Limiting & Security',
      'Real-time Monitoring',
      'SDK untuk berbagai bahasa'
    ],
    cta: 'Akses API'
  },
  {
    icon: Users,
    title: 'Sewa SMM Panel',
    description: 'Solusi white-label SMM panel untuk reseller dan agency',
    badge: 'Business',
    badgeVariant: 'default' as const,
    features: [
      'Custom branding & domain',
      'Multi-user management',
      'Automated order processing',
      'Profit margin control',
      'Analytics & reporting'
    ],
    cta: 'Sewa Panel'
  },
  {
    icon: CreditCard,
    title: 'PPOB Extended',
    description: 'Layanan pembayaran lengkap untuk semua kebutuhan digital',
    badge: 'Complete',
    badgeVariant: 'outline' as const,
    features: [
      'E-wallet top-up (OVO, DANA, dll)',
      'Game voucher & diamond',
      'Streaming subscription',
      'Digital gift cards',
      'Cryptocurrency exchange'
    ],
    cta: 'Lihat Semua'
  }
]

const socialTools = [
  {
    icon: Facebook,
    title: 'Facebook Tools',
    description: 'Tools lengkap untuk optimasi Facebook marketing',
    color: 'bg-blue-500',
    features: ['Page Analytics', 'Post Scheduler', 'Audience Insights', 'Ad Manager']
  },
  {
    icon: Instagram,
    title: 'Instagram Tools', 
    description: 'Tingkatkan performa Instagram dengan tools profesional',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    features: ['Story Analytics', 'Hashtag Research', 'Competitor Analysis', 'Growth Tracking']
  },
  {
    icon: X,
    title: 'Twitter/X Tools',
    description: 'Manajemen Twitter yang efektif untuk brand awareness',
    color: 'bg-black dark:bg-white',
    features: ['Tweet Scheduler', 'Trend Analysis', 'Engagement Metrics', 'Follower Growth']
  },
  {
    icon: 'threads',
    title: 'Threads Tools',
    description: 'Tools terdepan untuk platform Threads by Meta',
    color: 'bg-black dark:bg-white',
    features: ['Content Planning', 'Engagement Tracking', 'Cross-posting', 'Analytics Dashboard']
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Services */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Layanan Tambahan
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Ekspansi bisnis digital Anda dengan tools dan layanan profesional
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white">
                      <IconComponent className="h-6 w-6 text-white dark:text-black" />
                    </div>
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-white mt-4">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-neutral-600 dark:text-neutral-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <ShimmerButton className="w-full">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                      {service.cta}
                    </span>
                  </ShimmerButton>
                </CardContent>
                
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neutral-50 dark:from-neutral-700/20 to-transparent opacity-50" />
              </Card>
            )
          })}
        </div>

        {/* Social Media Tools */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            Social Media Tools
          </h3>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Tools profesional untuk mengelola semua platform media sosial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialTools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-800">
                <CardHeader className="pb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${tool.color}`}>
                    {tool.icon === 'threads' ? (
                      <Image
                        src="/Threads_(app)_logo.svg.png"
                        alt="Threads logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 filter brightness-0 invert dark:brightness-100 dark:invert-0"
                      />
                    ) : (
                      <IconComponent className={`h-6 w-6 ${tool.title === 'Twitter/X Tools' ? 'text-white dark:text-black' : 'text-white'}`} />
                    )}
                  </div>
                  
                  <CardTitle className="text-lg font-semibold text-neutral-900 dark:text-white mt-4">
                    {tool.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-neutral-600 dark:text-neutral-300">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-neutral-400 rounded-full mr-2 flex-shrink-0" />
                        <span className="text-xs text-neutral-600 dark:text-neutral-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full text-xs font-medium text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors flex items-center justify-center">
                    Lihat Tools
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}