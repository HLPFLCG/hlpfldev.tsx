'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: "HLPFL Team",
      role: "Web Development Experts",
      description: "A dedicated team of developers, designers, and strategists passionate about helping first-time founders succeed online.",
      image: "/hlpfl-symbol.svg"
    }
  ];

  const values = [
    {
      title: "Transparency",
      description: "No hidden fees, no outsourcing, complete visibility into our process."
    },
    {
      title: "Affordability",
      description: "Sliding scale pricing that works with your budget, not against it."
    },
    {
      title: "Quality",
      description: "Professional results without cutting corners or compromising on standards."
    },
    {
      title: "Speed",
      description: "72-hour delivery when you provide all materials, without sacrificing quality."
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-text">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[1000] px-8 py-6 transition-all duration-300 ease-in-out bg-dark/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="logo hover:animate-bounce flex-shrink-0">
              <Image 
                src="/hlpfl-logo-full.svg" 
                alt="HLPFL - Web Development" 
                width={180}
                height={72}
                className="transition-transform duration-300 hover:scale-105 h-12 lg:h-16 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-text hover:text-primary transition-colors">Home</Link>
              <Link href="/services" className="text-text hover:text-primary transition-colors">Services</Link>
              <Link href="/portfolio" className="text-text hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/about" className="text-primary font-semibold">About</Link>
              <Link href="/contact" className="cta-button">Contact</Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-text text-2xl">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            About HLPFL
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            We're a team of web development experts passionate about helping first-time founders build their online presence without breaking the bank.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                HLPFL was founded with a simple mission: make professional web development accessible to first-time founders. We saw too many talented entrepreneurs struggle with expensive, complicated website solutions that didn't meet their needs.
              </p>
              <p className="text-text-muted mb-6 leading-relaxed">
                Based in Grand Rapids, Michigan, we're 100% US-based and proud of it. No outsourcing, no language barriers, no timezone issues. Just quality work from people who understand your journey.
              </p>
              <p className="text-text-muted leading-relaxed">
                Plus, our founder is only 24 with 6+ years of entrepreneurial experience. We understand the challenges you're facing because we've been there too.
              </p>
            </div>
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700 delay-200`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex justify-center">
                <Image 
                  src="/hlpfl-logo-full.svg"
                  alt="HLPFL Team"
                  width={300}
                  height={120}
                  className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/hlpfl-symbol.svg"
                    alt={value.title}
                    width={60}
                    height={60}
                    className="animate-pulse"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Team</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              The people behind your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`bg-dark-light p-8 rounded-2xl border border-primary/20 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
                style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="flex justify-center mb-6">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-text-muted font-medium mb-4">{member.role}</p>
                <p className="text-text leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-text-muted">Websites Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-text-muted">US-Based Work</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">72hrs</div>
              <div className="text-text-muted">Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-text-muted mb-8">
            Ready to bring your vision to life? Let's chat about your project.
          </p>
          <Link href="/contact" className="cta-button">Get In Touch</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-light py-16 px-8 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="footer-logo mb-4 flex justify-center">
              <Image 
                src="/hlpfl-logo-full.svg" 
                alt="HLPFL - Web Development" 
                width={160}
                height={64}
                className="hover:opacity-80 transition-opacity max-w-[150px] h-auto"
              />
            </div>
            <p className="text-text-muted">
              &copy; 2024 HLPFL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}