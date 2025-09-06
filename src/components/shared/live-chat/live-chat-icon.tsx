'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import CategorySelector from './category-selector'
import ContactForm, { ContactFormData } from './contact-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface LiveChatIconProps {
  className?: string
}

type ChatStep = 'closed' | 'category' | 'form' | 'chat'

export default function LiveChatIcon({ className = '' }: LiveChatIconProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<ChatStep>('closed')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [isOnline] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setCurrentStep('form')
  }

  const handleFormSubmit = (formData: ContactFormData) => {
    // Generate session ID using crypto.randomUUID for better consistency
    const sessionId = `chat_${crypto.randomUUID().replace(/-/g, '')}`
    
    // Store chat data in localStorage for the chat page
    localStorage.setItem(`chat_${sessionId}`, JSON.stringify({
      ...formData,
      sessionId,
      startTime: new Date().toISOString()
    }))
    
    // Navigate to chat page
    router.push(`/chat/${sessionId}`)
  }

  const handleClose = () => {
    setCurrentStep('closed')
    setSelectedCategory('')
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className={cn('fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6', className)}>
        <button
          onClick={() => setCurrentStep(currentStep === 'closed' ? 'category' : 'closed')}
          className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white p-3 sm:p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400/50 border border-slate-700/50 hover:border-slate-500/50 backdrop-blur-sm"
          aria-label={currentStep === 'closed' ? 'Buka Live Chat' : 'Tutup Live Chat'}
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          
          {/* Online Badge */}
          {isOnline && (
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse shadow-sm" />
          )}
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900/95 text-white text-xs sm:text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-slate-700/50 backdrop-blur-sm shadow-lg">
            💬 Butuh bantuan? Chat dengan kami!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
          </div>
        </button>
      </div>

      {/* Category Selection */}
      {currentStep === 'category' && (
        <div className="fixed bottom-24 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm sm:bottom-28 sm:right-6 sm:w-96 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <Card className="shadow-2xl border border-slate-800/60 bg-slate-900/95 backdrop-blur-xl ring-1 ring-slate-700/30 animate-in zoom-in-95 duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-white">Pilih Kategori</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CategorySelector
                onSelect={handleCategorySelect}
                onClose={handleClose}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contact Form */}
      {currentStep === 'form' && (
        <div className="fixed bottom-24 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm sm:bottom-28 sm:right-6 sm:w-96 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <Card className="shadow-2xl border border-slate-800/60 bg-slate-900/95 backdrop-blur-xl ring-1 ring-slate-700/30 animate-in zoom-in-95 duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-white">Informasi Kontak</CardTitle>
                  <p className="text-sm text-slate-400 capitalize">{selectedCategory}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ContactForm
                selectedCategory={selectedCategory}
                onSubmit={handleFormSubmit}
                onBack={() => setCurrentStep('category')}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}