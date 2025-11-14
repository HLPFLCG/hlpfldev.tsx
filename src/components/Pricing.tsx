'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$_____',
    period: 'One-time payment',
    featured: false,
    features: [
      'Single-page website',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '72-hour delivery',
      '1 round of revisions',
      '30 days support'
    ]
  },
  {
    name: 'Professional',
    price: '$_____',
    period: 'One-time payment',
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      'Up to 5 pages',
      'Custom design',
      'Advanced animations',
      'Contact & booking forms',
      'Full SEO optimization',
      '72-hour delivery',
      '3 rounds of revisions',
      '90 days support',
      'Analytics setup'
    ]
  },
  {
    name: 'Enterprise',
    price: '$_____',
    period: 'One-time payment',
    featured: false,
    features: [
      'Unlimited pages',
      'Premium custom design',
      'Advanced features',
      'E-commerce integration',
      'Custom functionality',
      'Priority delivery',
      'Unlimited revisions',
      '6 months support',
      'Advanced analytics',
      'Ongoing maintenance'
    ]
  }
];

export default function Pricing() {
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
    <section id="pricing" className="py-24 px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`section-header text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Choose the package that fits your needs and budget. No hidden fees, ever.
          </p>
        </div>
        
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.featured ? 'featured' : ''} reveal ${isVisible ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="pricing-badge bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl mb-4">{plan.name}</h3>
              <div className="pricing-price text-4xl font-bold text-primary mb-2">
                {plan.price}
              </div>
              <p className="pricing-period text-text-muted mb-8">
                {plan.period}
              </p>
              <ul className="pricing-features list-none mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="py-3 border-b border-white/10 flex items-center gap-3"
                  >
                    <span className="text-primary font-bold text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="cta-button w-full text-center">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}