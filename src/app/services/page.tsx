'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies, responsive design, and optimized performance.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern Tech Stack"],
      price: "Starting at $1,999"
    },
    {
      title: "Web Design",
      description: "Beautiful, user-friendly designs that capture your brand and convert visitors into customers.",
      features: ["UI/UX Design", "Brand Integration", "Mobile-First", "User Testing"],
      price: "Starting at $1,499"
    },
    {
      title: "E-commerce",
      description: "Complete online stores with payment processing, inventory management, and analytics.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory System", "Analytics Dashboard"],
      price: "Starting at $2,999"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Analytics Tracking"],
      price: "Starting at $999"
    },
    {
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly with our maintenance plans.",
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "24/7 Support"],
      price: "Starting at $199/month"
    },
    {
      title: "Custom Solutions",
      description: "Need something specific? We create custom solutions tailored to your unique requirements.",
      features: ["Custom Development", "Integration Services", "Consulting", "Training"],
      price: "Custom Quote"
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
              <Link href="/services" className="text-primary font-semibold">Services</Link>
              <Link href="/portfolio" className="text-text hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/about" className="text-text hover:text-primary transition-colors">About</Link>
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
            Our Services
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Comprehensive web solutions designed to help first-time founders succeed online. From concept to launch, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-dark-light p-8 rounded-2xl border border-primary/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <Image 
                    src="/hlpfl-symbol.svg"
                    alt={service.title}
                    width={80}
                    height={80}
                    className="animate-pulse"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">{service.title}</h3>
                <p className="text-text-muted mb-6 text-center leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                  <Link 
                    href="/contact" 
                    className="inline-block w-full py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-text-muted mb-8">
            Let's discuss your project and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/contact" className="cta-button">Get Your Free Quote</Link>
            <Link href="/portfolio" className="secondary-button">View Our Work</Link>
          </div>
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