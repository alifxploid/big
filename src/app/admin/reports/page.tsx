'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, MessageSquare, Smartphone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Pilih kategori laporan yang ingin Anda lihat
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-xl">Ecommerce</CardTitle>
              <CardDescription>
                Laporan penjualan dan analitik produk
              </CardDescription>
            </div>
            <ShoppingCart className="h-8 w-8 text-blue-600" />
          </CardHeader>
          <CardContent>
            <Link href="/admin/reports/ecommerce">
              <Button className="w-full">
                Lihat Laporan Ecommerce
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-xl">Panel SMM</CardTitle>
              <CardDescription>
                Laporan performa media sosial
              </CardDescription>
            </div>
            <MessageSquare className="h-8 w-8 text-green-600" />
          </CardHeader>
          <CardContent>
            <Link href="/admin/reports/panel-smm">
              <Button className="w-full">
                Lihat Laporan SMM
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-xl">Pulsa PPOB</CardTitle>
              <CardDescription>
                Laporan transaksi dan komisi
              </CardDescription>
            </div>
            <Smartphone className="h-8 w-8 text-purple-600" />
          </CardHeader>
          <CardContent>
            <Link href="/admin/reports/pulsa-ppob">
              <Button className="w-full">
                Lihat Laporan PPOB
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}