'use client';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "SkillTrack AI helped me go from beginner to proficient in web development in just 3 months. The personalized roadmap was exactly what I needed.",
      author: "Sarah J., UX Designer",
      stars: 5
    },
    {
      quote: "I've tried dozens of learning platforms, but SkillTrack AI is the first one that actually adapts to my learning style and keeps me accountable.",
      author: "Michael T., Marketing Manager",
      stars: 5
    },
    {
      quote: "The step-by-step approach eliminated my decision fatigue. I'm finally making real progress in learning data science.",
      author: "Priya K., Business Analyst",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Early Users Are Saying</h2>
          <p className="mt-4 text-xl text-gray-600">Join thousands of satisfied learners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="font-medium text-gray-900">{testimonial.author}</div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">Trusted by learners from leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-8 text-gray-400 font-bold">GOOGLE</div>
            <div className="h-8 text-gray-400 font-bold">MICROSOFT</div>
            <div className="h-8 text-gray-400 font-bold">AMAZON</div>
            <div className="h-8 text-gray-400 font-bold">META</div>
            <div className="h-8 text-gray-400 font-bold">APPLE</div>
          </div>
        </div>
      </div>
    </section>
  );
} 