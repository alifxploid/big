'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Marquee } from '@/components/magicui/marquee'
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  Wallet,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const paymentMethods = [
  {
    category: 'E-Wallet',
    icon: Smartphone,
    color: 'bg-blue-500',
    methods: ['OVO', 'DANA', 'GoPay', 'LinkAja', 'ShopeePay', 'Jenius Pay']
  },
  {
    category: 'Bank Transfer',
    icon: Building,
    color: 'bg-green-500', 
    methods: ['BCA', 'Mandiri', 'BNI', 'BRI', 'CIMB Niaga', 'Permata']
  },
  {
    category: 'Virtual Account',
    icon: CreditCard,
    color: 'bg-purple-500',
    methods: ['BCA VA', 'Mandiri VA', 'BNI VA', 'BRI VA', 'Permata VA']
  },
  {
    category: 'Cryptocurrency',
    icon: Wallet,
    color: 'bg-orange-500',
    methods: ['Bitcoin', 'Ethereum', 'USDT', 'Binance Coin', 'Dogecoin']
  }
]

const features = [
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Enkripsi SSL 256-bit dan sertifikasi PCI DSS'
  },
  {
    icon: Zap,
    title: 'Proses Instan',
    description: 'Konfirmasi pembayaran real-time dalam hitungan detik'
  },
  {
    icon: CheckCircle,
    title: 'Auto Verification',
    description: 'Sistem verifikasi otomatis untuk semua metode pembayaran'
  }
]

export default function PaymentGateway() {
  return (
    <section id="payment" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Payment Gateway
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Metode pembayaran lengkap dan aman untuk semua transaksi Anda
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {paymentMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-900">
                <CardHeader className="pb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${method.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <CardTitle className="text-lg font-semibold text-neutral-900 dark:text-white mt-4">
                    {method.category}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {method.methods.map((paymentMethod, methodIndex) => (
                      <div key={methodIndex} className="flex items-center justify-between p-2 rounded-md bg-neutral-50 dark:bg-neutral-800">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {paymentMethod}
                        </span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neutral-50 dark:from-neutral-800/20 to-transparent opacity-50" />
              </Card>
            )
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black dark:bg-white mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Siap Memulai Transaksi?
          </h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Bergabung dengan ribuan pengguna yang sudah mempercayai platform kami untuk transaksi aman dan cepat
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShimmerButton className="min-w-[200px]">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                Daftar Sekarang
              </span>
            </ShimmerButton>
            
            <button className="inline-flex items-center text-white hover:text-neutral-300 font-medium transition-colors">
              Lihat Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            Dipercaya oleh 50,000+ pengguna aktif
          </p>
          
          <div className="relative w-full">
            <Marquee className="[--duration:20s]" pauseOnHover={true}>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                PCI DSS Certified
              </Badge>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                SSL Secured
              </Badge>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                ISO 27001
              </Badge>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                Bank Grade Security
              </Badge>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                256-bit Encryption
              </Badge>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                GDPR Compliant
              </Badge>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                Real-time Monitoring
              </Badge>
              <Badge variant="outline" className="text-xs whitespace-nowrap mx-4">
                Fraud Protection
              </Badge>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}