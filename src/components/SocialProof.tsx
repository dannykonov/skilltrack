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
          {/* Sarah's testimonial - Enhanced female avatar with hair and details */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-600">
                  {/* Hair */}
                  <path d="M30,35 C30,20 40,15 50,15 C60,15 70,20 70,35 L68,50 L32,50 L30,35" fill="currentColor" opacity="0.8" />
                  {/* Face */}
                  <circle cx="50" cy="32" r="18" fill="currentColor" />
                  {/* Neck */}
                  <path d="M43,48 L57,48 L57,55 L43,55 Z" fill="currentColor" />
                  {/* Body */}
                  <path d="M40,55 L60,55 C70,55 75,65 75,80 L75,100 L25,100 L25,80 C25,65 30,55 40,55 Z" fill="currentColor" opacity="0.9" />
                  {/* Eyes */}
                  <ellipse cx="42" cy="30" rx="3" ry="4" fill="white" />
                  <ellipse cx="58" cy="30" rx="3" ry="4" fill="white" />
                  {/* Smile */}
                  <path d="M40,38 C40,38 45,45 50,45 C55,45 60,38 60,38" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
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
          
          {/* Michael's testimonial - Enhanced male avatar with modern glasses and hair */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-600">
                  {/* Hair */}
                  <path d="M30,25 C30,10 40,12 50,12 C60,12 70,15 70,25 L70,35 L30,35 L30,25" fill="currentColor" opacity="0.85" />
                  {/* Face */}
                  <circle cx="50" cy="35" r="18" fill="currentColor" />
                  {/* Neck */}
                  <path d="M43,52 L57,52 L57,59 L43,59 Z" fill="currentColor" />
                  {/* Body */}
                  <path d="M35,59 L65,59 C72,59 78,65 78,85 L78,100 L22,100 L22,85 C22,65 28,59 35,59 Z" fill="currentColor" opacity="0.9" />
                  {/* Modern Glasses Frame */}
                  <path d="M36,32 L46,32 Q47,32 47,33 L47,36 Q47,37 46,37 L36,37 Q35,37 35,36 L35,33 Q35,32 36,32 Z" fill="white" opacity="0.9" />
                  <path d="M54,32 L64,32 Q65,32 65,33 L65,36 Q65,37 64,37 L54,37 Q53,37 53,36 L53,33 Q53,32 54,32 Z" fill="white" opacity="0.9" />
                  <path d="M47,34 L53,34" stroke="white" strokeWidth="1.5" />
                  {/* Slight beard shadow */}
                  <path d="M40,45 C40,45 45,50 50,50 C55,50 60,45 60,45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
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
          
          {/* Priya's testimonial - Enhanced female avatar with stylish hair and earrings */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-blue-600">
                  {/* Hair with style */}
                  <path d="M25,35 C25,15 35,12 50,12 C65,12 75,20 75,35 C75,45 72,45 72,50 L28,50 C28,45 25,45 25,35" fill="currentColor" opacity="0.8" />
                  {/* Face */}
                  <circle cx="50" cy="33" r="18" fill="currentColor" />
                  {/* Neck */}
                  <path d="M43,49 L57,49 L57,56 L43,56 Z" fill="currentColor" />
                  {/* Body */}
                  <path d="M38,56 L62,56 C70,56 75,65 75,85 L75,100 L25,100 L25,85 C25,65 30,56 38,56 Z" fill="currentColor" opacity="0.9" />
                  {/* Eyes */}
                  <ellipse cx="42" cy="30" rx="3" ry="3.5" fill="white" />
                  <ellipse cx="58" cy="30" rx="3" ry="3.5" fill="white" />
                  {/* Smile */}
                  <path d="M40,38 C40,38 45,46 50,46 C55,46 60,38 60,38" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Earrings */}
                  <circle cx="26" cy="33" r="2" fill="white" />
                  <circle cx="74" cy="33" r="2" fill="white" />
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