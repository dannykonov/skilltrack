'use client';

import { useState } from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Learning Goal",
      description: "Select the skill or subject you already want to master. No more wondering what to learn.",
      icon: "🎯"
    },
    {
      number: 2,
      title: "AI Assesses Your Knowledge",
      description: "Take a quick test to identify your current level and knowledge gaps.",
      icon: "🧠"
    },
    {
      number: 3,
      title: "Get Your Learning Roadmap",
      description: "Receive a personalized, step-by-step plan with clear milestones and timeframes.",
      icon: "🗺️"
    },
    {
      number: 4,
      title: "Access Curated Resources",
      description: "Learn from the best materials—articles, videos, exercises—all in one place.",
      icon: "📚"
    },
    {
      number: 5,
      title: "Track Progress & Adapt",
      description: "Monitor your advancement while the AI adjusts your path based on your performance.",
      icon: "🚀"
    }
  ];

  // State to track which descriptions are expanded
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  const toggleDescription = (stepNumber: number) => {
    if (expandedSteps.includes(stepNumber)) {
      setExpandedSteps(expandedSteps.filter(num => num !== stepNumber));
    } else {
      setExpandedSteps([...expandedSteps, stepNumber]);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">AI-Powered Learning <span className="text-blue-600">That Works</span></h2>
          <p className="mt-4 text-xl text-gray-600">Your path from confusion to mastery in 5 simple steps</p>
        </div>

        {/* Problem statement */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">The Challenge</h3>
          <p className="text-lg text-gray-700">
            Learning anything new means drowning in endless resources with no clear starting point. Most learners waste time, lose momentum, and quit before seeing results.
          </p>
          
          <h3 className="text-2xl font-semibold text-green-600 mt-8 mb-4">Our Solution</h3>
          <p className="text-lg text-gray-700">
            A personalized AI roadmap that analyzes your goals and skill level, then delivers exactly what to learn, when to learn it, and how to apply it—transforming overwhelming subjects into achievable steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - now responsive with multiple breakpoints */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          {/* Updated grid for better responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative h-[360px] flex flex-col">
                {/* Number positioned as a badge on top left - larger and more visible */}
                <div className="absolute -top-3 -left-3 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-base font-semibold shadow-md">
                  {step.number}
                </div>
                
                {/* Larger icon with improved styling */}
                <div className="flex items-center justify-center w-24 h-24 bg-blue-50 rounded-full mb-4 text-4xl mx-auto">
                  {step.icon}
                </div>
                
                {/* Larger title text */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                
                {/* Description container with fixed height */}
                <div className="flex-grow flex flex-col justify-between">
                  <div className="description-container relative" style={{ height: '80px' }}>
                    {expandedSteps.includes(step.number) ? (
                      <p className="text-gray-600 text-center text-base transition-all absolute inset-0 overflow-auto py-2">
                        {step.description}
                      </p>
                    ) : (
                      <p className="text-gray-600 text-center text-base opacity-0 absolute inset-0">
                        {step.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Larger Read more / Read less button at the bottom */}
                  <div className="mt-auto pt-3">
                    <button 
                      onClick={() => toggleDescription(step.number)}
                      className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors focus:outline-none flex items-center justify-center mx-auto"
                    >
                      {expandedSteps.includes(step.number) ? (
                        <>
                          Hide details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Read more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning efficiency stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">3× <span className="text-blue-600 text-2xl font-semibold">Faster</span></div>
            <p className="text-gray-700 mt-3">Learn new skills in weeks, not months</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">78% <span className="text-blue-600 text-2xl font-semibold">Better</span></div>
            <p className="text-gray-700 mt-3">Recall and apply what you learn</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">92% <span className="text-blue-600 text-2xl font-semibold">Complete</span></div>
            <p className="text-gray-700 mt-3">Their learning goals with our system</p>
          </div>
        </div>
        
        {/* CTA button */}
        <div className="mt-12 text-center">
          <a 
            href="#cta" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-pulse-slow"
          >
            Learn Smarter
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 