import type { Metadata } from "next";
import { Geist, Geist_Mono, Creepster } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LoadingProvider } from "@/components/providers/loading-provider";
import { LiveChatIcon } from "@/components/shared/live-chat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const creepster = Creepster({
  variable: "--font-creepster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "E-Commerce All-in-One | Rekber, SMM & PPOB Terpercaya",
  description: "Platform lengkap untuk rekening bersama, social media marketing, dan PPOB. Solusi bisnis digital yang aman dan terpercaya.",
  keywords: "rekber, smm panel, ppob, pulsa, e-commerce, bisnis digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${creepster.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LoadingProvider>
            {children}
            <LiveChatIcon />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
