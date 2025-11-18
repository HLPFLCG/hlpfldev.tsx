'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolio = [
    {
      id: 1,
      title: "TechVenture SaaS Platform",
      client: "TechVenture Inc.",
      category: "Web Development",
      industry: "Software",
      description: "Complete SaaS platform with user authentication, dashboard analytics, and subscription management.",
      longDescription: "TechVenture needed a comprehensive SaaS platform to serve their growing customer base. We built a scalable solution featuring real-time analytics, user role management, and automated billing integration. The platform handles over 10,000 daily active users with 99.9% uptime.",
      image: "/window.svg",
      tags: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      link: "#",
      featured: true,
      completedDate: "2024-03-15",
      duration: "3 months",
      budget: "$15,000 - $25,000",
      challenges: [
        "Scaling to handle 10k+ concurrent users",
        "Implementing real-time data synchronization",
        "Creating custom analytics dashboard",
        "Integrating multiple payment gateways"
      ],
      solutions: [
        "Built microservices architecture with Redis caching",
        "Implemented WebSocket for real-time updates",
        "Custom dashboard with Chart.js and D3.js",
        "Multi-gateway payment system with Stripe API"
      ],
      results: [
        "300% increase in user engagement",
        "50% reduction in server response time",
        "99.9% uptime achieved",
        "User base grew from 1k to 10k in 6 months"
      ],
      testimonial: {
        name: "Sarah Johnson",
        role: "CEO, TechVenture Inc.",
        content: "HLPFL transformed our business idea into a reality. The platform they built exceeded our expectations and scaled perfectly with our growth."
      }
    },
    {
      id: 2,
      title: "Bloom E-commerce Store",
      client: "Bloom Boutique",
      category: "E-commerce",
      industry: "Retail",
      description: "Modern e-commerce platform with inventory management, payment processing, and mobile optimization.",
      longDescription: "Bloom Boutique needed a sophisticated e-commerce solution to showcase their curated fashion collection. We developed a feature-rich platform with AI-powered product recommendations, virtual try-on features, and seamless checkout experience. The site processes over 500 orders daily with an average cart value of $150.",
      image: "/globe.svg",
      tags: ["Next.js", "Shopify API", "Tailwind CSS", "Stripe", "MongoDB"],
      link: "#",
      featured: true,
      completedDate: "2024-02-28",
      duration: "2 months",
      budget: "$10,000 - $15,000",
      challenges: [
        "Creating engaging product showcase",
        "Implementing AI recommendation engine",
        "Mobile-first shopping experience",
        "Inventory synchronization across channels"
      ],
      solutions: [
        "Custom React components with 3D product views",
        "Machine learning recommendation system",
        "Progressive Web App with offline capabilities",
        "Real-time inventory via GraphQL APIs"
      ],
      results: [
        "250% increase in conversion rate",
        "40% reduction in cart abandonment",
        "Mobile sales increased by 180%",
        "Average order value increased by 35%"
      ],
      testimonial: {
        name: "Michael Chen",
        role: "Founder, Bloom Boutique",
        content: "Our online sales skyrocketed after launching the new platform. HLPFL understood our vision perfectly and delivered beyond our expectations."
      }
    },
    {
      id: 3,
      title: "Nexus Consulting Website",
      client: "Nexus Consulting Group",
      category: "Web Design",
      industry: "Professional Services",
      description: "Professional services website with client portal, booking system, and resource library.",
      longDescription: "Nexus Consulting required a sophisticated web presence to reflect their premium consulting services. We created a professional website featuring an interactive client portal, automated booking system, comprehensive resource library, and lead generation funnels. The site serves as their primary business development tool.",
      image: "/hlpfl-symbol.svg",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Calendly API", "SendGrid"],
      link: "#",
      featured: false,
      completedDate: "2024-01-20",
      duration: "6 weeks",
      budget: "$8,000 - $12,000",
      challenges: [
        "Creating professional brand image",
        "Implementing secure client portal",
        "Automated appointment scheduling",
        "Lead generation optimization"
      ],
      solutions: [
        "Custom Vue.js components with animations",
        "OAuth 2.0 authentication with role-based access",
        "Calendly integration with custom booking flow",
        "Marketing automation with lead scoring"
      ],
      results: [
        "200% increase in qualified leads",
        "60% reduction in admin time",
        "Client satisfaction score of 9.5/10",
        "Website became primary lead source (80%)"
      ],
      testimonial: {
        name: "David Martinez",
        role: "Managing Partner, Nexus Consulting",
        content: "The website HLPFL built has become the backbone of our business. We're getting more qualified leads than ever before."
      }
    },
    {
      id: 4,
      title: "FoodHub Restaurant Platform",
      client: "FoodHub Restaurants",
      category: "Web Development",
      industry: "Food & Beverage",
      description: "Multi-restaurant ordering platform with real-time tracking and delivery management.",
      longDescription: "FoodHub needed a comprehensive platform connecting multiple restaurants with delivery services. We built a scalable solution featuring real-time order tracking, delivery fleet management, customer loyalty programs, and restaurant analytics dashboards. The platform processes over 1,000 orders daily across 50+ restaurants.",
      image: "/hlpfl-logo-full.svg",
      tags: ["React Native", "Express.js", "Socket.io", "Google Maps API", "Firebase"],
      link: "#",
      featured: true,
      completedDate: "2023-12-10",
      duration: "4 months",
      budget: "$20,000 - $30,000",
      challenges: [
        "Real-time order tracking system",
        "Multi-restaurant inventory management",
        "Delivery route optimization",
        "Scalable architecture for growth"
      ],
      solutions: [
        "WebSocket implementation for real-time updates",
        "Microservices for restaurant management",
        "Google Maps integration with route optimization",
        "Kubernetes deployment with auto-scaling"
      ],
      results: [
        "1500+ daily orders within 3 months",
        "30% faster delivery times",
        "95% customer satisfaction rating",
        "Expanded to 3 new cities"
      ],
      testimonial: {
        name: "Lisa Wong",
        role: "Operations Director, FoodHub",
        content: "HLPFL delivered a platform that transformed our entire operation. Order efficiency improved dramatically and customers love the experience."
      }
    },
    {
      id: 5,
      title: "FitLife Progressive Web App",
      client: "FitLife Studios",
      category: "Web Development",
      industry: "Health & Fitness",
      description: "Progressive web app for fitness tracking, workout planning, and community engagement.",
      longDescription: "FitLife wanted to expand their gym business into the digital space. We created a comprehensive PWA featuring personalized workout plans, nutrition tracking, social community features, and trainer-client communication tools. The app has over 25,000 active users and drives 40% of new gym memberships.",
      image: "/window.svg",
      tags: ["PWA", "Service Worker", "IndexedDB", "WebRTC", "TensorFlow.js"],
      link: "#",
      featured: false,
      completedDate: "2023-11-15",
      duration: "3 months",
      budget: "$12,000 - $18,000",
      challenges: [
        "Offline workout functionality",
        "Real-time trainer communication",
        "AI-powered workout recommendations",
        "Cross-platform compatibility"
      ],
      solutions: [
        "Service workers for offline caching",
        "WebRTC for video coaching sessions",
        "Machine learning models for personalization",
        "Responsive design with CSS Grid/Flexbox"
      ],
      results: [
        "25,000+ active users",
        "89% user retention rate",
        "40% increase in gym memberships",
        "4.8/5 app store rating"
      ],
      testimonial: {
        name: "James Rodriguez",
        role: "Owner, FitLife Studios",
        content: "The PWA HLPFL built has revolutionized how we engage with our members. It's become an essential part of our business growth."
      }
    },
    {
      id: 6,
      title: "ContentHub Publishing Platform",
      client: "ContentHub Media",
      category: "Web Development",
      industry: "Media & Publishing",
      description: "Content management system with SEO optimization, social sharing, and analytics integration.",
      longDescription: "ContentHub needed a custom publishing platform to manage their network of blogs and media sites. We built a sophisticated CMS featuring AI-powered content suggestions, advanced SEO tools, social media automation, and comprehensive analytics. The platform publishes over 500 articles monthly reaching 2M+ readers.",
      image: "/globe.svg",
      tags: ["Next.js", "MDX", "Prismic CMS", "Algolia", "Google Analytics"],
      link: "#",
      featured: false,
      completedDate: "2023-10-20",
      duration: "2 months",
      budget: "$15,000 - $20,000",
      challenges: [
        "High-performance content delivery",
        "Advanced SEO optimization",
        "Social media automation",
        "Multi-site management"
      ],
      solutions: [
        "Static site generation with ISR",
        "Custom SEO meta tags and schema markup",
        "Buffer API integration for social sharing",
        "Headless CMS with multi-tenant support"
      ],
      results: [
        "2M+ monthly readers",
        "65% increase in organic traffic",
        "300% improvement in page load speed",
        "500+ articles published monthly"
      ],
      testimonial: {
        name: "Amanda Foster",
        role: "Editor-in-Chief, ContentHub",
        content: "Our content reach exploded after implementing the new platform. HLPFL understood the unique needs of digital publishing perfectly."
      }
    },
    {
      id: 7,
      title: "EduLearn Learning Management System",
      client: "EduLearn Academy",
      category: "Web Development",
      industry: "Education",
      description: "Comprehensive LMS with video streaming, interactive quizzes, and student progress tracking.",
      longDescription: "EduLearn required a full-featured learning management system for their online courses. We developed an intuitive platform featuring HD video streaming, interactive assessments, gamification elements, and detailed progress analytics. The system supports over 5,000 students across 200+ courses with a 92% completion rate.",
      image: "/window.svg",
      tags: ["React", "WebRTC", "Vimeo API", "Canvas LMS", "Redis"],
      link: "#",
      featured: true,
      completedDate: "2023-09-15",
      duration: "5 months",
      budget: "$25,000 - $35,000",
      challenges: [
        "Video streaming optimization",
        "Real-time student engagement tracking",
        "Interactive quiz development",
        "Scalable user management"
      ],
      solutions: [
        "Adaptive bitrate streaming with CDN",
        "WebSocket-based engagement monitoring",
        "Custom quiz engine with multimedia support",
        "PostgreSQL with connection pooling"
      ],
      results: [
        "5,000+ active students",
        "92% course completion rate",
        "4.6/5 student satisfaction",
        "30% reduction in support tickets"
      ],
      testimonial: {
        name: "Dr. Robert Kim",
        role: "Academic Director, EduLearn",
        content: "The LMS platform transformed our online education delivery. Student engagement and completion rates exceeded all our expectations."
      }
    },
    {
      id: 8,
      title: "RealtorPro Property Platform",
      client: "RealtorPro Agency",
      category: "Web Development",
      industry: "Real Estate",
      description: "Property listing platform with virtual tours, mortgage calculator, and lead management.",
      longDescription: "RealtorPro needed a modern real estate platform to showcase properties and generate leads. We built a comprehensive solution featuring 3D virtual tours, advanced property search, mortgage calculators, and automated lead nurturing. The platform generates over 1,000 qualified leads monthly and helped close $50M+ in property sales.",
      image: "/hlpfl-symbol.svg",
      tags: ["React", "Three.js", "Zillow API", "Mailchimp", "AWS"],
      link: "#",
      featured: false,
      completedDate: "2023-08-10",
      duration: "3 months",
      budget: "$18,000 - $25,000",
      challenges: [
        "3D virtual tour implementation",
        "MLS integration and data synchronization",
        "Mortgage calculation accuracy",
        "Lead generation and nurturing"
      ],
      solutions: [
        "Three.js for interactive 3D tours",
        "Custom MLS API integration",
        "Real-time mortgage calculation engine",
        "Marketing automation with lead scoring"
      ],
      results: [
        "1,000+ qualified leads monthly",
        "$50M+ in closed property sales",
        "45% increase in property inquiries",
        "25% improvement in conversion rate"
      ],
      testimonial: {
        name: "Jennifer Anderson",
        role: "Broker Owner, RealtorPro",
        content: "The platform HLPFL built has been instrumental in our growth. We're closing more deals and generating higher quality leads than ever."
      }
    }
  ];

  const categories = ["All", "Web Development", "Web Design", "E-commerce"];
  
  const filteredPortfolio = selectedCategory === "All" 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  const featuredProjects = portfolio.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-dark text-text">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-dark-light to-dark/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our success stories and see how we've helped first-time founders transform their ideas into powerful digital experiences. Each project represents our commitment to excellence and innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🚀</span>
                <span className="text-primary font-semibold">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">💎</span>
                <span className="text-primary font-semibold">8 Industries Served</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">📈</span>
                <span className="text-primary font-semibold">300% Avg. ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Featured Success Stories</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Highlighting our most impactful projects that delivered exceptional results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-dark-light rounded-2xl border border-primary/20 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-primary hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="p-8 border-b border-primary/20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                      <p className="text-text-muted font-medium">{project.client}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-text-muted text-sm">Completed</p>
                      <p className="text-primary font-semibold">{new Date(project.completedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                    </div>
                  </div>
                  <p className="text-text leading-relaxed mb-6">{project.longDescription}</p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">📅</p>
                      <p className="text-sm text-text-muted">{project.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">💰</p>
                      <p className="text-sm text-text-muted">{project.budget}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">🏆</p>
                      <p className="text-sm text-text-muted">Top Rated</p>
                    </div>
                  </div>
                </div>

                {/* Project Results */}
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">Key Results</h4>
                  <div className="space-y-3 mb-6">
                    {project.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-primary">✓</span>
                        <span className="text-text">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-dark/50 rounded-lg p-4 mb-6">
                    <p className="text-text-muted italic mb-3">"{project.testimonial.content}"</p>
                    <p className="text-primary font-semibold">{project.testimonial.name}</p>
                    <p className="text-text-muted text-sm">{project.testimonial.role}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study Button */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Browse By Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg"
                    : "bg-dark-light text-text hover:text-primary border border-primary/20 hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4">All Projects</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Discover more of our work across different industries and technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <div 
                key={item.id}
                className={`group bg-dark-light rounded-2xl border border-primary/20 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-primary hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${(index + 7) * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={120}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-dark px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <span>⭐</span> Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm font-medium mb-3">{item.client}</p>
                  <p className="text-text-muted mb-4 leading-relaxed">{item.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-xs bg-dark/50 text-text-muted px-3 py-1 rounded-full">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Project Button */}
                  <button 
                    onClick={() => setSelectedProject(item)}
                    className="w-full py-3 bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary rounded-lg font-medium transition-all duration-300 hover:from-primary hover:to-primary-light hover:text-white text-center border border-primary/20 hover:border-transparent"
                  >
                    View Case Study
                  </button>
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-dark-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary/20" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">{selectedProject.title}</h2>
                  <p className="text-text-muted text-lg">{selectedProject.client}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-text-muted hover:text-primary text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Project Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-dark/50 rounded-lg p-4 text-center">
                  <p className="text-primary text-lg font-semibold mb-1">Duration</p>
                  <p className="text-text">{selectedProject.duration}</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-4 text-center">
                  <p className="text-primary text-lg font-semibold mb-1">Budget</p>
                  <p className="text-text">{selectedProject.budget}</p>
                </div>
                <div className="bg-dark/50 rounded-lg p-4 text-center">
                  <p className="text-primary text-lg font-semibold mb-1">Completed</p>
                  <p className="text-text">{new Date(selectedProject.completedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </div>
              </div>

              {/* Long Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Project Overview</h3>
                <p className="text-text leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Challenges</h3>
                <div className="space-y-3">
                  {selectedProject.challenges.map((challenge: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">🎯</span>
                      <span className="text-text">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Solutions</h3>
                <div className="space-y-3">
                  {selectedProject.solutions.map((solution: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">💡</span>
                      <span className="text-text">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Results</h3>
                <div className="space-y-3">
                  {selectedProject.results.map((result: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">📈</span>
                      <span className="text-text">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Client Testimonial</h3>
                <p className="text-text-muted italic text-lg mb-4">"{selectedProject.testimonial.content}"</p>
                <p className="text-primary font-semibold">{selectedProject.testimonial.name}</p>
                <p className="text-text-muted">{selectedProject.testimonial.role}</p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link href="/contact" className="cta-button inline-block">
                  Start Your Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-text-muted mb-8">
            Join our portfolio of successful clients. Let's create something remarkable together.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/contact" className="cta-button">Get Your Free Quote</Link>
            <Link href="/services" className="secondary-button">View Our Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}