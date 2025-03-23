'use client';

import EmailSubscribe from './EmailSubscribe';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
            Stop Guessing How To Learn. <span className="text-blue-600">Start Mastering.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed animate-fade-in-delay-1">
            Your AI learning coach builds personalized roadmaps that turn overwhelming subjects into clear, actionable steps—so you make real progress, fast.
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
            <div className="grid md:grid-cols-2 gap-4 bg-white rounded-xl shadow-xl overflow-hidden p-4 md:p-6">
              {/* Before side */}
              <div className="bg-gray-50 rounded-lg p-4 relative flex flex-col h-full">
                <div className="absolute top-3 left-3 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm">
                  BEFORE
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4 text-center">Unstructured Learning</h3>
                <div className="space-y-3 flex-grow min-h-[150px]">
                  <div className="bg-white p-3 rounded-md border border-gray-200 text-sm flex items-center justify-end shadow-sm h-[50px]">
                    <div className="flex flex-col items-end mr-3 text-right">
                      <span className="font-medium">Too many resources</span>
                      <span className="text-xs text-gray-500">no direction or structure</span>
                    </div>
                    <span className="text-xl w-7 h-7 flex items-center justify-center">😵‍💫</span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-gray-200 text-sm flex items-center justify-end shadow-sm h-[50px]">
                    <div className="flex flex-col items-end mr-3 text-right">
                      <span className="font-medium">Wasting time</span>
                      <span className="text-xs text-gray-500">on random content</span>
                    </div>
                    <span className="text-xl w-7 h-7 flex items-center justify-center">⌛</span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-gray-200 text-sm flex items-center justify-end shadow-sm h-[50px]">
                    <div className="flex flex-col items-end mr-3 text-right">
                      <span className="font-medium">No sense of progress</span>
                      <span className="text-xs text-gray-500">or achievement</span>
                    </div>
                    <span className="text-xl w-7 h-7 flex items-center justify-center">❌</span>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div className="inline-block bg-red-50 text-red-700 text-sm px-4 py-2 rounded-full font-medium shadow-sm border border-red-100">
                    Confusion, burnout & self-doubt 😣
                  </div>
                </div>
              </div>
              
              {/* Animated arrow connector for larger screens */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-gradient-to-r from-red-100 via-white to-green-100 p-3 rounded-full shadow-lg border border-blue-100 animate-pulse-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              {/* Animated arrow connector for mobile */}
              <div className="md:hidden flex justify-center my-3">
                <div className="bg-gradient-to-b from-red-100 via-white to-green-100 p-3 rounded-full shadow-lg border border-blue-100 animate-pulse-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* After side */}
              <div className="bg-blue-50 rounded-lg p-4 relative flex flex-col h-full">
                <div className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm">
                  AFTER
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4 text-center">Structured Learning Path</h3>
                <div className="space-y-3 flex-grow min-h-[150px]">
                  <div className="bg-white p-3 rounded-md border border-green-200 text-sm flex items-center shadow-sm h-[50px]">
                    <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold shadow-sm">1</div>
                    <span className="font-medium">Clear Foundations</span>
                    <span className="text-xs text-green-700 ml-1">— get unstuck fast</span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-green-200 text-sm flex items-center shadow-sm h-[50px]">
                    <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold shadow-sm">2</div>
                    <span className="font-medium">Core Concepts</span>
                    <span className="text-xs text-green-700 ml-1">— build understanding</span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-green-200 text-sm flex items-center shadow-sm h-[50px]">
                    <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold shadow-sm">3</div>
                    <span className="font-medium">Practical Application</span>
                    <span className="text-xs text-green-700 ml-1">— apply & grow</span>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div className="inline-block bg-green-50 text-green-700 text-sm px-4 py-2 rounded-full font-medium shadow-sm border border-green-100">
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