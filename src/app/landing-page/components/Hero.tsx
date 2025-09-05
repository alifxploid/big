'use client'

import Link from 'next/link'

import { TypingAnimation } from '@/components/magicui/typing-animation'
import { ArrowRight } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo'

const transitionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      y: -100,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.1,
        duration: 0.5,
      },
    },
  },
}

export default function Hero() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-white dark:bg-neutral-950">
      {/* Background Paths */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths title="" showContent={false} />
      </div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/50 to-background" />
      <section id="hero" className="relative z-10">
        <div className="relative pt-24 md:pt-36">

          <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 relative z-20">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href="#features"
                  className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                  <span className="text-foreground text-sm">Platform All-in-One untuk Bisnis Digital</span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
    
                <TypingAnimation
                  className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold"
                  duration={100}
                  delay={1000}
                >
                  Platform All-in-One untuk Bisnis Digital
                </TypingAnimation>
                <p
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                  Solusi lengkap untuk rekening bersama, social media marketing, dan PPOB. Tingkatkan bisnis Anda dengan platform yang aman, cepat, dan terpercaya.
                </p>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  item: transitionVariants.item,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                <div
                  key={1}
                  className="bg-foreground/10 rounded-[14px] border p-0.5">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base">
                    <Link href="/auth/register">
                      <span className="text-nowrap">Mulai Sekarang</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Link href="#features">
                    <span className="text-nowrap">Pelajari Lebih Lanjut</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            item: transitionVariants.item,
          }}>
          <div className="relative mt-8 overflow-hidden px-4 sm:mr-0 sm:mt-12 md:mt-20">
            <div
              aria-hidden
              className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 sm:p-4 shadow-lg shadow-zinc-950/15 ring-1">
              {/* Glowing Effect Demo Cards */}
              <div className="p-4 sm:p-8">
                <GlowingEffectDemo />
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </section>
    </main>
  )
}