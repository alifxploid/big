'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle, Mail, Loader2, ArrowLeft } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';

type VerificationStatus = 'loading' | 'success' | 'error' | 'expired' | 'resend';

function VerifyEmailContent() {
  const [status, setStatus] = useState<VerificationStatus>('loading');
  const [isResending, setIsResending] = useState(false);
  const [email, setEmail] = useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const emailParam = searchParams.get('email');

  useEffect(() => {
    if (emailParam) {
      setEmail(emailParam);
    }

    if (token) {
      // Simulate email verification
      const verifyEmail = async () => {
        try {
          // TODO: Implement actual email verification logic
          console.log('Verifying token:', token);
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Simulate different outcomes based on token
          if (token === 'expired') {
            setStatus('expired');
          } else if (token === 'invalid') {
            setStatus('error');
          } else {
            setStatus('success');
          }
        } catch (error) {
          console.error('Verification error:', error);
          setStatus('error');
        }
      };

      verifyEmail();
    } else {
      setStatus('resend');
    }
  }, [token, emailParam]);

  const handleResendEmail = async () => {
    setIsResending(true);
    try {
      // TODO: Implement resend email logic
      console.log('Resending verification email to:', email);
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Show success message or redirect
    } catch (error) {
      console.error('Resend error:', error);
    } finally {
      setIsResending(false);
    }
  };

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <ShineBorder
            className="rounded-lg"
            shineColor={['#3b82f6', '#1d4ed8']}
            borderWidth={2}
            duration={8}
          >
            <Card className="border-0 shadow-2xl bg-white dark:bg-neutral-800">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Loader2 className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-spin" />
                </div>
                <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Memverifikasi Email...
                </CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  Mohon tunggu, kami sedang memverifikasi email Anda
                </CardDescription>
              </CardHeader>
            </Card>
          </ShineBorder>
        );

      case 'success':
        return (
          <ShineBorder
            className="rounded-lg"
            shineColor={['#10b981', '#059669']}
            borderWidth={2}
            duration={8}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Email Berhasil Diverifikasi!
                </CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  Akun Anda telah aktif dan siap digunakan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Selamat! Email Anda telah berhasil diverifikasi. Anda sekarang dapat menggunakan semua fitur platform kami.
                    </p>
                  </div>
                </div>

                <Link href="/auth/login">
                  <ShimmerButton
                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                    shimmerColor="#ffffff"
                    background="rgba(23, 23, 23, 1)"
                  >
                    Lanjut ke Login
                  </ShimmerButton>
                </Link>
              </CardContent>
            </Card>
          </ShineBorder>
        );

      case 'error':
        return (
          <ShineBorder
            className="rounded-lg"
            shineColor={['#ef4444', '#dc2626']}
            borderWidth={2}
            duration={8}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Verifikasi Gagal
                </CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  Link verifikasi tidak valid atau telah kedaluwarsa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="text-sm text-red-800 dark:text-red-300">
                      Link verifikasi yang Anda gunakan tidak valid. Silakan minta link verifikasi baru.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <ShimmerButton
                    onClick={handleResendEmail}
                    disabled={isResending}
                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                    shimmerColor="#ffffff"
                    background="rgba(23, 23, 23, 1)"
                  >
                    {isResending ? 'Mengirim...' : 'Kirim Ulang Email Verifikasi'}
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
          </ShineBorder>
        );

      case 'expired':
        return (
          <ShineBorder
            className="rounded-lg"
            shineColor={['#f59e0b', '#d97706']}
            borderWidth={2}
            duration={8}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Link Kedaluwarsa
                </CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  Link verifikasi telah kedaluwarsa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      Link verifikasi email telah kedaluwarsa. Silakan minta link verifikasi baru untuk melanjutkan.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <ShimmerButton
                    onClick={handleResendEmail}
                    disabled={isResending}
                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                    shimmerColor="#ffffff"
                    background="rgba(23, 23, 23, 1)"
                  >
                    {isResending ? 'Mengirim...' : 'Kirim Link Verifikasi Baru'}
                  </ShimmerButton>

                  <Link
                    href="/auth/login"
                    className="block w-full text-center py-3 px-4 text-sm font-medium text-blue-600 hover:text-blue-800 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Kembali ke Login
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ShineBorder>
        );

      case 'resend':
      default:
        return (
          <ShineBorder
            className="rounded-lg"
            shineColor={['#3b82f6', '#1d4ed8']}
            borderWidth={2}
            duration={8}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Verifikasi Email Anda
                </CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  Kami telah mengirim email verifikasi ke alamat email Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                      Silakan cek email Anda dan klik link verifikasi yang kami kirim.
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Jika tidak menerima email, cek folder spam atau kirim ulang email verifikasi.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <ShimmerButton
                    onClick={handleResendEmail}
                    disabled={isResending}
                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                    shimmerColor="#ffffff"
                    background="rgba(23, 23, 23, 1)"
                  >
                    {isResending ? 'Mengirim...' : 'Kirim Ulang Email Verifikasi'}
                  </ShimmerButton>

                  <Link
                    href="/auth/login"
                    className="inline-flex items-center justify-center w-full py-3 px-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Login
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ShineBorder>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {renderContent()}
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <ShineBorder
          className="rounded-lg"
          shineColor={['#3b82f6', '#1d4ed8']}
          borderWidth={2}
          duration={8}
        >
          <Card className="border-0 shadow-2xl">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
              </div>
              <CardTitle className="text-2xl font-bold text-neutral-900 dark:text-white">
                Memuat...
              </CardTitle>
              <CardDescription className="text-neutral-600 dark:text-neutral-300">
                Mohon tunggu sebentar
              </CardDescription>
            </CardHeader>
          </Card>
        </ShineBorder>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <VerifyEmailContent />
    </Suspense>
  );
}