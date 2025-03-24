'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Structured Learning Paths",
      description: "Follow a clear, step-by-step roadmap tailored to your goals and current knowledge level.",
      icon: "🗺️"
    },
    {
      title: "Smart Gap Analysis",
      description: "Identify exactly what to learn next based on your understanding, ensuring optimal progress.",
      icon: "🔍"
    },
    {
      title: "Progressive Learning System",
      description: "Master concepts in the optimal order, building on previous knowledge for better retention.",
      icon: "🧩"
    },
    {
      title: "Curated Learning Materials",
      description: "Access the most effective resources for each concept—all in one place with no endless searching.",
      icon: "✅"
    },
    {
      title: "Time-Optimized Learning",
      description: "Learn efficiently with time estimates and structured challenges to keep you on track.",
      icon: "⏱️"
    },
    {
      title: "Collaborative & Adaptive Learning",
      description: "Connect with peers while your roadmap evolves based on your progress for optimal learning.",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="benefits">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Learn More Effectively</h2>
          <p className="mt-4 text-xl text-gray-600">Learn With AI transforms how you learn with these powerful features</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Who is Learn With AI for? */}
        <div className="mt-20 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Who Benefits Most from Learn With AI?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl relative">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students & Career Changers</h3>
              <p className="text-gray-700">Who need to learn efficiently with clear structure and guidance to achieve their goals faster.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl relative">
              <div className="text-3xl mb-4">👩‍💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Busy Professionals</h3>
              <p className="text-gray-700">Who want to maximize learning in limited time with focused, structured approaches rather than random exploration.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl relative">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Directed Learners</h3>
              <p className="text-gray-700">Who know what they want to learn but need guidance on the most effective learning path and resources.</p>
            </div>
          </div>
        </div>
        
        {/* Trust badge */}
        <div className="mt-16 text-center relative">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 text-sm font-medium relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944A11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No spam. Just a personalized learning experience.
          </div>
        </div>
      </div>
    </section>
  );
} 