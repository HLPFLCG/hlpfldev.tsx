'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      description: "6+ years of entrepreneurial experience in web development and digital strategy. Passionate about helping first-time founders succeed.",
      image: "/hlpfl-symbol.svg",
      expertise: ["Full-Stack Development", "Business Strategy", "UX/UI Design", "Project Management"],
      experience: "6+ years"
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer & UX Specialist",
      description: "Expert in creating user-centered designs that convert visitors into customers. Specializes in brand identity and user experience.",
      image: "/hlpfl-logo-full.svg",
      expertise: ["UI/UX Design", "Brand Strategy", "User Research", "Prototyping"],
      experience: "5+ years"
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Developer & Systems Architect",
      description: "Specializes in building scalable, secure web applications. Expert in cloud infrastructure and database optimization.",
      image: "/hlpfl-symbol.svg",
      expertise: ["Backend Development", "Cloud Architecture", "Database Design", "API Development"],
      experience: "7+ years"
    }
  ];

  const values = [
    {
      title: "Transparency",
      description: "No hidden fees, no outsourcing, complete visibility into our process. We believe in building trust through open communication.",
      icon: "🔍",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Affordability",
      description: "Sliding scale pricing that works with your budget, not against it. Quality shouldn't come at a premium.",
      icon: "💰",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Quality",
      description: "Professional results without cutting corners or compromising on standards. We take pride in our work.",
      icon: "⭐",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Speed",
      description: "72-hour delivery when you provide all materials, without sacrificing quality. We respect your time.",
      icon: "🚀",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Support",
      description: "Ongoing support and guidance even after launch. Your success is our success.",
      icon: "🤝",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Innovation",
      description: "Staying ahead of technology trends to give you cutting-edge solutions that future-proof your business.",
      icon: "💡",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started as a freelance developer helping small businesses get online. Recognized the gap in affordable, quality web solutions for first-time founders."
    },
    {
      year: "2020",
      title: "First Office",
      description: "Established our first official office in Grand Rapids, MI. Built our core team and refined our development process."
    },
    {
      year: "2021",
      title: "50 Websites Milestone",
      description: "Successfully launched our 50th website. Developed our signature 72-hour delivery process and sliding scale pricing model."
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew the team to include specialized designers and developers. Expanded service offerings to include comprehensive digital solutions."
    },
    {
      year: "2023",
      title: "Innovation Year",
      description: "Introduced advanced SEO services, custom web applications, and enterprise solutions. Achieved 99% client satisfaction rate."
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Continuing to serve first-time founders and growing businesses. Committed to our mission of making quality web development accessible to all."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", description: "Successfully delivered websites and digital solutions" },
    { number: "98%", label: "Client Satisfaction", description: "Based on post-project satisfaction surveys" },
    { number: "72hrs", label: "Average Delivery", description: "When all materials are provided" },
    { number: "100%", label: "US-Based", description: "No outsourcing, all work done in-house" },
    { number: "24yo", label: "Founder's Age", description: "Young, energetic, and understands your journey" },
    { number: "6+", label: "Years Experience", description: "Combining entrepreneurship and technical expertise" }
  ];

  const certifications = [
    { name: "Google Analytics Certified", issuer: "Google", year: "2023" },
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "Meta Blueprint Certified", issuer: "Meta", year: "2022" },
    { name: "Shopify Partner", issuer: "Shopify", year: "2022" }
  ];

  return (
    <div className="min-h-screen bg-dark text-text">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-dark-light to-dark/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              About HLPFL
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-8">
              We're not just another web development agency. We're your strategic partners in digital success, 
              dedicated to helping first-time founders build their online presence without breaking the bank.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🏆</span>
                <span className="text-primary font-semibold">6+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">📍</span>
                <span className="text-primary font-semibold">Grand Rapids, MI</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-primary font-semibold">100% US-Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                HLPFL was founded in 2018 with a simple but powerful mission: make professional web development accessible to first-time founders. 
                We saw too many talented entrepreneurs struggle with expensive, complicated website solutions that didn't meet their needs or budgets.
              </p>
              <p className="text-text-muted mb-6 leading-relaxed">
                Our founder, just 18 at the time, had experienced firsthand the challenges of starting a business with limited resources. 
                After successfully launching several ventures, they discovered a passion for helping other entrepreneurs navigate the digital landscape.
              </p>
              <p className="text-text-muted mb-6 leading-relaxed">
                Based in Grand Rapids, Michigan, we're 100% US-based and proud of it. No outsourcing, no language barriers, no timezone issues. 
                Just quality work from people who understand your journey because we've been there too.
              </p>
              <p className="text-text-muted leading-relaxed">
                Today, at 24 years old with 6+ years of entrepreneurial experience, our founder leads a team that's delivered over 100 successful projects, 
                maintaining a 98% client satisfaction rate while keeping prices affordable for first-time founders.
              </p>
            </div>
            <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700 delay-200`} style={{ transitionDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-dark-light rounded-2xl p-8 border border-primary/20">
                  <div className="flex justify-center mb-6">
                    <Image 
                      src="/hlpfl-logo-full.svg"
                      alt="HLPFL Story"
                      width={300}
                      height={120}
                      className="rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-semibold text-primary">Mission</p>
                        <p className="text-text-muted text-sm">Empower first-time founders with affordable, quality web solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👁️</span>
                      <div>
                        <p className="font-semibold text-primary">Vision</p>
                        <p className="text-text-muted text-sm">A world where every entrepreneur has access to professional digital tools</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💎</span>
                      <div>
                        <p className="font-semibold text-primary">Values</p>
                        <p className="text-text-muted text-sm">Quality, affordability, transparency, speed, and support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Journey</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              From a solo freelancer to a full-service digital agency
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-primary-light"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-dark-light rounded-lg p-6 border border-primary/20">
                      <span className="text-primary font-bold">{item.year}</span>
                      <h3 className="text-xl font-semibold text-primary mt-1 mb-2">{item.title}</h3>
                      <p className="text-text-muted">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-light"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Values</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-dark-light rounded-2xl border border-primary/20 p-8 text-center transition-all duration-700 hover:-translate-y-2 hover:border-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Team</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              The talented people behind your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`bg-dark-light rounded-2xl border border-primary/20 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-2xl"></div>
                    <Image 
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="relative rounded-full border-4 border-primary/20 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-text-muted mb-4 leading-relaxed">{member.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-text-muted">Experience: {member.experience}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Expertise:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">By the Numbers</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Real results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-700`}
                style={{ animationDelay: `${index * 0.1 + 0.7}s` }}
              >
                <div className="bg-dark-light rounded-2xl border border-primary/20 p-8 hover:border-primary transition-colors">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-text-muted font-semibold mb-1">{stat.label}</div>
                  <div className="text-text-muted text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Certifications & Partnerships</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Our commitment to excellence through continuous learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`bg-dark-light rounded-lg border border-primary/20 p-6 text-center transition-all duration-700 hover:-translate-y-1 hover:border-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {cert.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-primary mb-1">{cert.name}</h3>
                <p className="text-text-muted text-sm">{cert.issuer}</p>
                <p className="text-text-muted text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-text-muted mb-8">
            Let's work together to bring your vision to life. Your success story starts here.
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