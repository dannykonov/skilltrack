'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Personalized Learning Paths",
      description: "AI creates a structured roadmap tailored to your specific goals, learning style, and current skill level.",
      icon: "✅"
    },
    {
      title: "Step-by-Step Unlocking",
      description: "Complete one step before unlocking the next, ensuring real learning and measurable progress.",
      icon: "✅"
    },
    {
      title: "Curated Best Resources",
      description: "No more decision fatigue—get only the most effective content from thousands of options.",
      icon: "✅"
    },
    {
      title: "Knowledge Gap Testing",
      description: "AI detects what you already know & suggests what to focus on next for maximum efficiency.",
      icon: "✅"
    },
    {
      title: "Flexible Learning Modes",
      description: "Switch between reading, listening, and interactive exercises based on your preferences.",
      icon: "✅"
    }
  ];

  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why SkillTrack AI Works</h2>
          <p className="mt-4 text-xl text-gray-600">The science-backed approach to effective learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            We respect your privacy—no spam, ever
          </div>
        </div>
      </div>
    </section>
  );
} 