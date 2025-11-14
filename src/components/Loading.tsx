'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 30;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen" id="loadingScreen">
      {/* Loading Particles Background */}
      <div className="absolute inset-0 overflow-hidden z-1" id="loadingParticles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-primary to-primary-light rounded-full opacity-80"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-2 flex flex-col items-center gap-8">
        {/* Logo - Placeholder for now */}
        <div className="loading-logo flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white text-4xl font-bold">
            HLPFL
          </div>
        </div>

        {/* Loading Bar */}
        <div className="loading-bar-container">
          <div 
            className="loading-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="loading-percentage">
          {Math.floor(progress)}%
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}