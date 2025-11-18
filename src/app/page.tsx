'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    {
      icon: "⚡",
      title: "72-Hour Delivery",
      description: "When materials are provided"
    },
    {
      icon: "💰",
      title: "Founder Pricing",
      description: "Sliding scale for your budget"
    },
    {
      icon: "🇺🇸",
      title: "100% US-Based",
      description: "No outsourcing ever"
    },
    {
      icon: "🔍",
      title: "Full Transparency",
      description: "No hidden fees"
    },
    {
      icon: "🤝",
      title: "Real Partnership",
      description: "We grow with you"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center text-center py-32 px-8 relative overflow-hidden bg-gradient-to-br from-dark-light to-dark/50">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className={`hero-content max-w-4xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo */}
          <div className="mb-8">
            <Image 
              src="/hlpfl-logo-full.svg"
              alt="HLPFL Logo"
              width={200}
              height={80}
              className="mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold mb-6 leading-tight">
            <span className="text-text block">Quality Websites</span>
            <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              First-Time Founders Can Afford
            </span>
          </h1>

          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional web development without the agency prices. 100% US-based work, 
            transparent pricing, and 72-hour delivery. Your success is our priority.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/contact" className="cta-button">
              Get Your Free Quote
            </Link>
            <Link href="/portfolio" className="secondary-button">
              See Our Work
            </Link>
          </div>

          {/* Key highlights */}
          <div className="mt-16 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-2xl">🚀</span>
              <span className="text-primary font-semibold">50+ Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-2xl">⭐</span>
              <span className="text-primary font-semibold">98% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-2xl">👨‍💼</span>
              <span className="text-primary font-semibold">6+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:translate-y-1.5 z-10"
          onClick={() => scrollToSection('#trust-badges')}
        >
          <span className="text-xs tracking-widest text-text-muted font-medium">SCROLL</span>
          <div className="w-6 h-6 border-l-2 border-b-2 border-text-muted transform -rotate-45 animate-bounce"></div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div id="trust-badges" className="bg-dark-light py-16 border-t border-primary/20 border-b border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Why First-Time Founders Choose HLPFL</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We built our service around the challenges founders actually face
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="text-primary font-semibold mb-2">{badge.title}</h3>
                <p className="text-text-muted text-sm">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Built for Founders, by Founders
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                Our 24-year-old founder started HLPFL after experiencing firsthand how expensive and complicated web development can be for first-time entrepreneurs. We understand your journey because we've lived it.
              </p>
              <p className="text-text-muted mb-6 leading-relaxed">
                No confusing jargon, no surprise fees, no outsourcing to cheap labor markets. Just honest, quality work from people who genuinely want to see you succeed.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-text">Prices you can actually afford</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-text">72-hour delivery guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-text">100% Grand Rapids, MI based</span>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-dark-light rounded-2xl border border-primary/20 p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                    <span className="text-text-muted">Founded</span>
                    <span className="text-primary font-semibold">2018</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                    <span className="text-text-muted">Projects Delivered</span>
                    <span className="text-primary font-semibold">100+</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                    <span className="text-text-muted">Team Size</span>
                    <span className="text-primary font-semibold">8 Experts</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                    <span className="text-text-muted">Avg. Project Time</span>
                    <span className="text-primary font-semibold">72 Hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Client Satisfaction</span>
                    <span className="text-primary font-semibold">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">What We Build</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Everything you need to launch and grow your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Custom Websites",
                description: "Responsive, fast, and SEO-optimized websites built to convert visitors into customers.",
                price: "From $1,999"
              },
              {
                title: "E-commerce Stores",
                description: "Complete online stores with payment processing, inventory management, and analytics.",
                price: "From $2,999"
              },
              {
                title: "Web Applications",
                description: "Custom web applications with advanced functionality and database integration.",
                price: "From $4,999"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`bg-dark-light rounded-2xl border border-primary/20 p-6 transition-all duration-700 hover:-translate-y-2 hover:border-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 5) * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted mb-4">{service.description}</p>
                <p className="text-primary font-bold">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="cta-button inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">
            Ready to Launch Your Dream Website?
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Join 100+ founders who've trusted HLPFL with their online presence. 
            No pressure, no obligations—just a free conversation about your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href="/contact" className="cta-button">
              Get Your Free Quote
            </Link>
            <div className="text-text-muted">
              or call us at <span className="text-primary font-semibold">+1 (234) 567-890</span>
            </div>
          </div>

          <div className="bg-dark-light rounded-2xl p-6 border border-primary/20 max-w-2xl mx-auto">
            <p className="text-primary font-semibold mb-2">🎉 Limited Time Offer</p>
            <p className="text-text-muted">
              Save 20% on your first project when you book this week. Only 3 spots remaining.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes scrollBounce {
          0%, 100% { transform: rotate(-45deg) translateY(0); }
          50% { transform: rotate(-45deg) translateY(10px); }
        }

        .animate-bounce {
          animation: scrollBounce 2s infinite;
        }
      `}</style>
    </div>
  );
}