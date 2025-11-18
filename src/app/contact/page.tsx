'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    project: '',
    budget: '',
    timeline: '',
    features: [] as string[],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      project: '',
      budget: '',
      timeline: '',
      features: [],
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      primary: "hello@hlpfl.dev",
      secondary: "24-hour response time guaranteed",
      action: "Send us an email anytime"
    },
    {
      icon: "📱",
      title: "Phone",
      primary: "+1 (234) 567-890",
      secondary: "Mon-Fri, 9AM-6PM EST",
      action: "Call us for immediate assistance"
    },
    {
      icon: "📍",
      title: "Office",
      primary: "Grand Rapids, MI",
      secondary: "100% US-based operations",
      action: "Visit us by appointment"
    },
    {
      icon: "💬",
      title: "Live Chat",
      primary: "Available on website",
      secondary: "Mon-Fri, 9AM-6PM EST",
      action: "Chat with our team instantly"
    }
  ];

  const features = [
    "E-commerce functionality",
    "Content Management System",
    "User authentication",
    "Payment processing",
    "API integration",
    "Database management",
    "SEO optimization",
    "Mobile responsiveness",
    "Analytics setup",
    "Social media integration"
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Standard websites are completed within 72 hours once we have all materials. Complex projects like e-commerce platforms or custom web applications may take 1-4 weeks. We always provide a detailed timeline before starting your project."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans and sliding scale pricing specifically designed for first-time founders. We can split payments into 2-3 installments, and we're always willing to work within your budget constraints."
    },
    {
      question: "What do you need from me to get started?",
      answer: "Typically we need your content (text, images, logos), brand guidelines (if any), specific features you want, and any example websites you like. We provide a complete checklist once we start working together."
    },
    {
      question: "What if I need changes after launch?",
      answer: "We include 30 days of free revisions and post-launch support with every project. After that, we offer affordable maintenance packages starting at $199/month for ongoing updates and support."
    },
    {
      question: "Do you work with clients outside the US?",
      answer: "While we're 100% US-based, we work with clients worldwide. Our team is available during US business hours, and we can accommodate different time zones for scheduled meetings and updates."
    },
    {
      question: "What makes HLPFL different from other agencies?",
      answer: "We specialize in helping first-time founders with founder-friendly pricing, complete transparency (no hidden fees), 72-hour delivery, and personal experience as entrepreneurs. Our 24-year-old founder has 6+ years of entrepreneurial experience and truly understands your journey."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "We'll schedule a 30-minute call to understand your project, goals, and budget.",
      duration: "30 minutes"
    },
    {
      number: 2,
      title: "Proposal & Quote",
      description: "You'll receive a detailed proposal with timeline, deliverables, and pricing.",
      duration: "24 hours"
    },
    {
      number: 3,
      title: "Project Kickoff",
      description: "We start building your project with regular updates and feedback sessions.",
      duration: "2-72 hours"
    },
    {
      number: 4,
      title: "Review & Launch",
      description: "Final review, revisions, and launch of your new website or application.",
      duration: "24 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-text">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-dark-light to-dark/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your vision into reality? We're here to help first-time founders succeed with 
              affordable, high-quality web solutions. Your journey starts with a simple conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">⚡</span>
                <span className="text-primary font-semibold">24hr Response</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">💰</span>
                <span className="text-primary font-semibold">Free Quote</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🤝</span>
                <span className="text-primary font-semibold">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`bg-dark-light rounded-2xl border border-primary/20 p-6 text-center transition-all duration-700 hover:-translate-y-2 hover:border-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                <p className="text-text font-medium mb-1">{info.primary}</p>
                <p className="text-text-muted text-sm mb-3">{info.secondary}</p>
                <p className="text-text-muted text-xs italic">{info.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
              <h2 className="text-3xl font-bold text-primary mb-6">Start Your Project</h2>
              <p className="text-text-muted mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text font-medium mb-2">Current Website (if any)</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-light border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="https://example.com"
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
                    <option value="web-development">Custom Web Development</option>
                    <option value="web-design">UI/UX Web Design</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="seo">SEO & Digital Marketing</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="consulting">Consulting & Strategy</option>
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
                      <option value="10000-20000">$10,000 - $20,000</option>
                      <option value="20000+">$20,000+</option>
                      <option value="flexible">Flexible - Let's discuss</option>
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
                      <option value="asap">ASAP (72 hours)</option>
                      <option value="1-week">1 Week</option>
                      <option value="2-weeks">2 Weeks</option>
                      <option value="1-month">1 Month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-text font-medium mb-3">Required Features</label>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, idx) => (
                      <label key={idx} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="w-4 h-4 text-primary bg-dark-light border-primary/20 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-text">{feature}</span>
                      </label>
                    ))}
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
                    placeholder="Tell us about your project, goals, target audience, and any specific requirements or challenges you're facing..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Side Content */}
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700`} style={{ transitionDelay: '0.2s' }}>
              {/* Why Choose Us */}
              <div className="bg-dark-light rounded-2xl border border-primary/20 p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Why Choose HLPFL?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🚀</span>
                    <div>
                      <h4 className="font-semibold text-text mb-1">72-Hour Delivery</h4>
                      <p className="text-text-muted text-sm">Most projects completed within 72 hours when materials are provided</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">💰</span>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Founder-Friendly Pricing</h4>
                      <p className="text-text-muted text-sm">Sliding scale pricing designed for first-time founders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🇺🇸</span>
                    <div>
                      <h4 className="font-semibold text-text mb-1">100% US-Based</h4>
                      <p className="text-text-muted text-sm">No outsourcing, complete transparency in our process</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">🤝</span>
                    <div>
                      <h4 className="font-semibold text-text mb-1">We've Been There</h4>
                      <p className="text-text-muted text-sm">Our 24-year-old founder has 6+ years of entrepreneurial experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div className="bg-dark-light rounded-2xl border border-primary/20 p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Process</h3>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text mb-1">{step.title}</h4>
                        <p className="text-text-muted text-sm">{step.description}</p>
                        <p className="text-primary text-xs mt-1">{step.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Everything you need to know about working with HLPFL
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-dark-light rounded-lg border border-primary/20 p-6 transition-all duration-700 hover:border-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <h3 className="font-semibold text-text mb-3 text-lg">{faq.question}</h3>
                <p className="text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Urgent Help?</h2>
          <p className="text-xl text-text-muted mb-8">
            Have a website emergency or time-sensitive project? We're here to help.
          </p>
          <div className="bg-dark-light rounded-2xl p-8 border border-primary/20">
            <p className="text-primary font-semibold mb-4">🚨 Priority Support Line</p>
            <p className="text-2xl font-bold text-primary mb-4">hello@hlpfl.dev</p>
            <p className="text-text-muted mb-6">Mark your email as "URGENT" for priority response</p>
            <p className="text-text-muted text-sm">We typically respond to urgent inquiries within 2-4 hours during business hours.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}