'use client';

import { useEffect, useState } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import Image from 'next/image';

// Deterministic arrays to prevent hydration mismatches
const sparkleData = Array.from({ length: 50 }, (_, i) => ({
  width: (i % 4) + 1,
  height: ((i + 1) % 4) + 1,
  left: ((i * 2) % 100),
  top: ((i * 3) % 100),
  blur: ((i % 6) + 5),
  duration: ((i % 3) + 2),
  delay: ((i % 3) + 0.5),
}));

export default function Loading() {
  const { isLoading, setLoading } = useLoading();
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoading || !mounted) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15; // Safe here since it's client-side only
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 800);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, setLoading, mounted]);

  if (!isLoading || !mounted) return null;

  return (
    <div className="loading-screen fixed inset-0 flex flex-col items-center justify-center z-[10000] bg-black">
      {/* Abundant Orange Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {sparkleData.map((sparkle, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-orange-500 opacity-0"
            style={{
              width: sparkle.width + 'px',
              height: sparkle.height + 'px',
              left: sparkle.left + '%',
              top: sparkle.top + '%',
              boxShadow: `0 0 ${sparkle.blur}px rgba(251, 146, 60, 0.8)`,
              animation: `orangeSparkle ${sparkle.duration}s ease-in-out infinite`,
              animationDelay: sparkle.delay + 's',
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <Image 
          src="/hlpfl-logo-full.svg"
          alt="HLPFL"
          width={300}
          height={120}
          className="loading-logo max-w-[80vw] h-auto"
        />
        
        {/* Simple loading text */}
        <div className="text-2xl font-bold text-orange-500">
          {Math.floor(progress)}%
        </div>
      </div>

      <style jsx>{`
        @keyframes orangeSparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}