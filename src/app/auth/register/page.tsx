'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const registerSchema = z.object({
  firstName: z.string().min(2, 'Nama depan minimal 2 karakter'),
  lastName: z.string().min(2, 'Nama belakang minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'Anda harus menyetujui syarat dan ketentuan'
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password tidak cocok',
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const agreeToTerms = watch('agreeToTerms');

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement registration logic
      console.log('Registration data:', data);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    // TODO: Implement Google OAuth registration
    console.log('Google registration clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg relative">
        <ShineBorder
          className="rounded-lg"
          shineColor={['#3b82f6', '#1d4ed8']}
          borderWidth={2}
          duration={8}
        >
          <Card className="border-0 shadow-2xl bg-white dark:bg-neutral-800 rounded-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bold text-neutral-900 dark:text-white">
                Daftar Akun
              </CardTitle>
              <CardDescription className="text-neutral-600 dark:text-neutral-300">
                Buat akun baru untuk mulai menggunakan layanan kami
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Google Registration Button */}
              <ShimmerButton
                onClick={handleGoogleRegister}
                className="w-full bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-600"
                shimmerColor="#3b82f6"
                background="rgba(255, 255, 255, 1)"
                style={{
                  '--bg': 'rgba(255, 255, 255, 1)',
                  '--dark-bg': 'rgba(64, 64, 64, 1)'
                } as React.CSSProperties & { '--bg': string; '--dark-bg': string }}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Daftar dengan Google
              </ShimmerButton>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-neutral-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-neutral-800 px-2 text-neutral-500 dark:text-neutral-400">Atau</span>
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-neutral-900 dark:text-white">
                      Nama Depan
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="pl-10 h-12 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                        {...register('firstName')}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-neutral-900 dark:text-white">
                      Nama Belakang
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="pl-10 h-12 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                        {...register('lastName')}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-neutral-900 dark:text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@email.com"
                      className="pl-10 h-12 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                      {...register('email')}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-neutral-900 dark:text-white">
                    Nomor Telepon
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08123456789"
                      className="pl-10 h-12 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                      {...register('phone')}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-neutral-900 dark:text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Minimal 8 karakter"
                      className="pl-10 pr-10 h-12 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                      {...register('password')}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 h-4 w-4 text-neutral-400 hover:text-neutral-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-neutral-900 dark:text-white">
                    Konfirmasi Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Ulangi password"
                      className="pl-10 pr-10 h-12 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                      {...register('confirmPassword')}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 h-4 w-4 text-neutral-400 hover:text-neutral-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setValue('agreeToTerms', checked as boolean)}
                    className="mt-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-sm font-medium leading-relaxed text-neutral-700 dark:text-neutral-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"
                    >
                      Saya menyetujui{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800 underline break-words">
                        Syarat dan Ketentuan
                      </a>{' '}
                      serta{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800 underline break-words">
                        Kebijakan Privasi
                      </a>
                    </Label>
                  </div>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
                )}

                <ShimmerButton
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                  shimmerColor="#ffffff"
                  background="rgba(23, 23, 23, 1)"
                >
                  {isLoading ? 'Mendaftar...' : 'Daftar Akun'}
                </ShimmerButton>
              </form>

              <div className="text-center pt-4 border-t border-neutral-200 dark:border-neutral-600">
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Sudah punya akun?{' '}
                  <Link
                    href="/auth/login"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Masuk sekarang
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </ShineBorder>
      </div>
    </div>
  );
}