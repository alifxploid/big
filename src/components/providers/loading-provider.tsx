'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Component as AILoader } from '@/components/ai-loader'

interface LoadingContextType {
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

interface LoadingProviderProps {
  children: React.ReactNode
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const [previousPathname, setPreviousPathname] = useState(pathname)

  useEffect(() => {
    // Jika pathname berubah dan bukan anchor link
    if (pathname !== previousPathname && !pathname.includes('#')) {
      setIsLoading(true)
      setPreviousPathname(pathname)
    }
  }, [pathname, previousPathname])

  useEffect(() => {
    // Reset loading setelah halaman dimuat
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500) // 3.5s agar animasi terlihat penuh
      
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      {isLoading && (
        <AILoader 
          size={180} 
          text="Loading" 
        />
      )}
    </LoadingContext.Provider>
  )
}