'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Tell Us What You Want to Learn",
      description: "Choose your subject or skill goal (e.g., \"Learn Data Science,\" \"Improve Business Strategy\").",
      icon: "🎯"
    },
    {
      number: 2,
      title: "AI Tests What You Already Know",
      description: "Take a quick assessment to identify knowledge gaps and your current skill level.",
      icon: "🧠"
    },
    {
      number: 3,
      title: "Get Your Personalized Learning Plan",
      description: "AI builds a structured, step-by-step roadmap tailored specifically to your needs.",
      icon: "🗺️"
    },
    {
      number: 4,
      title: "Access Curated Learning Materials",
      description: "Read, watch, and listen to the best resources—all in one place, no more searching.",
      icon: "📚"
    },
    {
      number: 5,
      title: "Learn with Adaptive Adjustments",
      description: "AI updates your roadmap as you progress, ensuring you're always on the optimal path.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How SkillTrack Works</h2>
          <p className="mt-4 text-xl text-gray-600">From overwhelmed to organized in five simple steps</p>
        </div>

        {/* Problem statement */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">The Problem</h3>
          <p className="text-lg text-gray-700">
            Online learning should be easy, but instead, it's overwhelming. There are thousands of courses, conflicting advice, and no clear roadmap. Most learners waste hours searching for resources instead of actually learning.
          </p>
          
          <h3 className="text-2xl font-semibold text-green-600 mt-8 mb-4">The Solution</h3>
          <p className="text-lg text-gray-700">
            SkillTrack is built for learners who feel lost in a sea of online content. Our AI tests what you already know, identifies gaps, and creates a personalized learning roadmap—so you always know what to do next.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4 text-2xl mx-auto">
                  {step.icon}
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium mb-3 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA button */}
        <div className="mt-12 text-center">
          <a 
            href="#cta" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-pulse-slow"
          >
            Get My AI Learning Plan
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 