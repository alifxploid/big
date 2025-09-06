'use client'

import { useState } from 'react'
import { X, MessageSquare, Headphones, Settings, CreditCard } from 'lucide-react'

interface CategorySelectorProps {
  onSelect: (category: string) => void
  onClose: () => void
}

const categories = [
  {
    id: 'sales',
    name: 'Sales',
    description: 'Pertanyaan tentang produk dan layanan',
    icon: MessageSquare,
    color: 'from-slate-700 to-slate-900',
    hoverColor: 'from-slate-500 to-slate-600'
  },
  {
    id: 'support',
    name: 'Support',
    description: 'Bantuan teknis dan troubleshooting',
    icon: Headphones,
    color: 'from-emerald-600 to-emerald-700',
    hoverColor: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Konsultasi teknis dan implementasi',
    icon: Settings,
    color: 'from-purple-600 to-purple-700',
    hoverColor: 'from-purple-500 to-purple-600'
  },
  {
    id: 'billing',
    name: 'Billing',
    description: 'Pertanyaan pembayaran dan invoice',
    icon: CreditCard,
    color: 'from-orange-600 to-orange-700',
    hoverColor: 'from-orange-500 to-orange-600'
  }
]

export default function CategorySelector({ onSelect, onClose }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setTimeout(() => {
      onSelect(categoryId)
    }, 200)
  }

  return (
    <div className="space-y-4">
      <p className="text-slate-400 text-sm font-medium">
        Pilih kategori yang sesuai dengan kebutuhan Anda
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {categories.map((category) => {
          const Icon = category.icon
          const isSelected = selectedCategory === category.id
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`
                group relative p-4 rounded-xl border transition-all duration-300
                hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400/50
                ${
                  isSelected
                    ? 'border-slate-500 bg-gradient-to-br from-slate-800/80 to-slate-900/80 scale-[1.02] shadow-lg'
                    : 'border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 hover:border-slate-600/50 hover:from-slate-800/50 hover:to-slate-900/50'
                }
              `}
            >
              {/* Content */}
              <div className="flex items-start space-x-3">
                <div className={`
                  p-2.5 rounded-lg bg-gradient-to-br ${isSelected ? category.hoverColor : category.color} shadow-md
                  group-hover:scale-105 transition-all duration-300
                `}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-semibold text-white group-hover:text-slate-100 transition-colors duration-300 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}