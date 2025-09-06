'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { HelpCircle, MessageCircle, ArrowRight } from 'lucide-react'

const faqData = [
  {
    id: 'rekber-basics',
    question: 'Apa itu rekber dan bagaimana cara kerjanya?',
    answer: 'Rekber (Rekening Bersama) adalah layanan escrow yang mengamankan transaksi online. Dana buyer ditahan sistem sampai barang/jasa diterima dengan baik, baru kemudian diteruskan ke seller. Ini melindungi kedua belah pihak dari penipuan.'
  },
  {
    id: 'rekber-types',
    question: 'Apa perbedaan antara Rekber Inside dan Rekber Outside?',
    answer: 'Rekber Inside untuk transaksi dalam platform kami dengan marketplace internal. Rekber Outside untuk transaksi dari platform lain (Facebook, Instagram, dll) yang memerlukan verifikasi manual dan upload bukti chat/kesepakatan.'
  },
  {
    id: 'smm-services',
    question: 'Layanan SMM apa saja yang tersedia?',
    answer: 'Kami menyediakan layanan SMM lengkap untuk Instagram (followers, likes, views), YouTube (subscribers, views), TikTok (followers, likes), Facebook (page likes), Twitter/X (followers, retweets), dan platform media sosial lainnya dengan kualitas terjamin.'
  },
  {
    id: 'ppob-services',
    question: 'Bagaimana cara menggunakan layanan PPOB?',
    answer: 'Layanan PPOB kami mencakup pulsa semua operator, token listrik, PDAM, internet, TV kabel, e-wallet top-up (OVO, DANA, GoPay), game voucher, dan streaming subscription. Proses otomatis dan instan 24/7.'
  },
  {
    id: 'payment-methods',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima berbagai metode pembayaran: E-wallet (OVO, DANA, GoPay, LinkAja, ShopeePay), Bank Transfer (BCA, Mandiri, BNI, BRI), Virtual Account, dan Cryptocurrency (Bitcoin, Ethereum, USDT). Semua dengan konfirmasi real-time.'
  },
  {
    id: 'security',
    question: 'Apakah transaksi di platform ini aman?',
    answer: 'Ya, sangat aman. Kami menggunakan enkripsi SSL 256-bit, sertifikasi PCI DSS, sistem escrow teregulasi, dan monitoring 24/7. Dana customer diasuransikan dan sistem kami telah diaudit keamanan secara berkala.'
  },
  {
    id: 'api-access',
    question: 'Bagaimana cara mengakses dan menggunakan API?',
    answer: 'API kami tersedia untuk developer dan bisnis. Daftar akun, verifikasi identitas, dapatkan API key, dan akses dokumentasi lengkap. Tersedia SDK untuk berbagai bahasa pemrograman dengan rate limiting yang fair.'
  },
  {
    id: 'pricing',
    question: 'Berapa biaya layanan yang dikenakan?',
    answer: 'Fee rekber mulai 1% per transaksi, SMM panel dengan harga kompetitif sesuai paket, PPOB dengan margin tipis untuk harga terbaik. Tidak ada biaya tersembunyi, semua transparan di dashboard.'
  },
  {
    id: 'dispute',
    question: 'Bagaimana mengatasi dispute atau masalah transaksi?',
    answer: 'Tim dispute resolution kami siap 24/7. Laporkan masalah melalui dashboard, sertakan bukti lengkap, tim akan investigasi dalam 1x24 jam. Proses fair dengan mediasi profesional untuk solusi win-win.'
  },
  {
    id: 'support',
    question: 'Jam operasional customer service dan cara menghubungi?',
    answer: 'Customer service 24/7 melalui live chat di dashboard, WhatsApp, email support@allinone.com. Response time rata-rata 5 menit untuk chat, 1 jam untuk email. Tim teknis tersedia untuk masalah urgent.'
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary mr-3" />
            <Badge variant="outline" className="text-sm font-medium">
              FAQ
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Temukan jawaban untuk pertanyaan umum tentang layanan dan platform kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-lg bg-white dark:bg-neutral-900">
            <CardContent className="p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border border-neutral-200 dark:border-neutral-700 rounded-lg px-6 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-neutral-900 dark:text-white hover:no-underline py-4">
                      <span className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold mt-0.5 shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-sm sm:text-base">{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600 dark:text-neutral-300 pb-4 pl-9">
                      <p className="text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Masih ada pertanyaan lain?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8">
              Tim customer service kami siap membantu Anda 24/7
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ShimmerButton className="px-6 py-3">
                <MessageCircle className="h-4 w-4 mr-2" />
                Hubungi Support
                <ArrowRight className="h-4 w-4 ml-2" />
              </ShimmerButton>
              <a 
                href="#contact" 
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Lihat Kontak Lengkap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}