'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function FinalCTA() {
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
    <section className="py-16 px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`bg-dark-light rounded-3xl reveal ${isVisible ? 'active' : ''}`}>
          <div className="max-w-4xl mx-auto text-center py-16 px-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Ready to Launch Your Website?
            </h2>
            <p className="text-xl text-text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's have a free 30-minute discovery call to discuss your vision and see if we're a good fit. No pressure, no sales pitch – just honest conversation about your goals.
            </p>
            <Link href="/contact" className="cta-button text-lg px-10 py-4">
              Get My Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}