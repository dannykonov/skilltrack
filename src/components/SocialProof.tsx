'use client';

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Learning Transformed</h2>
          <p className="mt-4 text-xl text-gray-600">See how our structured approach helps people learn more effectively</p>
        </div>
        
        {/* Personalized Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sarah's testimonial */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-600">
                  <circle cx="50" cy="30" r="20" fill="currentColor" />
                  <path d="M50,50 L50,50 C66,50 80,64 80,80 L80,100 L20,100 L20,80 C20,64 34,50 50,50 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium text-lg text-gray-900">Sarah J.</div>
                <div className="text-sm text-blue-600 min-w-[110px]">Data Scientist</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 italic">
              "I was jumping between tutorials without making real progress. Learn With AI's structured approach showed me exactly how to build on concepts step-by-step. Now I understand the 'why' behind everything I learn."
            </p>
          </div>
          
          {/* Michael's testimonial */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-600">
                  <circle cx="50" cy="30" r="20" fill="currentColor" />
                  <path d="M50,50 L50,50 C66,50 80,64 80,80 L80,100 L20,100 L20,80 C20,64 34,50 50,50 Z" fill="currentColor" />
                  <rect x="60" y="25" width="12" height="5" fill="currentColor" /> {/* Glasses */}
                  <rect x="28" y="25" width="12" height="5" fill="currentColor" /> {/* Glasses */}
                  <path d="M28,27 L60,27" stroke="currentColor" strokeWidth="2" /> {/* Glasses bridge */}
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium text-lg text-gray-900">Michael T.</div>
                <div className="text-sm text-blue-600 min-w-[110px]">Software Engineer</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 italic">
              "The structured learning path was a game-changer. Instead of wasting time figuring out what to learn next, I followed Learn With AI's roadmap and mastered Python in half the time I expected."
            </p>
          </div>
          
          {/* Priya's testimonial */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-600">
                  <circle cx="50" cy="30" r="20" fill="currentColor" />
                  <path d="M50,50 L50,50 C66,50 80,64 80,80 L80,100 L20,100 L20,80 C20,64 34,50 50,50 Z" fill="currentColor" />
                  <path d="M35,32 C35,32 40,42 50,42 C60,42 65,32 65,32" stroke="currentColor" strokeWidth="2" fill="none" /> {/* Smile */}
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium text-lg text-gray-900">Priya K.</div>
                <div className="text-sm text-blue-600 min-w-[110px]">Marketing Director</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 italic">
              "As a busy professional, I needed an efficient way to learn new skills. Learn With AI's structured approach eliminated wasted time and kept me focused on exactly what I needed to learn next."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 