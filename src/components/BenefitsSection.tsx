export default function BenefitsSection() {
  const benefits = [
    {
      title: "Eliminate Guesswork",
      description: "AI curates the best learning resources for you, saving you hours of research and uncertainty.",
      icon: "✅"
    },
    {
      title: "Structured Learning Paths",
      description: "No more jumping between random courses. Follow a coherent, progressive learning journey.",
      icon: "✅"
    },
    {
      title: "Stay Accountable",
      description: "AI-generated deadlines & reminders keep you on track and motivated to achieve your goals.",
      icon: "✅"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose SkillTrack AI?</h2>
          <p className="mt-4 text-xl text-gray-600">The smarter way to learn new skills</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 