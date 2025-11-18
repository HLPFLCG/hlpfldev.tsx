'use client';

// Deterministic arrays to prevent hydration mismatches
const starData = Array.from({ length: 30 }, (_, i) => ({
  width: ((i % 2) + 0.5),
  height: (((i + 1) % 2) + 0.5),
  left: ((i * 3.33) % 100),
  top: ((i * 2.5) % 100),
  blur: ((i % 3) + 1),
  duration: ((i % 3) + 3),
  delay: ((i % 5) + 0.5),
}));

export default function Starfield() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      {/* Simple subtle background effect - minimal orange sparkles */}
      {starData.map((star, i) => (
        <div
          key={`bg-sparkle-${i}`}
          className="absolute rounded-full opacity-30"
          style={{
            width: star.width + 'px',
            height: star.height + 'px',
            left: star.left + '%',
            top: star.top + '%',
            background: '#fb923c',
            boxShadow: `0 0 ${star.blur}px rgba(251, 146, 60, 0.4)`,
            animation: `subtleTwinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: star.delay + 's',
          }}
        />
      ))}

      <style jsx>{`
        @keyframes subtleTwinkle {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}