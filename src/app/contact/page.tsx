'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

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
              <Link href="/about" className="text-text hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="text-primary font-semibold">Contact</Link>
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
            Get In Touch
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Let's discuss your vision and create a custom solution that fits your needs and budget.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
              <h2 className="text-3xl font-bold text-primary mb-6">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-text font-medium mb-2">Project Type *</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="web-design">Web Design</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-text font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">1 Month</option>
                      <option value="2-months">2 Months</option>
                      <option value="3-months">3 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-text font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700`} style={{ transitionDelay: '0.2s' }}>
              <div className="bg-dark-light p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Email</h4>
                      <p className="text-text-muted">hello@hlpfl.dev</p>
                      <p className="text-text-muted text-sm">24-hour response time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Location</h4>
                      <p className="text-text-muted">Grand Rapids, MI</p>
                      <p className="text-text-muted text-sm">100% US-based</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Delivery</h4>
                      <p className="text-text-muted">72 hours*</p>
                      <p className="text-text-muted text-sm">When materials are provided</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Why Choose HLPFL?</h4>
                  <ul className="space-y-2 text-text-muted text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Founder-friendly pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      100% US-based work
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Full transparency
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      No hidden fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6 text-left">
            <div className="bg-dark-light p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-text mb-2">How long does a typical project take?</h3>
              <p className="text-text-muted">Most projects are completed within 72 hours once we have all materials. Complex projects may take longer.</p>
            </div>
            
            <div className="bg-dark-light p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-text mb-2">Do you offer payment plans?</h3>
              <p className="text-text-muted">Yes! We offer flexible payment plans and sliding scale pricing for first-time founders.</p>
            </div>
            
            <div className="bg-dark-light p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-text mb-2">What if I need changes after launch?</h3>
              <p className="text-text-muted">We include 30 days of free revisions and maintenance. Extended support plans are available.</p>
            </div>
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