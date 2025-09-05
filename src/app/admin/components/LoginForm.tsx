'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ShineBorder } from '@/components/magicui/shine-border'
import { Eye, EyeOff, Shield, AlertCircle, Lock, User } from 'lucide-react'

interface LoginFormProps {
  onLogin?: (credentials: { username: string; password: string }) => Promise<boolean>
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      if (onLogin) {
        const success = await onLogin({ username, password })
        if (success) {
          router.push('/admin/dashboard')
        } else {
          setError('Username atau password salah')
        }
      } else {
        // Default validation untuk demo
        if (username === 'admin' && password === 'admin123') {
          router.push('/admin/dashboard')
        } else {
          setError('Username atau password salah')
        }
      }
    } catch (err) {
      setError('Terjadi kesalahan saat login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      {/* Wrapper konten utama */}
      <div className="w-full max-w-md space-y-8">
        {/* Header dengan desain garang */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center mb-6">
            <ShineBorder
              className="p-4 rounded-2xl bg-slate-900"
              shineColor={["#1e293b", "#334155", "#475569"]}
              borderWidth={2}
              duration={8}
            >
              <Shield className="h-12 w-12 text-white" />
            </ShineBorder>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              ADMIN
            </h1>
            <div className="h-1 w-16 bg-slate-900 mx-auto rounded-full"></div>
            <p className="text-slate-600 font-medium text-sm uppercase tracking-wider">
              SECURE ACCESS PORTAL
            </p>
          </div>
        </div>

        {/* Form Login dengan desain garang */}
        <ShineBorder
          className="bg-white/95 backdrop-blur-sm rounded-2xl"
          shineColor={["#0f172a", "#1e293b", "#334155"]}
          borderWidth={1}
          duration={10}
        >
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="space-y-4 pb-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold tracking-wide">
                  <Lock className="h-4 w-4" />
                  AUTHENTICATION
                </div>
                <CardDescription className="text-slate-600 font-medium">
                  Enter your administrative credentials
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="username" className="text-slate-900 font-bold text-sm uppercase tracking-wide">
                      Username
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter admin username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="h-12 pl-11 border-2 border-slate-200 focus:border-slate-900 rounded-xl font-medium bg-slate-50 focus:bg-white transition-all duration-200"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="password" className="text-slate-900 font-bold text-sm uppercase tracking-wide">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter admin password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-12 pl-11 pr-12 border-2 border-slate-200 focus:border-slate-900 rounded-xl font-medium bg-slate-50 focus:bg-white transition-all duration-200"
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-slate-100 rounded-lg"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-500" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <ShimmerButton
                    type="submit"
                    className="w-full h-12 shadow-xl"
                    background="rgba(15, 23, 42, 1)"
                    shimmerColor="#64748b"
                    borderRadius="12px"
                    disabled={isLoading || !username || !password}
                  >
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      {isLoading ? 'AUTHENTICATING...' : 'ACCESS ADMIN'}
                    </span>
                  </ShimmerButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </ShineBorder>
        
        {/* Footer dengan desain minimal */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wider">
            <div className="h-px w-8 bg-slate-300"></div>
            SECURE PORTAL
            <div className="h-px w-8 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}