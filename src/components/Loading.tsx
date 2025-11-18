'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20; // Slower progress for longer display
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
          }, 1500); // Longer display time before hiding
          return 100;
        }
        return newProgress;
      });
    }, 300); // Slower intervals for longer loading

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen fixed inset-0 flex flex-col items-center justify-center z-[10000] transition-all duration-1000 ease-in-out bg-black">
      {/* Rolls Royce Starlight Headliner Effect */}
      <div className="absolute inset-0 overflow-hidden" id="starfield">
        {/* Large background stars */}
        {[...Array(150)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 ' + (Math.random() * 8 + 4) + 'px rgba(255, 255, 255, 0.8)',
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 4 + 's',
            }}
          />
        ))}
        
        {/* Medium blue stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute rounded-full"
            style={{
              background: 'var(--primary)',
              width: Math.random() * 2.5 + 0.5 + 'px',
              height: Math.random() * 2.5 + 0.5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 ' + (Math.random() * 6 + 3) + 'px rgba(200, 121, 65, 0.9)',
              animation: `twinkle ${Math.random() * 3 + 1.5}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}

        {/* Small sparkling stars */}
        {[...Array(300)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute rounded-full bg-white opacity-80"
            style={{
              width: Math.random() * 1.5 + 0.2 + 'px',
              height: Math.random() * 1.5 + 0.2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 ' + (Math.random() * 4 + 2) + 'px rgba(255, 255, 255, 1)',
              animation: `sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: 'rotate(' + Math.random() * 360 + 'deg)',
              animation: `shoot ${Math.random() * 8 + 4}s linear infinite`,
              animationDelay: Math.random() * 10 + 's',
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10"></div>

      <div className="relative z-20 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="loading-logo flex items-center justify-center animate-pulse">
          <Image 
            src="/hlpfl-logo-full.svg"
            alt="HLPFL - Web Development"
            width={280}
            height={112}
            className="hover:scale-105 transition-transform duration-300 max-w-[90vw] h-auto"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(200, 121, 65, 0.6))',
            }}
          />
        </div>

        {/* Loading Bar */}
        <div className="w-[400px] h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500 ease-in-out"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(200, 121, 65, 0.8)'
            }}
          />
        </div>

        {/* Percentage */}
        <div className="text-2xl text-primary font-semibold animate-pulse">
          {Math.floor(progress)}%
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes shoot {
          0% {
            transform: translateX(-100px) rotate(-45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}