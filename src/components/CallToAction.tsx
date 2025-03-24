'use client';

import EmailSubscribe from './EmailSubscribe';
import { useRef } from 'react';
import { trackButtonClick } from '@/lib/tracking';
import TrackableButton from './TrackableButton';
import { useTracking } from '@/hooks/useTracking';

export default function CallToAction() {
  const emailRef = useRef<HTMLDivElement>(null);
  const { trackClick } = useTracking({ sectionId: 'cta' });
  
  const scrollToEmail = () => {
    emailRef.current?.scrollIntoView({ behavior: 'smooth' });
    trackClick('scroll_to_email', 'Transform How You Learn');
  };
  
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden" id="cta">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">From Overwhelmed to</span> <span className="text-yellow-300">Mastery</span> <span className="text-white">in Weeks</span>
          </h2>
          <p className="text-xl mb-8">
            Your AI coach builds tailored learning paths that make complex subjects simple—so you achieve in days what used to take months.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 mb-10 backdrop-blur-sm relative" ref={emailRef}>
            <p className="text-lg font-medium mb-2">Join 3,000+ learners accelerating their progress</p>
            <EmailSubscribe 
              buttonText="Learn Smarter" 
              onSubscribe={(email) => {
                trackClick('email_subscribe', `Email: ${email.substring(0, 3)}***`);
              }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* First testimonial */}
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm relative">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="italic text-white/90 mb-2 text-sm">
                    "Learn With AI's structured approach changed everything—I've learned more in 3 weeks than in 6 months of self-study."
                  </p>
                  <p className="font-medium text-sm">— Alex K., Software Developer</p>
                </div>
              </div>
            </div>
            
            {/* Second testimonial */}
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm relative">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="italic text-white/90 mb-2 text-sm">
                    "The personalized roadmap eliminated all guesswork. I'm actually making progress instead of feeling overwhelmed by options."
                  </p>
                  <p className="font-medium text-sm">— Maria L., UX Designer</p>
                </div>
              </div>
            </div>
            
            {/* Third testimonial */}
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm relative">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="italic text-white/90 mb-2 text-sm">
                    "After trying countless courses, this actually worked for me. The step-by-step approach makes complex topics approachable."
                  </p>
                  <p className="font-medium text-sm">— James R., Data Analyst</p>
                </div>
              </div>
            </div>
            
            {/* Fourth testimonial */}
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm relative">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="italic text-white/90 mb-2 text-sm">
                    "I was stuck in tutorial hell before this. Now I have clear direction and can see myself improving each week."
                  </p>
                  <p className="font-medium text-sm">— Sophia T., Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 