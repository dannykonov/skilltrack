'use client';

import EmailSubscribe from './EmailSubscribe';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
            You Know What You Want to Learn—We'll Show You How.
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed animate-fade-in-delay-1">
            You already have the ambition. But where do you start? Learn With AI builds a personalized, step-by-step roadmap so you can learn efficiently, avoid information overload, and make real progress.
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
            <EmailSubscribe buttonText="Learn Smarter" />
          </div>
          
          {/* Visual representation: Before vs After */}
          <div className="relative mt-12 mx-auto max-w-4xl animate-fade-in-delay-3">
            <div className="grid md:grid-cols-2 gap-4 bg-white rounded-xl shadow-xl overflow-hidden p-4">
              {/* Before side */}
              <div className="bg-gray-50 rounded-lg p-4 relative">
                <div className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                  BEFORE
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Unstructured Learning</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-gray-200 text-xs text-gray-500 shadow-sm flex items-center">
                    <span className="mr-2">😵‍💫</span> Too many resources, no direction
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200 text-xs text-gray-500 shadow-sm flex items-center">
                    <span className="mr-2">⌛</span> Wasting time on random content
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200 text-xs text-gray-500 shadow-sm flex items-center">
                    <span className="mr-2">❌</span> No sense of progress or achievement
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-block bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full">
                    Confusion, burnout & self-doubt 😣
                  </div>
                </div>
              </div>
              
              {/* Arrow connector for larger screens */}
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-gradient-to-r from-red-100 to-green-100 p-2 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Arrow connector for mobile */}
              <div className="md:hidden flex justify-center my-2">
                <div className="bg-gradient-to-b from-red-100 to-green-100 p-2 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
              
              {/* After side */}
              <div className="bg-blue-50 rounded-lg p-4 relative">
                <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  AFTER
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">LearnWithAI.baby Structured Path</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-green-200 text-sm flex items-center shadow-sm">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">1</div>
                    <span>Clear Foundations <span className="text-xs text-green-700">(3 days – get unstuck fast)</span></span>
                  </div>
                  <div className="bg-white p-2 rounded border border-green-200 text-sm flex items-center shadow-sm">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">2</div>
                    <span>Core Concepts <span className="text-xs text-green-700">(7 days – build real understanding)</span></span>
                  </div>
                  <div className="bg-white p-2 rounded border border-green-200 text-sm flex items-center shadow-sm">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">3</div>
                    <span>Practical Application <span className="text-xs text-green-700">(10 days – apply & grow)</span></span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-block bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
                    Clarity, momentum & confidence 🚀
                  </div>
                </div>
              </div>
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