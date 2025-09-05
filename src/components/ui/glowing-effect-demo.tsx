"use client";

import { Shield, CreditCard, Users, Smartphone, Zap, Instagram, Youtube } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function GlowingEffectDemo() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check if mobile device
    setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Shield className="h-4 w-4" />}
        title="Rekening Bersama Aman"
        description="Transaksi terlindungi dengan sistem keamanan berlapis dan monitoring 24/7."
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<CreditCard className="h-4 w-4" />}
        title="PPOB Lengkap"
        description="Bayar tagihan listrik, air, internet, dan pulsa dengan mudah dalam satu platform."
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/8]"
        icon={<Instagram className="h-4 w-4" />}
        title="Instagram & Facebook Marketing"
        description="Tingkatkan followers, likes, dan engagement."
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />
      <GridItem
        area="md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/8]"
        icon={<Youtube className="h-4 w-4" />}
        title="TikTok & YouTube Marketing"
        description="Raih lebih banyak views, subscribers, dan like"
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Smartphone className="h-4 w-4" />}
        title="Mobile Friendly"
        description="Akses semua fitur dengan mudah melalui aplikasi mobile yang responsif dan cepat."
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />
      <GridItem
        area="md:[grid-area:4/1/5/13] xl:[grid-area:2/8/3/13]"
        icon={<Zap className="h-4 w-4" />}
        title="Fitur Lainnya"
        description="Layanan tambahan super power untuk mengoptimalkan bisnis digital Anda dengan teknologi terdepan."
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  prefersReducedMotion: boolean;
  isMobile: boolean;
}

const GridItem = ({ area, icon, title, description, prefersReducedMotion, isMobile }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={prefersReducedMotion ? 20 : 40}
          glow={!prefersReducedMotion && !isMobile}
          disabled={prefersReducedMotion || isMobile}
          proximity={isMobile ? 32 : 64}
          inactiveZone={0.02}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};