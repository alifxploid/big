'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, CheckCircle, Mail } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';

const forgotPasswordSchema = z.object({
  email: z.string().email('Email tidak valid'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement forgot password logic
      console.log('Forgot password data:', data);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setSubmittedEmail(data.email);
      setIsEmailSent(true);
    } catch (error) {
      console.error('Forgot password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md relative">
          <ShineBorder
            className="rounded-lg"
            shineColor={['#10b981', '#059669']}
            borderWidth={2}
            duration={8}
          />
          <Card className="border-0 shadow-2xl bg-white dark:bg-neutral-800 rounded-lg">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Email Terkirim!
                </CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  Kami telah mengirim link reset password ke email Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">Email dikirim ke:</p>
                    <p className="font-medium text-neutral-900 dark:text-white">{submittedEmail}</p>
                  </div>
                  
                  <div className="text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
                    <p>Silakan cek email Anda dan klik link yang kami kirim untuk reset password.</p>
                    <p>Jika tidak menerima email dalam 5 menit, cek folder spam Anda.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <ShimmerButton
                    onClick={() => {
                      setIsEmailSent(false);
                      setSubmittedEmail('');
                    }}
                    className="w-full bg-neutral-900 dark:bg-neutral-700 text-white hover:bg-neutral-800 dark:hover:bg-neutral-600 dark:text-white dark:border-neutral-600 dark:[background:var(--dark-bg,var(--bg))]"
                    style={{
                      '--bg': 'rgba(23, 23, 23, 1)',
                      '--dark-bg': 'rgba(64, 64, 64, 1)'
                    } as React.CSSProperties}
                    shimmerColor="#ffffff"
                    background="rgba(23, 23, 23, 1)"
                  >
                    Kirim Ulang Email
                  </ShimmerButton>

                  <Link
                    href="/auth/login"
                    className="block w-full text-center py-3 px-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    Kembali ke Login
                  </Link>
                </div>
              </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
                Lupa Password?
              </CardTitle>
              <CardDescription className="text-neutral-600 dark:text-neutral-300">
                Masukkan email Anda untuk menerima link reset password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

                <ShimmerButton
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                  shimmerColor="#ffffff"
                  background="rgba(23, 23, 23, 1)"
                >
                  {isLoading ? 'Mengirim...' : 'Kirim Link Reset Password'}
                </ShimmerButton>
              </form>

              <div className="text-center">
                <Link
                  href="/auth/login"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Login
                </Link>
              </div>

              <div className="text-center pt-4 border-t border-neutral-200 dark:border-neutral-600">
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Belum punya akun?{' '}
                  <Link
                    href="/auth/register"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Daftar sekarang
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