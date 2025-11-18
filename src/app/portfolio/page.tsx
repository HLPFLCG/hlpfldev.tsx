'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolio = [
    {
      title: "Tech Startup Landing",
      category: "Web Design",
      description: "Modern landing page for a SaaS startup with animated elements and conversion optimization.",
      image: "/window.svg",
      tags: ["React", "Tailwind", "Animation"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Full-featured online store with payment processing and inventory management.",
      image: "/globe.svg",
      tags: ["Next.js", "Stripe", "MongoDB"],
      link: "#"
    },
    {
      title: "Consulting Website",
      category: "Web Development",
      description: "Professional services website with booking system and client portal.",
      image: "/hlpfl-symbol.svg",
      tags: ["Vue.js", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Restaurant Site",
      category: "Web Design",
      description: "Responsive restaurant website with online ordering and menu management.",
      image: "/hlpfl-logo-full.svg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      title: "Fitness App Web",
      category: "Web Development",
      description: "Progressive web app for fitness tracking and workout planning.",
      image: "/window.svg",
      tags: ["PWA", "Service Worker", "API"],
      link: "#"
    },
    {
      title: "Blog Platform",
      category: "Web Development",
      description: "Custom blogging platform with SEO optimization and social sharing.",
      image: "/globe.svg",
      tags: ["Next.js", "MDX", "Vercel"],
      link: "#"
    }
  ];

  const categories = ["All", "Web Development", "Web Design", "E-commerce"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPortfolio = selectedCategory === "All" 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

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
              <Link href="/portfolio" className="text-primary font-semibold">Portfolio</Link>
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
            Our Portfolio
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped first-time founders establish their online presence with professional, affordable websites.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-primary-light text-white"
                    : "bg-dark-light text-text hover:text-primary border border-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <div 
                key={index}
                className={`group bg-dark-light rounded-2xl border border-primary/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={120}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted mb-4 leading-relaxed">{item.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Link 
                    href={item.link}
                    className="inline-block w-full py-3 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-lg font-medium transition-all duration-300 hover:from-primary hover:to-primary-light hover:text-white text-center border border-primary/20 hover:border-transparent"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-text-muted mb-8">
            Let's create something amazing together. Your success story starts here.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/contact" className="cta-button">Get Your Free Quote</Link>
            <Link href="/services" className="secondary-button">View Our Services</Link>
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