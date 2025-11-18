'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
          }, 800);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen fixed inset-0 flex flex-col items-center justify-center z-[10000] bg-black">
      {/* Abundant Orange Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-orange-500 opacity-0"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 ' + (Math.random() * 10 + 5) + 'px rgba(251, 146, 60, 0.8)',
              animation: `orangeSparkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
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