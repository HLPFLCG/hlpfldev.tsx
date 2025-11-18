'use client';

export default function Starfield() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large background stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 0.5 + 'px',
            height: Math.random() * 2 + 0.5 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            boxShadow: '0 0 ' + (Math.random() * 4 + 2) + 'px rgba(255, 255, 255, 0.6)',
            animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
            animationDelay: Math.random() * 4 + 's',
          }}
        />
      ))}
      
      {/* Medium blue stars */}
      {[...Array(80)].map((_, i) => (
        <div
          key={`medium-${i}`}
          className="absolute rounded-full"
          style={{
            background: 'var(--primary)',
            width: Math.random() * 1.5 + 0.3 + 'px',
            height: Math.random() * 1.5 + 0.3 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            boxShadow: '0 0 ' + (Math.random() * 3 + 1.5) + 'px rgba(200, 121, 65, 0.7)',
            animation: `twinkle ${Math.random() * 3 + 1.5}s ease-in-out infinite`,
            animationDelay: Math.random() * 3 + 's',
          }}
        />
      ))}

      {/* Small sparkling stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={`small-${i}`}
          className="absolute rounded-full bg-white opacity-60"
          style={{
            width: Math.random() * 1 + 0.1 + 'px',
            height: Math.random() * 1 + 0.1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            boxShadow: '0 0 ' + (Math.random() * 2 + 1) + 'px rgba(255, 255, 255, 0.8)',
            animation: `sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`,
            animationDelay: Math.random() * 2 + 's',
          }}
        />
      ))}

      {/* Occasional shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
          style={{
            width: Math.random() * 60 + 30 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            transform: 'rotate(' + Math.random() * 360 + 'deg)',
            animation: `shoot ${Math.random() * 12 + 6}s linear infinite`,
            animationDelay: Math.random() * 15 + 's',
          }}
        />
      ))}

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