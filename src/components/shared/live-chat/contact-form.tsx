'use client'

import { useState } from 'react'
import { X, User, Mail, MessageSquare, Send, AlertCircle } from 'lucide-react'

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void
  onBack: () => void
  selectedCategory?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  category: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const categoryLabels: Record<string, string> = {
  sales: 'Sales',
  support: 'Support',
  technical: 'Technical',
  billing: 'Billing'
}

export default function ContactForm({ onSubmit, onBack, selectedCategory }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    category: selectedCategory || ''
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nama minimal 2 karakter'
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSubmit(formData)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-slate-400 text-sm font-medium">
            Kategori: <span className="text-slate-200 font-semibold">{categoryLabels[selectedCategory || '']}</span>
          </p>
        </div>
        <button
          onClick={onBack}
          className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors duration-200 hover:scale-105"
        >
          ← Kembali
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
              Nama Lengkap
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 z-10 pointer-events-none" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`
                  w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border rounded-lg
                  text-white placeholder-slate-500 focus:outline-none focus:ring-2
                  transition-all duration-200 backdrop-blur-sm
                  ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-slate-600/50 focus:border-slate-500 focus:ring-slate-400/50'
                  }
                `}
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>
            {errors.name && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 z-10 pointer-events-none" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`
                  w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border rounded-lg
                  text-white placeholder-slate-500 focus:outline-none focus:ring-2
                  transition-all duration-200 backdrop-blur-sm
                  ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-slate-600/50 focus:border-slate-500 focus:ring-slate-400/50'
                  }
                `}
                placeholder="nama@email.com"
              />
            </div>
            {errors.email && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </div>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
              Pesan
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400 z-10 pointer-events-none" />
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`
                  w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border rounded-lg
                  text-white placeholder-slate-500 focus:outline-none focus:ring-2
                  transition-all duration-200 resize-none backdrop-blur-sm
                  ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-slate-600/50 focus:border-slate-500 focus:ring-slate-400/50'
                  }
                `}
                placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
              />
            </div>
            {errors.message && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-2.5 px-6 rounded-lg font-semibold text-white
              bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700
              focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2 focus:ring-offset-slate-900
              transition-all duration-200 flex items-center justify-center space-x-2
              disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm
              border border-slate-600/50 shadow-lg
              ${
                isSubmitting
                  ? 'bg-gradient-to-r from-slate-800 to-slate-900'
                  : 'hover:scale-[1.02] hover:shadow-xl hover:border-slate-500/50'
              }
            `}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Memproses...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Mulai Chat</span>
              </>
            )}
          </button>
        </form>
    </div>
  )
}