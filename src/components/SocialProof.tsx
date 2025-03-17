'use client';

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Learning Transformed</h2>
          <p className="mt-4 text-xl text-gray-600">See how our structured approach helps people learn more effectively</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3.2x</div>
            <p className="text-gray-700">Faster skill acquisition compared to unstructured learning</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
            <p className="text-gray-700">Higher course completion rate with structured learning paths</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">94%</div>
            <p className="text-gray-700">Of users report better understanding of complex topics</p>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "I was jumping between tutorials without making real progress. SkillTrack's structured approach showed me exactly how to build on concepts step-by-step. Now I understand the 'why' behind everything I learn."
            </p>
            <div className="font-medium text-gray-900">Sarah J., Data Scientist</div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "The structured learning path was a game-changer. Instead of wasting time figuring out what to learn next, I followed SkillTrack's roadmap and mastered Python in half the time I expected."
            </p>
            <div className="font-medium text-gray-900">Michael T., Software Engineer</div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "As a busy professional, I needed an efficient way to learn new skills. SkillTrack's structured approach eliminated wasted time and kept me focused on exactly what I needed to learn next."
            </p>
            <div className="font-medium text-gray-900">Priya K., Marketing Director</div>
          </div>
        </div>
      </div>
    </section>
  );
} 