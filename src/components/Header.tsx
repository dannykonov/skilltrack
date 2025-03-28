'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackButtonClick } from '@/lib/tracking';
import TrackableButton from './TrackableButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (linkId: string, linkText: string) => {
    trackButtonClick(`nav_${linkId}`, linkText, 'header');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header id="top" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center"
              onClick={() => trackButtonClick('logo', 'Learn With AI', 'header')}
            >
              <Image 
                src="/images/logo/logolearnwithai-2.png" 
                alt="Learn With AI Logo" 
                width={40} 
                height={40} 
                priority
              />
              <span className="ml-2 text-xl font-bold text-blue-600">Learn With AI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#how-it-works" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => handleNavClick('how_it_works', 'How It Works')}
            >
              How It Works
            </Link>
            <Link 
              href="#benefits" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => handleNavClick('features', 'Features')}
            >
              Features
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => handleNavClick('testimonials', 'Testimonials')}
            >
              Testimonials
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <TrackableButton
              trackingId="header_cta"
              sectionId="header"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 text-sm"
            >
              Learn Smarter
            </TrackableButton>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                trackButtonClick('mobile_menu_toggle', isMenuOpen ? 'Close Menu' : 'Open Menu', 'header');
              }}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => handleNavClick('mobile_how_it_works', 'How It Works')}
            >
              How It Works
            </Link>
            <Link 
              href="#benefits" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => handleNavClick('mobile_features', 'Features')}
            >
              Features
            </Link>
            <Link 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => handleNavClick('mobile_testimonials', 'Testimonials')}
            >
              Testimonials
            </Link>
            <TrackableButton
              trackingId="mobile_header_cta"
              sectionId="header"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium"
            >
              Learn Smarter
            </TrackableButton>
          </div>
        </div>
      )}
    </header>
  );
} 