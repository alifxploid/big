'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Shield, Scale, Eye, Lock, AlertTriangle, FileText, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TermsPrivacyPage() {
  const [activeTab, setActiveTab] = useState('terms');

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
        <div className="w-full max-w-4xl">
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

          <ShineBorder
            className="rounded-lg"
            shineColor={["#3b82f6", "#1d4ed8"]}
            borderWidth={2}
            duration={8}
          >
            <Card className="border-0 shadow-2xl bg-white rounded-lg">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Syarat & Ketentuan
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Ketentuan penggunaan platform dan kebijakan privasi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="terms" className="text-sm font-medium">
                      <FileText className="w-4 h-4 mr-2" />
                      Syarat & Ketentuan
                    </TabsTrigger>
                    <TabsTrigger value="privacy" className="text-sm font-medium">
                      <Lock className="w-4 h-4 mr-2" />
                      Kebijakan Privasi
                    </TabsTrigger>
                  </TabsList>

                  {/* Terms Content */}
                  <TabsContent value="terms" className="space-y-4">
                    <Accordion type="single" collapsible className="space-y-4">
                      <AccordionItem value="general-terms" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <Scale className="w-5 h-5 mr-2" />
                          Ketentuan Umum
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Dengan menggunakan platform ini, Anda menyetujui untuk mematuhi semua ketentuan yang berlaku.</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Pengguna harus berusia minimal 17 tahun atau memiliki izin dari orang tua/wali</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Informasi yang diberikan harus akurat dan terkini</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Dilarang menggunakan platform untuk kegiatan ilegal atau merugikan</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="seller-terms" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <Shield className="w-5 h-5 mr-2" />
                          Ketentuan Penjual
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Penjual wajib mematuhi ketentuan berikut:</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Menjamin kualitas produk sesuai deskripsi</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Mengirim produk maksimal 2x24 jam setelah pembayaran</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Merespons pertanyaan pembeli dengan cepat</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Komisi platform 5% dari setiap transaksi</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="buyer-terms" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <Eye className="w-5 h-5 mr-2" />
                          Ketentuan Pembeli
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Pembeli wajib mematuhi ketentuan berikut:</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Melakukan pembayaran sesuai dengan metode yang tersedia</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Memberikan alamat pengiriman yang akurat</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Konfirmasi penerimaan barang setelah produk diterima</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Memberikan ulasan yang jujur dan konstruktif</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="sanctions" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          Sanksi & Pelanggaran
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Pelanggaran terhadap ketentuan akan dikenakan sanksi:</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Peringatan pertama: Penurunan rating</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Peringatan kedua: Suspensi akun 7 hari</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Pelanggaran berat: Penutupan akun permanen</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  {/* Privacy Content */}
                  <TabsContent value="privacy" className="space-y-4">
                    <Accordion type="single" collapsible className="space-y-4">
                      <AccordionItem value="data-collection" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <Eye className="w-5 h-5 mr-2" />
                          Pengumpulan Data
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Kami mengumpulkan data berikut untuk memberikan layanan terbaik:</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Informasi pribadi: nama, email, nomor telepon, alamat</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Data transaksi: riwayat pembelian, metode pembayaran</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Aktivitas platform: log masuk, preferensi, interaksi</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="data-usage" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <Lock className="w-5 h-5 mr-2" />
                          Penggunaan Data
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Data yang dikumpulkan digunakan untuk:</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Memproses transaksi dan pengiriman</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Meningkatkan kualitas layanan</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Komunikasi terkait layanan</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Analisis dan pengembangan fitur</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="data-protection" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <Shield className="w-5 h-5 mr-2" />
                          Perlindungan Data
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Kami berkomitmen melindungi data Anda dengan:</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Enkripsi data saat transmisi dan penyimpanan</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Akses terbatas hanya untuk personel yang berwenang</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Audit keamanan berkala</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Tidak membagikan data kepada pihak ketiga tanpa izin</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="user-rights" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600">
                          <FileText className="w-5 h-5 mr-2" />
                          Hak Pengguna
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
                          <div className="space-y-3">
                            <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                            <ul className="space-y-2 ml-4">
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Mengakses dan melihat data pribadi yang kami simpan</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Memperbarui atau mengoreksi data yang tidak akurat</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Menghapus akun dan data pribadi</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Mengajukan keluhan terkait penggunaan data</span>
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>

                {/* Contact Information */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Jika ada pertanyaan mengenai syarat & ketentuan atau kebijakan privasi,{' '}
                      <Link
                        href="/contact"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        hubungi kami
                      </Link>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ShineBorder>
        </div>
      </div>
    </div>
  );
}