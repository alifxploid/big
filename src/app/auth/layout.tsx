import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-0 h-full w-full fill-neutral-400/20 stroke-neutral-400/20 dark:fill-neutral-600/20 dark:stroke-neutral-600/20"
        )}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}