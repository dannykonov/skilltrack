'use client';

import EmailSubscribe from './EmailSubscribe';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
            Never Wonder What to Learn Next—Your AI-Powered Learning Roadmap is Here!
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed animate-fade-in-delay-1">
            SkillTrack generates a personalized, step-by-step roadmap tailored to your learning goals—so you can focus on progress, not searching for resources.
          </p>
          
          {/* Trust signal */}
          <div className="mt-4 flex items-center justify-center text-gray-500 animate-fade-in-delay-1">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Join 2,500+ learners waiting for early access</span>
            </span>
          </div>
          
          <div className="mt-8 mb-8 animate-fade-in-delay-2">
            <EmailSubscribe buttonText="Get My AI Learning Path" />
          </div>
          
          {/* Visual representation */}
          <div className="relative mt-12 mx-auto max-w-4xl animate-fade-in-delay-3">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <Image 
                src="/learning-path-mockup.svg" 
                alt="AI-generated learning roadmap example" 
                width={800} 
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Urgency badge */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-3 shadow-lg animate-pulse-slow">
              Early access spots limited!
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
} 