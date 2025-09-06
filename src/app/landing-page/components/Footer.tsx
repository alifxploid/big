'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { footerNavigation, FooterSection, SocialMediaLinks, NewsletterSubscription } from '@/components/shared/footer'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="max-w-7xl mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8">
            <div>
              <Link href="#" className="text-2xl font-bold text-neutral-900 dark:text-white">
                AllInOne
              </Link>
              <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                Platform e-commerce all-in-one yang menggabungkan keamanan rekber, 
                kekuatan SMM, dan kemudahan PPOB dalam satu solusi terpadu.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-300">
                <Mail className="h-4 w-4" />
                <span>support@allinone.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-300">
                <Phone className="h-4 w-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-300">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            
            {/* Social Media */}
            <SocialMediaLinks />
          </div>
          
          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection title="Layanan" items={footerNavigation.layanan} />
              <div className="mt-10 md:mt-0">
                <FooterSection title="Perusahaan" items={footerNavigation.perusahaan} />
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterSection title="Dukungan" items={footerNavigation.dukungan} />
              <div className="mt-10 md:mt-0">
                <FooterSection title="Legal" items={footerNavigation.legal} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <NewsletterSubscription />
        
        {/* Bottom Bar */}
        <div className="mt-8 border-t border-neutral-200 dark:border-neutral-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
              Terdaftar dan diawasi oleh OJK
            </p>
          </div>
          
          <p className="mt-8 text-xs leading-5 text-neutral-500 dark:text-neutral-400 md:order-1 md:mt-0">
            &copy; 2024 AllInOne Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}