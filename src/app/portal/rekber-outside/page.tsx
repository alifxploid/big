"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, User, Store, ArrowRight, Shield, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function RekberOutsidePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rekber Outside</h1>
          <p className="text-muted-foreground">
            Layanan rekening bersama untuk transaksi aman dengan pihak luar platform
          </p>
        </div>
        <Badge variant="outline" className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          Aman & Terpercaya
        </Badge>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Role Selection Cards */}
        <div className="md:col-span-2 lg:col-span-2">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Seller Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Store className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Saya Penjual</CardTitle>
                    <CardDescription>
                      Buat transaksi rekber baru
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Buat form transaksi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    <span>Dapatkan kode chat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Bagikan ke pembeli</span>
                  </div>
                </div>
                
                <Link href="/portal/rekber-outside/seller" className="block">
                  <Button className="w-full" size="lg">
                    Mulai sebagai Penjual
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Buyer Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <User className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Saya Pembeli</CardTitle>
                    <CardDescription>
                      Masuk dengan kode dari penjual
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    <span>Input kode chat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Verifikasi transaksi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Mulai chat dengan penjual</span>
                  </div>
                </div>
                
                <Link href="/portal/rekber-outside/buyer" className="block">
                  <Button className="w-full" variant="outline" size="lg">
                    Masuk sebagai Pembeli
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                Keamanan Terjamin
              </CardTitle>
              <CardDescription>
                Sistem rekber outside yang aman dan terpercaya
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium">Dana Aman</p>
                    <p className="text-xs text-muted-foreground">Dana pembeli ditahan hingga barang diterima</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium">Chat Terintegrasi</p>
                    <p className="text-xs text-muted-foreground">Komunikasi langsung dengan admin sebagai mediator</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium">Tracking Lengkap</p>
                    <p className="text-xs text-muted-foreground">Pantau status transaksi secara real-time</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium">Biaya Transparan</p>
                    <p className="text-xs text-muted-foreground">2% dari nilai transaksi, minimum Rp 5.000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How it Works */}
      <Card>
        <CardHeader>
          <CardTitle>Cara Kerja Rekber Outside</CardTitle>
          <CardDescription>
            Proses transaksi yang mudah dan aman dalam 5 langkah
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                1
              </div>
              <h4 className="font-medium text-sm">Pilih Role</h4>
              <p className="text-xs text-muted-foreground">Penjual buat transaksi, pembeli input kode</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                2
              </div>
              <h4 className="font-medium text-sm">Chat Room</h4>
              <p className="text-xs text-muted-foreground">Bertemu di ruang chat dengan admin</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                3
              </div>
              <h4 className="font-medium text-sm">Pembayaran</h4>
              <p className="text-xs text-muted-foreground">Pembeli transfer ke rekening rekber</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                4
              </div>
              <h4 className="font-medium text-sm">Pengiriman</h4>
              <p className="text-xs text-muted-foreground">Penjual kirim barang dengan resi</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto">
                5
              </div>
              <h4 className="font-medium text-sm">Selesai</h4>
              <p className="text-xs text-muted-foreground">Pembeli konfirmasi, dana diteruskan</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
