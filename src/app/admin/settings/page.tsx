"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Settings, 
  Globe, 
  CreditCard, 
  Share2, 
  Smartphone, 
  Mail, 
  Shield, 
  Upload,
  Save,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle
} from "lucide-react"

interface WebsiteSettings {
  siteName: string
  siteTitle: string
  siteDescription: string
  metaKeywords: string
  logoUrl: string
  faviconUrl: string
  contactEmail: string
  contactPhone: string
  address: string
}

interface TripaySettings {
  apiKey: string
  merchantCode: string
  privateKey: string
  callbackUrl: string
  isProduction: boolean
}

interface SMMSettings {
  apiEndpoint: string
  apiKey: string
  providerId: string
  webhookUrl: string
  isActive: boolean
}

interface PPOBSettings {
  providerName: string
  apiEndpoint: string
  username: string
  apiKey: string
  webhookUrl: string
  isActive: boolean
}

interface EmailSettings {
  smtpHost: string
  smtpPort: string
  smtpUsername: string
  smtpPassword: string
  fromEmail: string
  fromName: string
  enableNotifications: boolean
}

interface SecuritySettings {
  sessionTimeout: string
  maxLoginAttempts: string
  passwordMinLength: string
  requireSpecialChars: boolean
  requireNumbers: boolean
  enableTwoFactor: boolean
}

export default function SettingsPage() {
  const [websiteSettings, setWebsiteSettings] = useState<WebsiteSettings>({
    siteName: "My Website",
    siteTitle: "Welcome to My Website",
    siteDescription: "Deskripsi website Anda",
    metaKeywords: "website, ecommerce, smm, ppob",
    logoUrl: "",
    faviconUrl: "",
    contactEmail: "admin@website.com",
    contactPhone: "+62812345678",
    address: "Jakarta, Indonesia"
  })

  const [tripaySettings, setTripaySettings] = useState<TripaySettings>({
    apiKey: "",
    merchantCode: "",
    privateKey: "",
    callbackUrl: "",
    isProduction: false
  })

  const [smmSettings, setSmmSettings] = useState<SMMSettings>({
    apiEndpoint: "",
    apiKey: "",
    providerId: "",
    webhookUrl: "",
    isActive: false
  })

  const [ppobSettings, setPpobSettings] = useState<PPOBSettings>({
    providerName: "",
    apiEndpoint: "",
    username: "",
    apiKey: "",
    webhookUrl: "",
    isActive: false
  })

  const [emailSettings, setEmailSettings] = useState<EmailSettings>({
    smtpHost: "",
    smtpPort: "587",
    smtpUsername: "",
    smtpPassword: "",
    fromEmail: "",
    fromName: "",
    enableNotifications: true
  })

  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    sessionTimeout: "30",
    maxLoginAttempts: "5",
    passwordMinLength: "8",
    requireSpecialChars: true,
    requireNumbers: true,
    enableTwoFactor: false
  })

  const [showPasswords, setShowPasswords] = useState({
    tripayPrivateKey: false,
    smmApiKey: false,
    ppobApiKey: false,
    smtpPassword: false
  })

  const [saveStatus, setSaveStatus] = useState<string | null>(null)

  const handleSaveSettings = async (section: string) => {
    setSaveStatus(`Menyimpan pengaturan ${section}...`)
    
    // Simulasi API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSaveStatus(`Pengaturan ${section} berhasil disimpan!`)
    setTimeout(() => setSaveStatus(null), 3000)
  }

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Pengaturan Sistem</h1>
          <p className="text-muted-foreground">Kelola konfigurasi website dan integrasi API</p>
        </div>
      </div>

      {saveStatus && (
        <Alert className="mb-6">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>{saveStatus}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="website" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="website" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Website
          </TabsTrigger>
          <TabsTrigger value="tripay" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Tripay
          </TabsTrigger>
          <TabsTrigger value="smm" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Panel SMM
          </TabsTrigger>
          <TabsTrigger value="ppob" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            Pulsa PPOB
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Keamanan
          </TabsTrigger>
        </TabsList>

        {/* Website Settings */}
        <TabsContent value="website">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Pengaturan Website
              </CardTitle>
              <CardDescription>
                Konfigurasi informasi dasar website dan branding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Nama Website</Label>
                  <Input
                    id="siteName"
                    value={websiteSettings.siteName}
                    onChange={(e) => setWebsiteSettings(prev => ({ ...prev, siteName: e.target.value }))}
                    placeholder="Masukkan nama website"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteTitle">Judul Website</Label>
                  <Input
                    id="siteTitle"
                    value={websiteSettings.siteTitle}
                    onChange={(e) => setWebsiteSettings(prev => ({ ...prev, siteTitle: e.target.value }))}
                    placeholder="Masukkan judul website"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteDescription">Deskripsi Website</Label>
                <Textarea
                  id="siteDescription"
                  value={websiteSettings.siteDescription}
                  onChange={(e) => setWebsiteSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
                  placeholder="Masukkan deskripsi website"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Meta Keywords</Label>
                <Input
                  id="metaKeywords"
                  value={websiteSettings.metaKeywords}
                  onChange={(e) => setWebsiteSettings(prev => ({ ...prev, metaKeywords: e.target.value }))}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="logoUrl">URL Logo Website</Label>
                  <div className="flex gap-2">
                    <Input
                      id="logoUrl"
                      value={websiteSettings.logoUrl}
                      onChange={(e) => setWebsiteSettings(prev => ({ ...prev, logoUrl: e.target.value }))}
                      placeholder="https://example.com/logo.png"
                    />
                    <Button variant="outline" size="icon">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faviconUrl">URL Favicon</Label>
                  <div className="flex gap-2">
                    <Input
                      id="faviconUrl"
                      value={websiteSettings.faviconUrl}
                      onChange={(e) => setWebsiteSettings(prev => ({ ...prev, faviconUrl: e.target.value }))}
                      placeholder="https://example.com/favicon.ico"
                    />
                    <Button variant="outline" size="icon">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email Kontak</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={websiteSettings.contactEmail}
                    onChange={(e) => setWebsiteSettings(prev => ({ ...prev, contactEmail: e.target.value }))}
                    placeholder="admin@website.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Nomor Telepon</Label>
                  <Input
                    id="contactPhone"
                    value={websiteSettings.contactPhone}
                    onChange={(e) => setWebsiteSettings(prev => ({ ...prev, contactPhone: e.target.value }))}
                    placeholder="+62812345678"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Alamat</Label>
                <Textarea
                  id="address"
                  value={websiteSettings.address}
                  onChange={(e) => setWebsiteSettings(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Masukkan alamat lengkap"
                  rows={2}
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSaveSettings('Website')} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Simpan Pengaturan Website
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tripay Settings */}
        <TabsContent value="tripay">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Pengaturan Tripay Payment Gateway
              </CardTitle>
              <CardDescription>
                Konfigurasi API Tripay untuk payment gateway
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Mode Produksi</Label>
                  <p className="text-sm text-muted-foreground">Aktifkan untuk menggunakan API produksi</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={tripaySettings.isProduction ? "default" : "secondary"}>
                    {tripaySettings.isProduction ? "Produksi" : "Sandbox"}
                  </Badge>
                  <Switch
                    checked={tripaySettings.isProduction}
                    onCheckedChange={(checked) => setTripaySettings(prev => ({ ...prev, isProduction: checked }))}
                  />
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tripayApiKey">API Key</Label>
                  <Input
                    id="tripayApiKey"
                    value={tripaySettings.apiKey}
                    onChange={(e) => setTripaySettings(prev => ({ ...prev, apiKey: e.target.value }))}
                    placeholder="Masukkan API Key Tripay"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="merchantCode">Merchant Code</Label>
                  <Input
                    id="merchantCode"
                    value={tripaySettings.merchantCode}
                    onChange={(e) => setTripaySettings(prev => ({ ...prev, merchantCode: e.target.value }))}
                    placeholder="Masukkan Merchant Code"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tripayPrivateKey">Private Key</Label>
                <div className="relative">
                  <Input
                    id="tripayPrivateKey"
                    type={showPasswords.tripayPrivateKey ? "text" : "password"}
                    value={tripaySettings.privateKey}
                    onChange={(e) => setTripaySettings(prev => ({ ...prev, privateKey: e.target.value }))}
                    placeholder="Masukkan Private Key"
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => togglePasswordVisibility('tripayPrivateKey')}
                  >
                    {showPasswords.tripayPrivateKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="callbackUrl">Callback URL</Label>
                <Input
                  id="callbackUrl"
                  value={tripaySettings.callbackUrl}
                  onChange={(e) => setTripaySettings(prev => ({ ...prev, callbackUrl: e.target.value }))}
                  placeholder="https://yourwebsite.com/api/tripay/callback"
                />
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Pastikan callback URL sudah dikonfigurasi di dashboard Tripay dan dapat diakses dari internet.
                </AlertDescription>
              </Alert>

              <div className="flex justify-end">
                <Button onClick={() => handleSaveSettings('Tripay')} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Simpan Pengaturan Tripay
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SMM Panel Settings */}
        <TabsContent value="smm">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Pengaturan Panel SMM
              </CardTitle>
              <CardDescription>
                Konfigurasi API untuk layanan Social Media Marketing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Status Panel SMM</Label>
                  <p className="text-sm text-muted-foreground">Aktifkan untuk menggunakan layanan SMM</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={smmSettings.isActive ? "default" : "secondary"}>
                    {smmSettings.isActive ? "Aktif" : "Nonaktif"}
                  </Badge>
                  <Switch
                    checked={smmSettings.isActive}
                    onCheckedChange={(checked) => setSmmSettings(prev => ({ ...prev, isActive: checked }))}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="smmApiEndpoint">API Endpoint</Label>
                <Input
                  id="smmApiEndpoint"
                  value={smmSettings.apiEndpoint}
                  onChange={(e) => setSmmSettings(prev => ({ ...prev, apiEndpoint: e.target.value }))}
                  placeholder="https://api.smmProvider.com/v1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smmApiKey">API Key</Label>
                  <div className="relative">
                    <Input
                      id="smmApiKey"
                      type={showPasswords.smmApiKey ? "text" : "password"}
                      value={smmSettings.apiKey}
                      onChange={(e) => setSmmSettings(prev => ({ ...prev, apiKey: e.target.value }))}
                      placeholder="Masukkan API Key SMM"
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => togglePasswordVisibility('smmApiKey')}
                    >
                      {showPasswords.smmApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="providerId">Provider ID</Label>
                  <Input
                    id="providerId"
                    value={smmSettings.providerId}
                    onChange={(e) => setSmmSettings(prev => ({ ...prev, providerId: e.target.value }))}
                    placeholder="Masukkan Provider ID"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="smmWebhookUrl">Webhook URL</Label>
                <Input
                  id="smmWebhookUrl"
                  value={smmSettings.webhookUrl}
                  onChange={(e) => setSmmSettings(prev => ({ ...prev, webhookUrl: e.target.value }))}
                  placeholder="https://yourwebsite.com/api/smm/webhook"
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSaveSettings('Panel SMM')} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Simpan Pengaturan SMM
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PPOB Settings */}
        <TabsContent value="ppob">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Pengaturan Pulsa & PPOB
              </CardTitle>
              <CardDescription>
                Konfigurasi API untuk layanan Pulsa dan Payment Point Online Bank
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Status PPOB</Label>
                  <p className="text-sm text-muted-foreground">Aktifkan untuk menggunakan layanan PPOB</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={ppobSettings.isActive ? "default" : "secondary"}>
                    {ppobSettings.isActive ? "Aktif" : "Nonaktif"}
                  </Badge>
                  <Switch
                    checked={ppobSettings.isActive}
                    onCheckedChange={(checked) => setPpobSettings(prev => ({ ...prev, isActive: checked }))}
                  />
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="providerName">Nama Provider</Label>
                  <Select
                    value={ppobSettings.providerName}
                    onValueChange={(value) => setPpobSettings(prev => ({ ...prev, providerName: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih provider PPOB" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digiflazz">Digiflazz</SelectItem>
                      <SelectItem value="apigames">API Games</SelectItem>
                      <SelectItem value="vip-reseller">VIP Reseller</SelectItem>
                      <SelectItem value="atlantic-pedia">Atlantic Pedia</SelectItem>
                      <SelectItem value="custom">Custom Provider</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ppobApiEndpoint">API Endpoint</Label>
                  <Input
                    id="ppobApiEndpoint"
                    value={ppobSettings.apiEndpoint}
                    onChange={(e) => setPpobSettings(prev => ({ ...prev, apiEndpoint: e.target.value }))}
                    placeholder="https://api.provider.com/v1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ppobUsername">Username</Label>
                  <Input
                    id="ppobUsername"
                    value={ppobSettings.username}
                    onChange={(e) => setPpobSettings(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Masukkan username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ppobApiKey">API Key</Label>
                  <div className="relative">
                    <Input
                      id="ppobApiKey"
                      type={showPasswords.ppobApiKey ? "text" : "password"}
                      value={ppobSettings.apiKey}
                      onChange={(e) => setPpobSettings(prev => ({ ...prev, apiKey: e.target.value }))}
                      placeholder="Masukkan API Key"
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => togglePasswordVisibility('ppobApiKey')}
                    >
                      {showPasswords.ppobApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ppobWebhookUrl">Webhook URL</Label>
                <Input
                  id="ppobWebhookUrl"
                  value={ppobSettings.webhookUrl}
                  onChange={(e) => setPpobSettings(prev => ({ ...prev, webhookUrl: e.target.value }))}
                  placeholder="https://yourwebsite.com/api/ppob/webhook"
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSaveSettings('Pulsa PPOB')} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Simpan Pengaturan PPOB
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Pengaturan Email
              </CardTitle>
              <CardDescription>
                Konfigurasi SMTP dan notifikasi email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Notifikasi Email</Label>
                  <p className="text-sm text-muted-foreground">Aktifkan untuk menerima notifikasi via email</p>
                </div>
                <Switch
                  checked={emailSettings.enableNotifications}
                  onCheckedChange={(checked) => setEmailSettings(prev => ({ ...prev, enableNotifications: checked }))}
                />
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtpHost">SMTP Host</Label>
                  <Input
                    id="smtpHost"
                    value={emailSettings.smtpHost}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpHost: e.target.value }))}
                    placeholder="smtp.gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input
                    id="smtpPort"
                    value={emailSettings.smtpPort}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpPort: e.target.value }))}
                    placeholder="587"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtpUsername">SMTP Username</Label>
                  <Input
                    id="smtpUsername"
                    value={emailSettings.smtpUsername}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpUsername: e.target.value }))}
                    placeholder="your-email@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPassword">SMTP Password</Label>
                  <div className="relative">
                    <Input
                      id="smtpPassword"
                      type={showPasswords.smtpPassword ? "text" : "password"}
                      value={emailSettings.smtpPassword}
                      onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpPassword: e.target.value }))}
                      placeholder="Masukkan password SMTP"
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => togglePasswordVisibility('smtpPassword')}
                    >
                      {showPasswords.smtpPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fromEmail">From Email</Label>
                  <Input
                    id="fromEmail"
                    type="email"
                    value={emailSettings.fromEmail}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, fromEmail: e.target.value }))}
                    placeholder="noreply@yourwebsite.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromName">From Name</Label>
                  <Input
                    id="fromName"
                    value={emailSettings.fromName}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, fromName: e.target.value }))}
                    placeholder="Your Website Name"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSaveSettings('Email')} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Simpan Pengaturan Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Pengaturan Keamanan
              </CardTitle>
              <CardDescription>
                Konfigurasi kebijakan keamanan dan autentikasi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (menit)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => setSecuritySettings(prev => ({ ...prev, sessionTimeout: e.target.value }))}
                    placeholder="30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxLoginAttempts">Maksimal Percobaan Login</Label>
                  <Input
                    id="maxLoginAttempts"
                    type="number"
                    value={securitySettings.maxLoginAttempts}
                    onChange={(e) => setSecuritySettings(prev => ({ ...prev, maxLoginAttempts: e.target.value }))}
                    placeholder="5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passwordMinLength">Panjang Minimum Password</Label>
                  <Input
                    id="passwordMinLength"
                    type="number"
                    value={securitySettings.passwordMinLength}
                    onChange={(e) => setSecuritySettings(prev => ({ ...prev, passwordMinLength: e.target.value }))}
                    placeholder="8"
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium">Kebijakan Password</h4>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Wajib Karakter Khusus</Label>
                    <p className="text-sm text-muted-foreground">Password harus mengandung karakter khusus (!@#$%^&*)</p>
                  </div>
                  <Switch
                    checked={securitySettings.requireSpecialChars}
                    onCheckedChange={(checked) => setSecuritySettings(prev => ({ ...prev, requireSpecialChars: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Wajib Angka</Label>
                    <p className="text-sm text-muted-foreground">Password harus mengandung minimal satu angka</p>
                  </div>
                  <Switch
                    checked={securitySettings.requireNumbers}
                    onCheckedChange={(checked) => setSecuritySettings(prev => ({ ...prev, requireNumbers: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Aktifkan autentikasi dua faktor untuk keamanan tambahan</p>
                  </div>
                  <Switch
                    checked={securitySettings.enableTwoFactor}
                    onCheckedChange={(checked) => setSecuritySettings(prev => ({ ...prev, enableTwoFactor: checked }))}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSaveSettings('Keamanan')} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Simpan Pengaturan Keamanan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}