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
          {/* Sarah's testimonial - More human female avatar */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-200 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-500">
                  {/* Background face shape */}
                  <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
                  
                  {/* Friendlier face shape */}
                  <ellipse cx="50" cy="42" rx="24" ry="26" fill="currentColor" />
                  
                  {/* Hairstyle with gentle curves */}
                  <path d="M26,42 C26,25 38,16 50,16 C62,16 74,25 74,42 L74,50 C74,40 72,40 72,40 L28,40 C28,40 26,40 26,50 L26,42" fill="currentColor" opacity="0.8" />
                  
                  {/* Neck */}
                  <path d="M42,65 L58,65 L58,72 L42,72 Z" fill="currentColor" opacity="0.9" />
                  
                  {/* Shoulders */}
                  <path d="M35,72 C35,72 42,75 50,75 C58,75 65,72 65,72 L65,85 L35,85 Z" fill="currentColor" opacity="0.7" />
                  
                  {/* More natural eyes with eyelids */}
                  <ellipse cx="40" cy="38" rx="3.5" ry="3" fill="white" />
                  <ellipse cx="60" cy="38" rx="3.5" ry="3" fill="white" />
                  <circle cx="40" cy="38" r="1.5" fill="#333" />
                  <circle cx="60" cy="38" r="1.5" fill="#333" />
                  <path d="M36.5,35 Q40,33 43.5,35" stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.7" />
                  <path d="M56.5,35 Q60,33 63.5,35" stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.7" />
                  
                  {/* Softer, natural smile */}
                  <path d="M40,48 C40,48 45,54 50,54 C55,54 60,48 60,48" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
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
          
          {/* Michael's testimonial - More human male avatar */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-200 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-500">
                  {/* Background face shape */}
                  <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
                  
                  {/* Friendlier face shape */}
                  <ellipse cx="50" cy="45" rx="26" ry="28" fill="currentColor" />
                  
                  {/* Shorter hair */}
                  <path d="M26,30 C26,22 36,17 50,17 C64,17 74,22 74,30 L74,40 L26,40 L26,30" fill="currentColor" opacity="0.85" />
                  
                  {/* Neck */}
                  <path d="M42,70 L58,70 L58,77 L42,77 Z" fill="currentColor" opacity="0.9" />
                  
                  {/* Shoulders */}
                  <path d="M32,77 C32,77 40,81 50,81 C60,81 68,77 68,77 L68,90 L32,90 Z" fill="currentColor" opacity="0.7" />
                  
                  {/* More natural eyes with eyelids */}
                  <ellipse cx="40" cy="42" rx="3.5" ry="3" fill="white" />
                  <ellipse cx="60" cy="42" rx="3.5" ry="3" fill="white" />
                  <circle cx="40" cy="42" r="1.5" fill="#333" />
                  <circle cx="60" cy="42" r="1.5" fill="#333" />
                  <path d="M36.5,39 Q40,37 43.5,39" stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.7" />
                  <path d="M56.5,39 Q60,37 63.5,39" stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.7" />
                  
                  {/* Subtle smile */}
                  <path d="M40,52 C40,52 45,57 50,57 C55,57 60,52 60,52" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  
                  {/* Friendlier glasses */}
                  <path d="M36,39 Q40,37 44,39 Q40,41 36,39" fill="white" opacity="0.9" />
                  <path d="M56,39 Q60,37 64,39 Q60,41 56,39" fill="white" opacity="0.9" />
                  <path d="M44,39 L56,39" stroke="white" strokeWidth="1" />
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
          
          {/* Priya's testimonial - More human female avatar */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-200 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-500">
                  {/* Background face shape */}
                  <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
                  
                  {/* Friendlier face shape */}
                  <ellipse cx="50" cy="42" rx="24" ry="26" fill="currentColor" />
                  
                  {/* Longer hairstyle with gentle curves */}
                  <path d="M20,42 C20,25 35,16 50,16 C65,16 80,25 80,42 C80,52 78,55 76,60 L24,60 C22,55 20,52 20,42" fill="currentColor" opacity="0.8" />
                  
                  {/* Neck */}
                  <path d="M42,65 L58,65 L58,72 L42,72 Z" fill="currentColor" opacity="0.9" />
                  
                  {/* Shoulders */}
                  <path d="M35,72 C35,72 42,76 50,76 C58,76 65,72 65,72 L65,85 L35,85 Z" fill="currentColor" opacity="0.7" />
                  
                  {/* More natural eyes with eyelids */}
                  <ellipse cx="40" cy="38" rx="3.5" ry="3" fill="white" />
                  <ellipse cx="60" cy="38" rx="3.5" ry="3" fill="white" />
                  <circle cx="40" cy="38" r="1.5" fill="#333" />
                  <circle cx="60" cy="38" r="1.5" fill="#333" />
                  <path d="M36.5,35 Q40,33 43.5,35" stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.7" />
                  <path d="M56.5,35 Q60,33 63.5,35" stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.7" />
                  
                  {/* Natural smile */}
                  <path d="M40,48 C40,48 45,54 50,54 C55,54 60,48 60,48" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  
                  {/* Subtle earrings */}
                  <circle cx="22" cy="42" r="1.5" fill="white" />
                  <circle cx="78" cy="42" r="1.5" fill="white" />
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