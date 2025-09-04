'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { ForgotPasswordBuyer } from '@/components/auth/forgot-password-buyer';
import { ForgotPasswordSeller } from '@/components/auth/forgot-password-seller';

type ForgotPasswordFormData = {
  email: string;
  storeName?: string;
};

export default function ForgotPasswordPage() {
  const [activeTab, setActiveTab] = useState('buyer');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [userType, setUserType] = useState('');

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement forgot password logic
      console.log('Forgot password data:', { ...data, userType: activeTab });
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setSubmittedEmail(data.email);
      setUserType(activeTab);
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
          <Card className="border-0 shadow-2xl bg-white rounded-lg">
              <CardHeader className="space-y-1 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Email Terkirim!
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Kami telah mengirim link reset password {userType === 'buyer' ? 'pembeli' : 'penjual'} ke email Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Email dikirim ke:</p>
                    <p className="font-medium text-gray-900">{submittedEmail}</p>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>Silakan cek email Anda dan klik link yang kami kirim untuk reset password.</p>
                    <p>Jika tidak menerima email dalam 5 menit, cek folder spam Anda.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <ShimmerButton
                    onClick={() => {
                      setIsEmailSent(false);
                      setSubmittedEmail('');
                      setUserType('');
                      setActiveTab('buyer');
                    }}
                    className="w-full bg-gray-900 text-white hover:bg-gray-800"
                    shimmerColor="#ffffff"
                    background="rgba(17, 24, 39, 1)"
                  >
                    Kirim Ulang Email
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
          <Card className="border-0 shadow-2xl bg-white rounded-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Lupa Password?
              </CardTitle>
              <CardDescription className="text-gray-600">
                Pilih jenis akun untuk reset password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger 
                    value="buyer" 
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Pembeli
                  </TabsTrigger>
                  <TabsTrigger 
                    value="seller" 
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                  >
                    Penjual
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="buyer" className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Reset Password Pembeli</h3>
                    <p className="text-sm text-gray-600">Masukkan email akun pembeli Anda</p>
                  </div>
                  <ForgotPasswordBuyer onSubmit={onSubmit} isLoading={isLoading} />
                </TabsContent>
                
                <TabsContent value="seller" className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Reset Password Penjual</h3>
                    <p className="text-sm text-gray-600">Masukkan email dan nama toko (opsional)</p>
                  </div>
                  <ForgotPasswordSeller onSubmit={onSubmit} isLoading={isLoading} />
                </TabsContent>
              </Tabs>

              <div className="text-center">
                <Link
                  href="/auth/login"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Login
                </Link>
              </div>

              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Belum punya akun?{' '}
                  <Link
                    href="/auth/register"
                    className="font-medium text-blue-600 hover:text-blue-800"
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