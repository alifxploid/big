'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Store } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const forgotPasswordSellerSchema = z.object({
  email: z.string().email('Email tidak valid'),
  storeName: z.string().min(2, 'Nama toko minimal 2 karakter').optional(),
});

type ForgotPasswordSellerFormData = z.infer<typeof forgotPasswordSellerSchema>;

interface ForgotPasswordSellerProps {
  onSubmit: (data: ForgotPasswordSellerFormData) => Promise<void>;
  isLoading: boolean;
}

export function ForgotPasswordSeller({ onSubmit, isLoading }: ForgotPasswordSellerProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSellerFormData>({
    resolver: zodResolver(forgotPasswordSellerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="seller-email" className="text-sm font-medium text-gray-900 dark:text-white">
          Email Penjual
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Input
            id="seller-email"
            type="email"
            placeholder="penjual@email.com"
            className="pl-10 h-12 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green-500 focus:ring-green-500"
            {...register('email')}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="store-name" className="text-sm font-medium text-gray-900 dark:text-white">
          Nama Toko (Opsional)
        </Label>
        <div className="relative">
          <Store className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Input
            id="store-name"
            type="text"
            placeholder="Nama toko Anda"
            className="pl-10 h-12 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green-500 focus:ring-green-500"
            {...register('storeName')}
          />
        </div>
        {errors.storeName && (
          <p className="text-sm text-red-600">{errors.storeName.message}</p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Masukkan nama toko untuk membantu identifikasi akun penjual Anda
        </p>
      </div>

      <ShimmerButton
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 dark:[background:var(--dark-bg,var(--bg))]"
        style={{
          '--bg': 'rgba(17, 24, 39, 1)',
          '--dark-bg': 'rgba(55, 65, 81, 1)'
        } as React.CSSProperties}
        shimmerColor="#ffffff"
        background="rgba(17, 24, 39, 1)"
      >
        {isLoading ? 'Mengirim...' : 'Kirim Link Reset Penjual'}
      </ShimmerButton>
    </form>
  );
}