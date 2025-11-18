import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-light py-16 px-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="footer-brand flex flex-col">
            <div className="footer-logo mb-4 flex justify-center">
              <Image 
                src="/hlpfl-logo-full.svg" 
                alt="HLPFL - Web Development" 
                width={160}
                height={64}
                className="hover:opacity-80 transition-opacity max-w-[150px] h-auto"
              />
            </div>
            <h3 className="text-primary mb-4 text-xl">HLPFL</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Affordable, high-quality websites for first-time founders. 100% US-based work from Grand Rapids, MI.
            </p>
            <div className="footer-social flex gap-4">
              <a href="#" className="social-link w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" className="social-link w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="social-link w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" aria-label="GitHub">
                ⚡
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="list-none">
              <li className="mb-3">
                <Link href="/" className="footer-link">Home</Link>
              </li>
              <li className="mb-3">
                <Link href="/services" className="footer-link">Services</Link>
              </li>
              <li className="mb-3">
                <Link href="/portfolio" className="footer-link">Portfolio</Link>
              </li>
              <li className="mb-3">
                <Link href="/about" className="footer-link">About</Link>
              </li>
              <li className="mb-3">
                <Link href="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="list-none">
              <li className="mb-3">
                <Link href="/services" className="footer-link">Web Development</Link>
              </li>
              <li className="mb-3">
                <Link href="/services" className="footer-link">Web Design</Link>
              </li>
              <li className="mb-3">
                <Link href="/services" className="footer-link">E-commerce</Link>
              </li>
              <li className="mb-3">
                <Link href="/services" className="footer-link">SEO Optimization</Link>
              </li>
              <li className="mb-3">
                <Link href="/services" className="footer-link">Maintenance</Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <ul className="list-none">
              <li className="mb-3">
                <a href="mailto:hello@hlpfl.dev" className="footer-link">hello@hlpfl.dev</a>
              </li>
              <li className="mb-3 text-text-muted">Grand Rapids, MI</li>
              <li className="mb-3 text-text-muted">24-hour response time</li>
            </ul>
            <Link href="/contact" className="footer-cta inline-block mt-6 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Start Your Project →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted">
            &copy; 2024 HLPFL. All rights reserved.
          </p>
          <div className="footer-links flex gap-4 items-center">
            <Link href="#" className="text-primary hover:text-primary-light transition-colors">Privacy Policy</Link>
            <span className="text-text-muted">•</span>
            <Link href="#" className="text-primary hover:text-primary-light transition-colors">Terms of Service</Link>
            <span className="text-text-muted">•</span>
            <Link href="#" className="text-primary hover:text-primary-light transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}