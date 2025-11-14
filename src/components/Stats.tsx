'use client';

import { useRef, useEffect, useState } from 'react';

const stats = [
  { number: '72hrs', label: 'Average Turnaround' },
  { number: '100%', label: 'US-Based Work' },
  { number: '6+', label: 'Years Experience' },
  { number: '20+', label: 'Ventures Built' }
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`stats bg-dark-light py-16 rounded-3xl reveal ${isVisible ? 'active' : ''}`} ref={ref}>
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="stat-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-5xl text-primary mb-2 font-bold">{stat.number}</h3>
                <p className="text-text-muted text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}