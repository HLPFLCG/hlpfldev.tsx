'use client';

export default function Starfield() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
      {/* Simple subtle background effect - minimal orange sparkles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`bg-sparkle-${i}`}
          className="absolute rounded-full opacity-30"
          style={{
            width: Math.random() * 2 + 0.5 + 'px',
            height: Math.random() * 2 + 0.5 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: '#fb923c',
            boxShadow: '0 0 ' + (Math.random() * 3 + 1) + 'px rgba(251, 146, 60, 0.4)',
            animation: `subtleTwinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's',
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