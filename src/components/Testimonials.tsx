'use client';

import { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    rating: 5,
    text: "As a first-time founder with limited budget, HLPFL was a lifesaver. They delivered a professional website in 3 days that helped me land my first clients. The sliding scale pricing meant I could actually afford it!",
    author: "Heather",
    company: "Founder, HCJK Collection, www.hcjk.org",
    initials: "SM"
  },
  {
    rating: 5,
    text: "I was skeptical about the 72-hour promise, but they actually delivered! The transparency throughout the process was refreshing. No hidden fees, no surprises, just honest work from a US-based team.",
    author: "James Chen",
    company: "Founder, TechStart",
    initials: "JC"
  },
  {
    rating: 5,
    text: "After two failed business attempts, I was hesitant to invest in a website. HLPFL worked with my budget and created something that actually converts. Three months later, I'm profitable!",
    author: "Marcus Johnson",
    company: "Founder, LocalVibes",
    initials: "MJ"
  },
  {
    rating: 5,
    text: "The AI-powered development didn't mean cookie-cutter results. My website is unique, professional, and exactly what I envisioned. Plus, the support after launch has been incredible.",
    author: "Emily Williams",
    company: "Founder, CreativeCo",
    initials: "EW"
  },
  {
    rating: 5,
    text: "I appreciated the real partnership approach. They didn't just build a website and disappear. They genuinely care about my success and have been there for questions and updates.",
    author: "David Rodriguez",
    company: "Founder, FoodieFinds",
    initials: "DR"
  },
  {
    rating: 5,
    text: "Being 100% US-based made all the difference. Communication was seamless, no timezone issues, and I could actually talk to the people building my site. Worth every penny!",
    author: "Amanda Lee",
    company: "Founder, StyleSpace",
    initials: "AL"
  }
];

export default function Testimonials() {
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
    <section id="testimonials" className="py-24 px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`section-header text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Real feedback from real founders who took the leap
          </p>
        </div>
        
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card reveal ${isVisible ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-rating text-primary text-2xl mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text text-lg leading-relaxed mb-6 text-text">
                "{testimonial.text}"
              </p>
              <div className="testimonial-author flex items-center gap-4">
                <div className="author-avatar w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.initials}
                </div>
                <div className="author-info">
                  <h4 className="text-base mb-1">{testimonial.author}</h4>
                  <p className="text-sm text-text-muted">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}