'use client';

import EmailSubscribe from './EmailSubscribe';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
            Too Many Courses, No Clear Path? SkillTrack Gives You an AI-Powered Learning Roadmap.
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed animate-fade-in-delay-1">
            The internet is full of learning resources—but no clear starting point. SkillTrack eliminates decision fatigue by testing what you already know and generating a structured, step-by-step learning plan tailored to your goals.
          </p>
          
          {/* Trust signal */}
          <div className="mt-4 flex items-center justify-center text-gray-500 animate-fade-in-delay-1">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Join 3,000+ learners waiting for early access</span>
            </span>
          </div>
          
          <div className="mt-8 mb-8 animate-fade-in-delay-2">
            <EmailSubscribe buttonText="Get My AI Learning Plan" />
          </div>
          
          {/* Visual representation: Before vs After */}
          <div className="relative mt-12 mx-auto max-w-4xl animate-fade-in-delay-3">
            <div className="grid md:grid-cols-2 gap-4 bg-white rounded-xl shadow-xl overflow-hidden p-4">
              {/* Before side */}
              <div className="bg-gray-50 rounded-lg p-4 relative">
                <div className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                  BEFORE
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Overwhelmed by Options</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-white p-2 rounded border border-gray-200 text-xs text-gray-500 shadow-sm">
                      Course {i+1}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-block bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full">
                    Decision Fatigue 😩
                  </div>
                </div>
              </div>
              
              {/* After side */}
              <div className="bg-blue-50 rounded-lg p-4 relative">
                <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  AFTER
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Clear Learning Path</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-green-200 text-sm flex items-center shadow-sm">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">1</div>
                    <span>Introduction to Topic</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-green-200 text-sm flex items-center shadow-sm">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">2</div>
                    <span>Core Concepts</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-green-200 text-sm flex items-center shadow-sm">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">3</div>
                    <span>Practical Application</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-block bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
                    Clear Progress 🚀
                  </div>
                </div>
              </div>
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