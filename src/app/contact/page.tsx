'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ShineBorder } from '@/components/magicui/shine-border';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Mail, Phone, MapPin, Clock, ArrowLeft, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    // Tampilkan notifikasi sukses (bisa diganti dengan toast notification)
    alert('Pesan Anda telah berhasil dikirim! Kami akan merespons dalam 1x24 jam.');
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <ShineBorder
              className="rounded-lg"
              shineColor={["#3b82f6", "#1d4ed8"]}
              borderWidth={2}
              duration={8}
            >
              <Card className="border-0 shadow-2xl bg-white rounded-lg h-full flex flex-col">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Hubungi Kami
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Kami siap membantu Anda dengan pertanyaan atau masalah apapun
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Details */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">support@marketplace.com</p>
                        <p className="text-gray-600">info@marketplace.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Telepon</h3>
                        <p className="text-gray-600">+62 21 1234 5678</p>
                        <p className="text-gray-600">+62 812 3456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Alamat</h3>
                        <p className="text-gray-600">
                          Jl. Sudirman No. 123<br />
                          Jakarta Pusat 10220<br />
                          Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                        <p className="text-gray-600">
                          Senin - Jumat: 09:00 - 18:00<br />
                          Sabtu: 09:00 - 15:00<br />
                          Minggu: Tutup
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Informasi Tambahan</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Respon email dalam 1x24 jam</p>
                      <p>• Customer service tersedia via WhatsApp</p>
                      <p>• Live chat tersedia di website</p>
                      <p>• Konsultasi gratis untuk penjual baru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ShineBorder>

            {/* Contact Form */}
            <ShineBorder
              className="rounded-lg"
              shineColor={["#3b82f6", "#1d4ed8"]}
              borderWidth={2}
              duration={8}
            >
              <Card className="border-0 shadow-2xl bg-white rounded-lg h-full">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Kirim Pesan
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Isi form di bawah ini dan kami akan segera merespons
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Nama Lengkap *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nama@email.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subjek *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subjek pesan Anda"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2 flex-1 flex flex-col">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Pesan *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan Anda di sini..."
                        required
                        className="w-full resize-none flex-1 min-h-[120px] max-h-[200px]"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <ShimmerButton
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50"
                        shimmerColor="#ffffff"
                        background="rgba(17, 24, 39, 1)"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                      </ShimmerButton>
                    </div>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      Dengan mengirim pesan ini, Anda menyetujui{' '}
                      <Link
                        href="/terms-privacy"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        Syarat & Ketentuan
                      </Link>{' '}
                      kami
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ShineBorder>
          </div>
        </div>
      </div>
    </div>
  );
}