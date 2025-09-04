'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const forgotPasswordBuyerSchema = z.object({
  email: z.string().email('Email tidak valid'),
});

type ForgotPasswordBuyerFormData = z.infer<typeof forgotPasswordBuyerSchema>;

interface ForgotPasswordBuyerProps {
  onSubmit: (data: ForgotPasswordBuyerFormData) => Promise<void>;
  isLoading: boolean;
}

export function ForgotPasswordBuyer({ onSubmit, isLoading }: ForgotPasswordBuyerProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordBuyerFormData>({
    resolver: zodResolver(forgotPasswordBuyerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="buyer-email" className="text-sm font-medium text-gray-900">
          Email Pembeli
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="buyer-email"
            type="email"
            placeholder="pembeli@email.com"
            className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
        className="w-full bg-gray-900 text-white hover:bg-gray-800"
        shimmerColor="#ffffff"
        background="rgba(17, 24, 39, 1)"
      >
        {isLoading ? 'Mengirim...' : 'Kirim Link Reset Pembeli'}
      </ShimmerButton>
    </form>
  );
}