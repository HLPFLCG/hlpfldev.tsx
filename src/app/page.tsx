'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  const [reveals, setReveals] = useState<NodeListOf<Element> | null>(null);
  const [faqItems, setFaqItems] = useState<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Initialize reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    setReveals(revealElements);
    
    // Initialize FAQ items
    const faqElements = document.querySelectorAll('.faq-item');
    setFaqItems(faqElements);

    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const toggleFaq = (index: number) => {
    if (!faqItems) return;
    const item = faqItems[index];
    if (item) {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Floating Particles */}
      <div className="particles fixed inset-0 pointer-events-none z-1" id="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle absolute"
            style={{
              width: '4px',
              height: '4px',
              background: 'var(--primary)',
              borderRadius: '50%',
              opacity: '0.3',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: Math.random() * 20 + 's',
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center text-left py-32 px-8 relative overflow-hidden" id="home">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/15 to-transparent rounded-full animate-pulse" />
        
        <div className="hero-content max-w-6xl relative z-2 text-left reveal">
          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold mb-8 leading-tight">
            <span className="text-text block">Your First Website</span>
            <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Shouldn't Break the Bank</span>
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-text-muted mb-12 max-w-2xl leading-relaxed">
            High-quality websites for first-time founders at prices you can actually afford. No outsourcing, full transparency, 100% US-based work.
          </p>
          <div className="hero-cta flex gap-6 flex-wrap">
            <a href="/contact" className="cta-button">Get Your Free Quote</a>
            <button 
              onClick={() => scrollToSection('#value-props')}
              className="secondary-button"
            >
              See How It Works
            </button>
          </div>
        </div>

        <div 
          className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:translate-y-1.5 z-10"
          onClick={() => scrollToSection('#trust-badges')}
        >
          <span className="scroll-text text-xs tracking-widest text-text-muted font-medium">SCROLL</span>
          <div className="scroll-arrow w-6 h-6 border-l-2 border-b-2 border-text-muted transform -rotate-45 animate-bounce" />
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="trust-badges bg-dark-light py-8 border-t border-primary/20 border-b border-primary/20">
        <div className="trust-badges-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div className="trust-badge flex flex-col items-center gap-2">
            <div className="trust-badge-icon text-4xl mb-2">⚡</div>
            <h3 className="text-primary text-lg mb-1">72-Hour Delivery*</h3>
            <p className="text-text-muted text-sm">Efficient turnaround guaranteed</p>
          </div>
          <div className="trust-badge flex flex-col items-center gap-2">
            <div className="trust-badge-icon text-4xl mb-2">💰</div>
            <h3 className="text-primary text-lg mb-1">Founder Friendly Pricing</h3>
            <p className="text-text-muted text-sm">Sliding scale for your budget</p>
          </div>
          <div className="trust-badge flex flex-col items-center gap-2">
            <div className="trust-badge-icon text-4xl mb-2">🇺🇸</div>
            <h3 className="text-primary text-lg mb-1">100% US-Based</h3>
            <p className="text-text-muted text-sm">No international outsourcing - ever</p>
          </div>
          <div className="trust-badge flex flex-col items-center gap-2">
            <div className="trust-badge-icon text-4xl mb-2">🤝</div>
            <h3 className="text-primary text-lg mb-1">Full Transparency</h3>
            <p className="text-text-muted text-sm">No hidden fees or surprises</p>
          </div>
          <div className="trust-badge flex flex-col items-center gap-2">
            <div className="trust-badge-icon text-4xl mb-2">🚀</div>
            <h3 className="text-primary text-lg mb-1">Real Partnership</h3>
            <p className="text-text-muted text-sm">We grow with your success</p>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <section id="value-props" className="py-24 px-8 relative z-2">
        <div className="max-w-7xl mx-auto">
          <div className="section-header text-center mb-16 reveal">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Why Choose HLPFL?
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              We understand the challenges first-time founders face. That's why we've built a service that actually works for you.
            </p>
          </div>
          <div className="value-props grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="value-card reveal">
              <div className="value-icon text-5xl mb-4">⚡</div>
              <h3 className="text-2xl mb-4 text-primary">Lightning-Fast Delivery</h3>
              <p className="text-text-muted leading-relaxed">
                Get your website live in 72 hours when you provide all materials. We use AI-powered development to deliver quality at speed without compromising on excellence.
              </p>
            </div>
            <div className="value-card reveal">
              <div className="value-icon text-5xl mb-4">💰</div>
              <h3 className="text-2xl mb-4 text-primary">Actually Affordable</h3>
              <p className="text-text-muted leading-relaxed">
                Sliding scale pricing based on your budget. We believe every founder deserves a professional website, regardless of their current financial situation.
              </p>
            </div>
            <div className="value-card reveal">
              <div className="value-icon text-5xl mb-4">🇺🇸</div>
              <h3 className="text-2xl mb-4 text-primary">100% US-Based Work</h3>
              <p className="text-text-muted leading-relaxed">
                No outsourcing, no language barriers, no timezone issues. All work is done right here in Grand Rapids, MI by our dedicated team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-100px) translateX(50px); }
          50% { transform: translateY(-200px) translateX(-50px); }
          75% { transform: translateY(-100px) translateX(100px); }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 0.5; 
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1); 
            opacity: 0.8; 
          }
        }

        @keyframes scrollBounce {
          0%, 100% { transform: rotate(-45deg) translateY(0); }
          50% { transform: rotate(-45deg) translateY(10px); }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .animate-bounce {
          animation: scrollBounce 2s infinite;
        }

        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0.3;
          animation: float 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}