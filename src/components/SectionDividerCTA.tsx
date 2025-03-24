'use client';

import { trackButtonClick } from '@/lib/tracking';

interface SectionDividerCTAProps {
  buttonText?: string;
  theme?: 'light' | 'dark';
}

export default function SectionDividerCTA({ 
  buttonText = 'Get Started',
  theme = 'light'
}: SectionDividerCTAProps) {
  
  const handleClick = () => {
    // Track the CTA button click
    trackButtonClick('section_cta_click', 'Section CTA Click', 'section_divider');
    
    // Scroll to the main CTA section
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Determine the styling based on the theme
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-50';
  const buttonBgColor = theme === 'light' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600';
  
  return (
    <div className={`${bgColor} relative overflow-hidden`}>
      <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
        <div className="pt-1 pb-4">
          <button 
            onClick={handleClick}
            className={`px-8 py-2.5 ${buttonBgColor} text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
} 