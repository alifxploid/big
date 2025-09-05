'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '../components/LoginForm'
import { validateAdminCredentials, createAdminSession, setAdminSessionCookie } from '../lib/auth'

export default function AdminLoginPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Cek apakah sudah login
    const checkExistingSession = () => {
      try {
        const sessionCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('admin-session='))
        
        if (sessionCookie) {
          const session = JSON.parse(sessionCookie.split('=')[1])
          if (session.expiresAt > Date.now()) {
            router.push('/admin/dashboard')
            return
          }
        }
      } catch (error) {
        console.error('Error checking session:', error)
      }
      setIsLoading(false)
    }

    checkExistingSession()
  }, [router])

  const handleLogin = async (credentials: { username: string; password: string }) => {
    try {
      const isValid = await validateAdminCredentials(credentials)
      
      if (isValid) {
        const session = createAdminSession(credentials.username)
        setAdminSessionCookie(session)
        return true
      }
      
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  )
}