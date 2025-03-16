'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "AI-Powered Learning Paths",
      description: "No more guessing; SkillTrack builds a roadmap just for you based on your goals and current knowledge.",
      icon: "🧠"
    },
    {
      title: "Smart Knowledge Testing",
      description: "Identify what you already know and what to focus on next for maximum efficiency.",
      icon: "📊"
    },
    {
      title: "Step-by-Step Learning System",
      description: "Unlock new lessons only after mastering previous ones, ensuring real progress.",
      icon: "🔄"
    },
    {
      title: "Curated Learning Content",
      description: "AI selects the best materials (articles, videos, and podcasts) from thousands of options.",
      icon: "✅"
    },
    {
      title: "All-in-One Learning Hub",
      description: "No need to search elsewhere—everything you need is on SkillTrack.",
      icon: "🏠"
    },
    {
      title: "Time-Boxed Challenges",
      description: "Stay accountable with structured 7, 14, or 30-day learning challenges.",
      icon: "⏱️"
    },
    {
      title: "Follow What Others Are Learning",
      description: "See industry leaders' learning paths & join study groups for collaborative learning.",
      icon: "👥"
    },
    {
      title: "Multi-Mode Learning",
      description: "Switch between reading, listening, and watching based on your learning preference.",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to overcome decision fatigue and learn effectively</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Who is SkillTrack for? */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Who Is SkillTrack For?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students & Career Switchers</h3>
              <p className="text-gray-700">Need structured, efficient learning plans to master new skills quickly and stand out in competitive fields.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">👩‍💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Busy Professionals</h3>
              <p className="text-gray-700">Want a guided experience instead of wasting time searching through random resources online.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifelong Learners</h3>
              <p className="text-gray-700">Desire a customized, low-pressure learning journey that adapts to their changing interests and goals.</p>
            </div>
          </div>
        </div>
        
        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No spam. Just a personalized learning experience.
          </div>
        </div>
      </div>
    </section>
  );
} 