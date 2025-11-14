'use client';

import { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: "How can you deliver a website in 72 hours?",
    answer: "We use AI-powered development tools combined with our 6+ years of experience to streamline the process. When you provide all materials upfront (content, images, branding), we can work efficiently without back-and-forth delays. Our process is optimized for speed without sacrificing quality."
  },
  {
    question: "What if I don't have all my content ready?",
    answer: "No problem! We'll help you figure out what you need during the discovery call. If you need more time to gather materials, we'll work with your timeline. The 72-hour delivery starts once we have everything we need from you."
  },
  {
    question: "How does the sliding scale pricing work?",
    answer: "During our discovery call, we'll discuss your budget honestly. We offer flexible pricing based on your current financial situation and the scope of your project. Our goal is to make professional web development accessible to all first-time founders, regardless of budget constraints."
  },
  {
    question: "What happens after my website launches?",
    answer: "All packages include post-launch support (30-180 days depending on your package). We're here to answer questions, make minor updates, and ensure your website continues to perform well. We also offer ongoing maintenance packages if you need continued support."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "We're committed to your satisfaction. All packages include multiple rounds of revisions to ensure you're happy with the final product. If there's an issue, we'll work with you to make it right. We believe in full transparency and real partnership with our clients."
  },
  {
    question: "Can you help with hosting and domain setup?",
    answer: "Absolutely! We can guide you through the entire process of purchasing a domain and setting up hosting. We'll recommend affordable, reliable hosting providers and can even handle the technical setup for you if needed."
  },
  {
    question: "What makes you different from other web developers?",
    answer: "We're 100% US-based (no outsourcing), offer sliding scale pricing for first-time founders, deliver in 72 hours, and maintain full transparency throughout the process. We're not just building websites – we're partnering with founders to help them succeed."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes! Every website we build is fully responsive and optimized for all devices – desktop, tablet, and mobile. With over 60% of web traffic coming from mobile devices, this is a non-negotiable part of our process."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`section-header text-center mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Everything you need to know about working with HLPFL
          </p>
        </div>
        
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''} reveal ${isVisible ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className={`faq-icon text-2xl transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'max-h-96' : 'max-h-0'} transition-all duration-300 ease-in-out`}>
                <div className="faq-answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}