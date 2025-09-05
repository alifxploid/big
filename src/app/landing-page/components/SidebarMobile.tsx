'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

const navigation = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Fitur', href: '#features' },
  { name: 'Cara Kerja', href: '#how-it-works' },
  { name: 'Kontak', href: '#contact' },
]

interface SidebarMobileProps {
  isOpen: boolean
  onClose: () => void
}

export default function SidebarMobile({ isOpen, onClose }: SidebarMobileProps) {
  if (!isOpen) return null

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">AllInOne</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={onClose}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="py-6 space-y-3">
              <Link
                href="/auth/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 text-center border border-gray-300 dark:border-gray-600"
                onClick={onClose}
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-center"
                onClick={onClose}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}