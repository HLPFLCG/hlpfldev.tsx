'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      description: "Tailor-made websites built to your exact specifications with cutting-edge technologies.",
      longDescription: "We build custom websites from scratch using the latest web technologies. Our development process focuses on creating scalable, maintainable, and high-performance solutions that grow with your business. From simple brochure sites to complex web applications, we handle everything.",
      icon: "💻",
      features: [
        "Custom functionality development",
        "API integration and third-party services",
        "Database design and management",
        "Content Management Systems",
        "Progressive Web Apps (PWA)",
        "Real-time applications with WebSockets"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB"],
      price: {
        basic: "$1,999 - $4,999",
        standard: "$5,000 - $12,000",
        enterprise: "$12,000+"
      },
      timeline: "2-8 weeks",
      deliverables: [
        "Fully functional website/web application",
        "Admin dashboard (if applicable)",
        "Database setup and configuration",
        "API documentation",
        "Source code and deployment files",
        "30 days post-launch support"
      ],
      idealFor: [
        "Startups needing custom solutions",
        "Businesses with unique requirements",
        "Companies requiring scalable platforms",
        "Projects needing specific integrations"
      ],
      process: [
        "Discovery and requirements gathering",
        "Technical architecture planning",
        "Development in iterative sprints",
        "Quality assurance and testing",
        "Deployment and launch",
        "Post-launch support and maintenance"
      ]
    },
    {
      id: 2,
      title: "UI/UX Web Design",
      description: "Stunning, user-centered designs that convert visitors into loyal customers.",
      longDescription: "Our design process goes beyond aesthetics - we create experiences that delight users and drive business results. We combine user research, industry best practices, and creative innovation to deliver designs that not only look beautiful but also achieve your business goals.",
      icon: "🎨",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and brand integration",
        "Mobile-first responsive design",
        "Accessibility compliance (WCAG 2.1)",
        "Design system creation"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Zeplin", "Framer"],
      price: {
        basic: "$1,499 - $2,999",
        standard: "$3,000 - $6,000",
        enterprise: "$6,000+"
      },
      timeline: "1-4 weeks",
      deliverables: [
        "Complete design mockups",
        "Interactive prototypes",
        "Style guide and design system",
        "Brand guidelines document",
        "Asset files and exports",
        "Developer handoff documentation"
      ],
      idealFor: [
        "Brands needing visual refresh",
        "New product launches",
        "User experience improvements",
        "Mobile app design projects"
      ],
      process: [
        "Research and discovery phase",
        "User journey mapping",
        "Wireframe creation and feedback",
        "Visual design development",
        "Prototyping and testing",
        "Final design delivery and handoff"
      ]
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description: "Complete online stores with seamless shopping experiences and powerful management tools.",
      longDescription: "We create powerful e-commerce platforms that drive sales and delight customers. Our solutions include everything from product catalogs and shopping carts to payment processing and inventory management. We build on proven platforms and custom solutions to meet your specific needs.",
      icon: "🛒",
      features: [
        "Product catalog management",
        "Shopping cart and checkout optimization",
        "Multiple payment gateway integration",
        "Inventory and order management",
        "Customer account systems",
        "Analytics and reporting dashboard"
      ],
      technologies: ["Shopify Plus", "WooCommerce", "Magento", "BigCommerce", "Stripe", "PayPal"],
      price: {
        basic: "$2,999 - $5,999",
        standard: "$6,000 - $15,000",
        enterprise: "$15,000+"
      },
      timeline: "3-10 weeks",
      deliverables: [
        "Fully functional e-commerce store",
        "Admin panel for store management",
        "Payment gateway setup and testing",
        "Mobile-responsive shopping experience",
        "SEO-optimized product pages",
        "Analytics and conversion tracking setup"
      ],
      idealFor: [
        "Retail businesses going online",
        "Digital product sellers",
        "Subscription-based services",
        "Multi-vendor marketplaces"
      ],
      process: [
        "E-commerce strategy consultation",
        "Platform selection and setup",
        "Product catalog creation",
        "Payment and shipping configuration",
        "Testing and optimization",
        "Launch and staff training"
      ]
    },
    {
      id: 4,
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO strategies that boost your rankings and drive qualified organic traffic.",
      longDescription: "Our SEO services go beyond basic optimization - we develop comprehensive digital marketing strategies that deliver measurable results. From technical SEO to content marketing and link building, we help you dominate search results and connect with your target audience.",
      icon: "📈",
      features: [
        "Technical SEO audit and optimization",
        "Keyword research and strategy",
        "On-page and off-page optimization",
        "Content marketing and creation",
        "Local SEO and Google Business Profile",
        "Analytics and performance tracking"
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Yoast SEO", "Google Search Console", "Screaming Frog"],
      price: {
        basic: "$999 - $1,999/month",
        standard: "$2,000 - $4,999/month",
        enterprise: "$5,000+/month"
      },
      timeline: "Ongoing",
      deliverables: [
        "Comprehensive SEO audit report",
        "Keyword strategy document",
        "Monthly performance reports",
        "Content calendar and blog posts",
        "Backlink acquisition strategy",
        "Technical optimization implementation"
      ],
      idealFor: [
        "Businesses wanting to increase organic traffic",
        "Local service companies",
        "Content-driven websites",
        "Competitive industries"
      ],
      process: [
        "Website audit and competitive analysis",
        "Keyword research and strategy development",
        "Technical optimization implementation",
        "Content creation and optimization",
        "Link building and outreach",
        "Monthly reporting and strategy adjustments"
      ]
    },
    {
      id: 5,
      title: "Website Maintenance & Support",
      description: "Ongoing support to keep your website secure, updated, and performing at its best.",
      longDescription: "Your website needs continuous care to remain secure, fast, and effective. Our maintenance services provide peace of mind with regular updates, security monitoring, performance optimization, and technical support. We handle the technical details so you can focus on growing your business.",
      icon: "🔧",
      features: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Content updates and changes",
        "Backup and disaster recovery",
        "Uptime monitoring and alerts",
        "Technical support and consultation"
      ],
      technologies: ["WordPress", "Joomla", "Drupal", "Custom CMS", "Cloud platforms", "Monitoring tools"],
      price: {
        basic: "$199 - $499/month",
        standard: "$500 - $1,499/month",
        enterprise: "$1,500+/month"
      },
      timeline: "Ongoing",
      deliverables: [
        "Monthly maintenance reports",
        "Security audit findings",
        "Performance metrics and improvements",
        "Backup verification reports",
        "Update logs and documentation",
        "Priority technical support"
      ],
      idealFor: [
        "Businesses without in-house IT",
        "High-traffic websites",
        "E-commerce stores",
        "Companies needing reliability guarantees"
      ],
      process: [
        "Initial website audit and setup",
        "Monitoring systems configuration",
        "Regular maintenance schedule implementation",
        "Continuous performance monitoring",
        "Monthly reporting and review meetings",
        "Emergency response and support"
      ]
    },
    {
      id: 6,
      title: "Custom Consulting & Strategy",
      description: "Strategic guidance to help you make the right technology decisions and grow your business.",
      longDescription: "Sometimes you need expert guidance to navigate the complex world of web technology and digital strategy. Our consulting services provide the expertise you need to make informed decisions, avoid costly mistakes, and implement strategies that drive growth and success.",
      icon: "🎯",
      features: [
        "Technology stack consulting",
        "Digital strategy development",
        "Project planning and roadmap creation",
        "Team training and knowledge transfer",
        "Process optimization and automation",
        "Growth hacking and scaling strategies"
      ],
      technologies: ["Strategic planning tools", "Project management", "Analytics platforms", "Business intelligence"],
      price: {
        basic: "$150 - $300/hour",
        standard: "$2,500 - $7,500/project",
        enterprise: "$8,000+/project"
      },
      timeline: "Project-based",
      deliverables: [
        "Strategic recommendations document",
        "Technology roadmap and timeline",
        "Implementation plan and budget",
        "Training materials and documentation",
        "Performance metrics and KPIs",
        "Ongoing advisory support"
      ],
      idealFor: [
        "Startups needing technical guidance",
        "Companies planning digital transformation",
        "Businesses exploring new technologies",
        "Teams requiring specialized expertise"
      ],
      process: [
        "Business goals assessment",
        "Current state analysis",
        "Recommendation development",
        "Implementation planning",
        "Execution support and oversight",
        "Results measurement and optimization"
      ]
    }
  ];

  const packages = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page website",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "Social media integration",
        "1 round of revisions"
      ],
      price: "$1,999",
      timeline: "2 weeks",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      features: [
        "15-page website",
        "Advanced responsive design",
        "Comprehensive SEO",
        "CMS integration",
        "Blog functionality",
        "Analytics setup",
        "3 rounds of revisions",
        "30-day support"
      ],
      price: "$4,999",
      timeline: "4 weeks",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For established companies",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Premium SEO strategy",
        "Advanced CMS",
        "E-commerce functionality",
        "API integrations",
        "Unlimited revisions",
        "90-day priority support",
        "Training sessions"
      ],
      price: "$9,999+",
      timeline: "6-8 weeks",
      popular: false
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
              Our Services
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive digital solutions designed to help first-time founders and growing businesses succeed online. 
              From concept to launch and beyond, we're your strategic technology partner.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🚀</span>
                <span className="text-primary font-semibold">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">💰</span>
                <span className="text-primary font-semibold">Affordable Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-primary font-semibold">100% US-Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">What We Offer</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Full-service web solutions tailored to your specific needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-dark-light rounded-2xl border border-primary/20 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-primary hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full mb-6 text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-text-muted mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-text-muted mb-2">Starting from:</p>
                    <p className="text-lg font-bold text-primary">{service.price.basic}</p>
                  </div>

                  <button 
                    onClick={() => setSelectedService(service)}
                    className="w-full py-3 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-lg font-medium transition-all duration-300 hover:from-primary hover:to-primary-light hover:text-white border border-primary/20 hover:border-transparent"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Service Packages</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the package that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`bg-dark-light rounded-2xl border-2 transition-all duration-700 hover:-translate-y-2 ${pkg.popular ? 'border-primary shadow-2xl scale-105' : 'border-primary/20'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-primary to-primary-light text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <p className="text-text-muted mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className={`block w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-primary to-primary-light text-white hover:-translate-y-0.5 hover:shadow-xl' 
                        : 'bg-dark border border-primary/20 text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Process</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A proven methodology that ensures project success and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Discovery", description: "We learn about your business, goals, and requirements" },
              { step: 2, title: "Planning", description: "Detailed project plan with timelines and deliverables" },
              { step: 3, title: "Development", description: "Agile development with regular progress updates" },
              { step: 4, title: "Launch", description: "Testing, deployment, and post-launch support" }
            ].map((item, index) => (
              <div 
                key={item.step}
                className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 5) * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-dark-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary/20" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-3xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-1">{selectedService.title}</h2>
                    <p className="text-text-muted">{selectedService.timeline}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-text-muted hover:text-primary text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Service Overview</h3>
                <p className="text-text leading-relaxed">{selectedService.longDescription}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech: string, idx: number) => (
                    <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Investment</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-dark/50 rounded-lg p-4">
                    <p className="text-text-muted text-sm mb-1">Basic</p>
                    <p className="text-primary font-semibold">{selectedService.price.basic}</p>
                  </div>
                  <div className="bg-dark/50 rounded-lg p-4">
                    <p className="text-text-muted text-sm mb-1">Standard</p>
                    <p className="text-primary font-semibold">{selectedService.price.standard}</p>
                  </div>
                  <div className="bg-dark/50 rounded-lg p-4">
                    <p className="text-text-muted text-sm mb-1">Enterprise</p>
                    <p className="text-primary font-semibold">{selectedService.price.enterprise}</p>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">What You Get</h3>
                <div className="space-y-2">
                  {selectedService.deliverables.map((deliverable: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary">📦</span>
                      <span className="text-text">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Perfect For</h3>
                <div className="space-y-2">
                  {selectedService.idealFor.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary">🎯</span>
                      <span className="text-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link href="/contact" className="cta-button inline-block">
                  Get Custom Quote for This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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

      <Footer />
    </div>
  );
}