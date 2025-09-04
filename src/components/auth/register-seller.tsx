'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, Mail, Lock, User, Phone, Store, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const sellerSchema = z.object({
  firstName: z.string().min(2, 'Nama depan minimal 2 karakter'),
  lastName: z.string().min(2, 'Nama belakang minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  storeName: z.string().min(3, 'Nama toko minimal 3 karakter'),
  storeDescription: z.string().min(10, 'Deskripsi toko minimal 10 karakter'),
  storeAddress: z.string().min(10, 'Alamat toko minimal 10 karakter'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'Anda harus menyetujui syarat dan ketentuan'
  }),

}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password tidak cocok',
  path: ['confirmPassword'],
});

type SellerFormData = z.infer<typeof sellerSchema>;

export function RegisterSeller() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SellerFormData>({
    resolver: zodResolver(sellerSchema),
  });

  const agreeToTerms = watch('agreeToTerms');

  const onSubmit = async (data: SellerFormData) => {
    setIsLoading(true);
    try {
      // TODO: Implement seller registration logic
      console.log('Seller registration data:', data);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    // TODO: Implement Google OAuth registration
    console.log('Google registration clicked for seller');
  };

  return (
    <div className="space-y-6">
      {/* Google Registration Button */}
      <ShimmerButton
        onClick={handleGoogleRegister}
        className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
        shimmerColor="#3b82f6"
        background="rgba(255, 255, 255, 1)"
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
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Atau</span>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 border-b pb-2">Informasi Pribadi</h4>
          
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-900">
                Nama Depan
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register('firstName')}
                />
              </div>
              {errors.firstName && (
                <p className="text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-900">
                Nama Belakang
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
            <Label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="john@email.com"
                className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-900">
              Nomor Telepon
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                placeholder="08123456789"
                className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register('phone')}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Store Information */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 border-b pb-2">Informasi Toko</h4>
          
          {/* Store Name */}
          <div className="space-y-2">
            <Label htmlFor="storeName" className="text-sm font-medium text-gray-900">
              Nama Toko
            </Label>
            <div className="relative">
              <Store className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="storeName"
                type="text"
                placeholder="Toko Saya"
                className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register('storeName')}
              />
            </div>
            {errors.storeName && (
              <p className="text-sm text-red-600">{errors.storeName.message}</p>
            )}
          </div>

          {/* Store Description */}
          <div className="space-y-2">
            <Label htmlFor="storeDescription" className="text-sm font-medium text-gray-900">
              Deskripsi Toko
            </Label>
            <Textarea
              id="storeDescription"
              placeholder="Ceritakan tentang toko Anda..."
              className="min-h-[80px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              {...register('storeDescription')}
            />
            {errors.storeDescription && (
              <p className="text-sm text-red-600">{errors.storeDescription.message}</p>
            )}
          </div>

          {/* Store Address */}
          <div className="space-y-2">
            <Label htmlFor="storeAddress" className="text-sm font-medium text-gray-900">
              Alamat Toko
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Textarea
                id="storeAddress"
                placeholder="Alamat lengkap toko Anda"
                className="pl-10 min-h-[80px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register('storeAddress')}
              />
            </div>
            {errors.storeAddress && (
              <p className="text-sm text-red-600">{errors.storeAddress.message}</p>
            )}
          </div>
        </div>

        {/* Password Fields */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 border-b pb-2">Keamanan Akun</h4>
          
          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-900">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Minimal 8 karakter"
                className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
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
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900">
              Konfirmasi Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Ulangi password"
                className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...register('confirmPassword')}
              />
              <button
                type="button"
                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToTerms"
              checked={agreeToTerms}
              onCheckedChange={(checked) => setValue('agreeToTerms', checked as boolean)}
              className="mt-1"
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="agreeToTerms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Saya menyetujui{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Syarat dan Ketentuan
                </a>{' '}
                serta{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Kebijakan Privasi
                </a>
              </Label>
            </div>
          </div>
          {errors.agreeToTerms && (
            <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
          )}


        </div>

        <ShimmerButton
          type="submit"
          disabled={isLoading}
          className="w-full bg-gray-900 text-white hover:bg-gray-800"
          shimmerColor="#ffffff"
          background="rgba(17, 24, 39, 1)"
        >
          {isLoading ? 'Mendaftar...' : 'Daftar sebagai Penjual'}
        </ShimmerButton>
      </form>
    </div>
  );
}