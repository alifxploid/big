'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler'

const navigation = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Fitur', href: '#features' },
  { name: 'Cara Kerja', href: '#how-it-works' },
  { name: 'Kontak', href: '#contact' },
]

interface NavbarProps {
  onMobileMenuToggle?: () => void
}

export default function Navbar({ onMobileMenuToggle }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (onMobileMenuToggle) {
      onMobileMenuToggle()
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="flex items-center justify-center p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">AllInOne</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <div className="flex items-center gap-2">
              <AnimatedThemeToggler />
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={handleMobileMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          
          {/* Desktop navigation - centered */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <div className="flex gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Auth buttons */}
          <div className="hidden lg:flex lg:gap-x-4 lg:flex-shrink-0 lg:items-center">
            <AnimatedThemeToggler />
            <Link
              href="/auth/login"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}