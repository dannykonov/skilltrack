'use client';

import EmailSubscribe from './EmailSubscribe';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white" id="cta">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm font-medium mb-6">
            Limited Time Offer
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">Be Among the First to Experience AI-Powered Learning</h2>
          
          <p className="mt-4 text-xl opacity-90">
            Early access spots are limited—sign up today to secure your personalized learning roadmap!
          </p>
          
          <div className="mt-10 bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6 text-gray-800 font-medium">
              Join 2,500+ learners already on the waitlist
            </div>
            
            <EmailSubscribe 
              buttonText="Get My AI Learning Path" 
              className=""
            />
            
            <div className="mt-4 text-gray-500 text-sm">
              By joining, you'll also receive exclusive updates and early access to new features.
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-12 bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="italic text-white text-opacity-90">
              "SkillTrack AI completely transformed how I approach learning new skills. The personalized roadmap saved me countless hours of research and kept me focused on what matters."
            </p>
            <div className="mt-4 font-medium">
              - Alex K., Software Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 