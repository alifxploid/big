"use client";

import React from "react";

interface FloatingPathsProps {
  position?: number;
}

export default function FloatingPaths({ position = 1 }: FloatingPathsProps) {
  // Generate simple paths with CSS animations
  const paths = Array.from({ length: 8 }, (_, i) => {
    const delay = i * 0.5;
    const duration = 3 + (i % 3);
    const opacity = 0.1 + (i % 3) * 0.05;
    
    return {
      id: i,
      d: `M${50 + i * 30},${100 + i * 20} Q${200 + i * 40},${50 + i * 30} ${350 + i * 20},${150 + i * 25}`,
      delay,
      duration,
      opacity
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: position === -1 ? 'scaleX(-1)' : 'none'
        }}
      >
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-500/20"
            style={{
              opacity: path.opacity,
              animation: `float-path ${path.duration}s ease-in-out infinite`,
              animationDelay: `${path.delay}s`
            }}
          />
        ))}
      </svg>
      
      <style jsx>{`
        @keyframes float-path {
          0%, 100% {
            opacity: 0.1;
            transform: translateY(0px);
          }
          50% {
            opacity: 0.3;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}