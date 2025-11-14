'use client';

import { useRef, useEffect, useState } from 'react';

const processSteps = [
  {
    icon: '1️⃣',
    title: 'Discovery Call',
    description: 'Find out if we\'re a good fit for one another. No promises, we\'re not for everyone.'
  },
  {
    icon: '2️⃣',
    title: 'Provide Materials',
    description: 'Share your content, images, branding, and any assets you have. Don\'t have everything? No worries.'
  },
  {
    icon: '3️⃣',
    title: 'We Build',
    description: 'Our team gets to work using development tools to create your custom website efficiently without cutting corners.'
  },
  {
    icon: '4️⃣',
    title: 'Review & Launch',
    description: 'You review, we refine, and then we launch. Typically within 72 hours of receiving all materials. Then we celebrate your success!'
  }
];

export default function Process() {
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
    <section id="how-it-works" className="py-24 px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`section-header text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Four simple steps to get your website live
          </p>
        </div>
        
        <div className="value-props grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`value-card reveal ${isVisible ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-icon text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl mb-4 text-primary">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}