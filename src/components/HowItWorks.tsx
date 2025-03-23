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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How Learn With AI Works</h2>
          <p className="mt-4 text-xl text-gray-600">From confusion to clarity in five simple steps</p>
        </div>

        {/* Problem statement */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">The Problem</h3>
          <p className="text-lg text-gray-700">
            You're ready to learn, but figuring out how is overwhelming. Should you start with books, videos, or interactive exercises? How do you track your progress? How do you stay accountable? Without structure, most learners get lost, frustrated, and eventually give up.
          </p>
          
          <h3 className="text-2xl font-semibold text-green-600 mt-8 mb-4">The Solution</h3>
          <p className="text-lg text-gray-700">
            Learn With AI builds a structured, AI-powered learning roadmap tailored to your goals, knowledge level, and learning style—so you always know exactly what to do next. No more confusion, just clear steps toward mastery.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative">
                {/* Number positioned as a badge on top left */}
                <div className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium shadow-md">
                  {step.number}
                </div>
                
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4 text-2xl mx-auto">
                  {step.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                
                {/* Show description only when expanded */}
                {expandedSteps.includes(step.number) && (
                  <p className="text-gray-600 text-center text-sm mb-2 transition-all">
                    {step.description}
                  </p>
                )}
                
                {/* Read more / Read less button */}
                <button 
                  onClick={() => toggleDescription(step.number)}
                  className="text-blue-600 text-xs font-medium hover:text-blue-800 transition-colors focus:outline-none flex items-center justify-center mx-auto mt-1"
                >
                  {expandedSteps.includes(step.number) ? (
                    <>
                      Hide details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning efficiency stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
            <p className="text-gray-700">faster skill acquisition with structured learning paths</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">78%</div>
            <p className="text-gray-700">of learners report better retention with our step-by-step approach</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
            <p className="text-gray-700">completion rate compared to 15% for traditional online courses</p>
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