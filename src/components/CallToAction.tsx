'use client';

import EmailSubscribe from './EmailSubscribe';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Master Any Skill with a Clear Learning Strategy
          </h2>
          <p className="text-xl mb-8">
            Stop wasting time with unstructured learning. SkillTrack creates a personalized, step-by-step roadmap that shows you exactly HOW to learn efficiently and effectively.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 mb-10 backdrop-blur-sm">
            <p className="text-lg font-medium mb-2">Join 3,000+ learners already learning smarter</p>
            <EmailSubscribe buttonText="Start Learning Smarter" />
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="italic text-white/90 mb-2">
                  "I've tried dozens of online courses but always got stuck halfway through. SkillTrack's structured approach changed everything - it broke down complex topics into manageable steps and showed me exactly how to progress. I've learned more in 3 weeks than in the previous 6 months of self-study."
                </p>
                <p className="font-medium">— Alex K., Software Developer</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#top" 
            className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
          >
            Transform How You Learn
          </a>
        </div>
      </div>
    </section>
  );
} 