'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PopupCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const sessionShown = sessionStorage.getItem('popupShown');
    if (sessionShown) {
      return;
    }

    // Show popup after 10 seconds or when user scrolls 50% of the page
    const timer = setTimeout(() => {
      showPopup();
    }, 10000);

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !isVisible && !hasBeenShown) {
        showPopup();
      }
    };

    // Handle exit intent (mouse leaving the viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible && !hasBeenShown) {
        showPopup();
      }
    };

    function showPopup() {
      setIsVisible(true);
      setHasBeenShown(true);
      sessionStorage.setItem('popupShown', 'true');
      clearTimeout(timer);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    }

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, hasBeenShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fadeInUp">
      <div className="bg-dark-light rounded-2xl max-w-md w-full border border-primary/20 shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-muted hover:text-primary text-2xl z-10 bg-dark/80 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* Popup Content */}
        <div className="p-8 text-center">
          {/* Logo/Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Image 
                src="/hlpfl-symbol.svg" 
                alt="HLPFL" 
                width={40}
                height={40}
                className="filter brightness-0 invert"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Ready to Launch Your Dream Website?</h3>
            <p className="text-text-muted leading-relaxed">
              Get a free, no-obligation consultation and quote for your project. Limited spots available this month!
            </p>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg p-4 mb-6">
            <p className="text-primary font-semibold mb-1">🎉 Limited Time Offer</p>
            <p className="text-text text-sm">
              Save 20% on your first project when you book this week!
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-8 text-left">
            <div className="flex items-center gap-3">
              <span className="text-primary text-lg">✓</span>
              <span className="text-text text-sm">Free website audit & consultation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary text-lg">✓</span>
              <span className="text-text text-sm">Custom quote within 24 hours</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary text-lg">✓</span>
              <span className="text-text text-sm">No hidden fees or commitments</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link 
              href="/contact" 
              onClick={handleClose}
              className="block w-full py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-center"
            >
              Get My Free Quote
            </Link>
            <button
              onClick={handleClose}
              className="block w-full py-3 bg-transparent text-text-muted hover:text-primary rounded-lg font-medium transition-all duration-300 border border-primary/20 hover:border-primary"
            >
              Maybe Later
            </button>
          </div>

          {/* Urgency */}
          <p className="text-text-muted text-xs mt-4">
            ⚡ Only 3 consultation spots remaining this week
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-light/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}