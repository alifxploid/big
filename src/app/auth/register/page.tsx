'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShineBorder } from '@/components/magicui/shine-border';
import { RegisterSeller } from '@/components/auth/register-seller';
import { RegisterBuyer } from '@/components/auth/register-buyer';

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState('buyer');

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
                Daftar Akun
              </CardTitle>
              <CardDescription className="text-gray-600">
                Pilih jenis akun yang ingin Anda buat
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
                    <h3 className="text-lg font-semibold text-gray-900">Akun Pembeli</h3>
                    <p className="text-sm text-gray-600">Untuk berbelanja dan mencari produk</p>
                  </div>
                  <RegisterBuyer />
                </TabsContent>
                
                <TabsContent value="seller" className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Akun Penjual</h3>
                    <p className="text-sm text-gray-600">Untuk menjual produk dan mengelola toko</p>
                  </div>
                  <RegisterSeller />
                </TabsContent>
              </Tabs>

              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Sudah punya akun?{' '}
                  <Link
                    href="/auth/login"
                    className="font-medium text-blue-600 hover:text-blue-800"
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