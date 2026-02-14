'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blog', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <div className="flex items-center justify-between h-[60px]">
          {/* Mobile Burger - LEFT on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark -ml-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[6px]">
              <span
                className={`block h-[1px] bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-[1px] bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45' : ''
                }`}
              />
            </div>
          </button>

          {/* Desktop Nav - LEFT on desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[13px] tracking-[0.08em] text-dark hover:opacity-60 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Site Title - RIGHT on mobile, LEFT on desktop */}
          <a
            href="#home"
            className="font-serif text-[22px] md:text-[24px] tracking-[-0.02em] text-dark hover:opacity-70 transition-opacity font-semibold md:order-first"
          >
            Lilac Template
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-cream z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-[18px] tracking-[0.08em] text-dark hover:opacity-60 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}