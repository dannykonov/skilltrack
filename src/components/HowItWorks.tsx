export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Tell us your learning goal",
      description: "AI personalizes a roadmap based on your specific goals and current skill level.",
      icon: "🎯"
    },
    {
      number: 2,
      title: "Get a structured learning plan",
      description: "Receive curated courses, books, and projects tailored to your learning style.",
      icon: "📚"
    },
    {
      number: 3,
      title: "Stay on track",
      description: "Follow deadlines, track your progress, and get AI adjustments as you learn.",
      icon: "⏱️"
    }
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">Three simple steps to master any skill</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 text-2xl">
                {step.icon}
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 