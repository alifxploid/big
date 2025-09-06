"use client";

import { Moon, SunDim } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // More accurate mobile detection using User Agent
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileUA || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const changeTheme = async () => {
    if (!buttonRef.current || isTransitioning) return;

    const newTheme = theme === "dark" ? "light" : "dark";

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Use simple transition only for reduced motion preference
    if (prefersReducedMotion || !document.startViewTransition) {
      setIsTransitioning(true);
      setTheme(newTheme);
      setTimeout(() => setIsTransitioning(false), 400);
      return;
    }

    // Add debouncing to prevent spam clicks
    setIsTransitioning(true);

    try {
      await document.startViewTransition(() => {
        flushSync(() => {
          setTheme(newTheme);
        });
      }).ready;

      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const y = top + height / 2;
      const x = left + width / 2;

      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      // Optimized animation parameters for mobile vs desktop
      const animationConfig = {
        duration: isMobile ? 300 : 500,
        easing: isMobile ? "ease-out" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        pseudoElement: "::view-transition-new(root)" as const,
      };

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRad}px at ${x}px ${y}px)`,
          ],
        },
        animationConfig,
      );

      // Reset transition state after animation completes
      setTimeout(() => setIsTransitioning(false), animationConfig.duration + 50);
    } catch (error) {
      // Fallback to simple theme change if animation fails
      setTheme(newTheme);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };
  
  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button 
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-8 w-8",
          className
        )}
        aria-label="Switch theme"
      >
        <Moon className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button 
      ref={buttonRef} 
      onClick={changeTheme} 
      disabled={isTransitioning}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-8 w-8",
        isMobile ? "transition-transform duration-300 ease-out" : "transition-all duration-300",
        isTransitioning && (isMobile ? "scale-95" : "scale-95 opacity-70"),
        className
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <SunDim className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};
