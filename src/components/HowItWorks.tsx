'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Tell us your learning goal",
      description: "Share your specific learning objectives and current skill level. Our AI analyzes your needs.",
      icon: "🎯"
    },
    {
      number: 2,
      title: "Get your personalized roadmap",
      description: "Receive a custom learning path with curated resources tailored to your learning style.",
      icon: "🗺️"
    },
    {
      number: 3,
      title: "Learn step-by-step",
      description: "Follow your structured path, unlock new content as you progress, and track your achievements.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How SkillTrack AI Works</h2>
          <p className="mt-4 text-xl text-gray-600">Three simple steps to your personalized learning journey</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 text-2xl mx-auto">
                  {step.icon}
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA button */}
        <div className="mt-12 text-center">
          <a 
            href="#cta" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Started Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 