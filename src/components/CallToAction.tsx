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
          
          <h2 className="text-3xl md:text-4xl font-bold">Don't Waste Time Guessing What to Learn Next</h2>
          
          <p className="mt-4 text-xl opacity-90">
            Let AI create your personalized learning roadmap and eliminate decision fatigue for good.
          </p>
          
          <div className="mt-10 bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6 text-gray-800 font-medium">
              Join 3,000+ learners already on the waitlist
            </div>
            
            <EmailSubscribe 
              buttonText="Get My AI Learning Plan" 
              className=""
            />
            
            <div className="mt-4 text-gray-500 text-sm">
              By joining, you'll be first in line when we launch and help shape the future of AI-powered learning.
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
              "Before SkillTrack, I was overwhelmed by the sheer number of online courses. I'd start one, then find another that seemed better, and never finish anything. SkillTrack tested what I knew and created a clear path forward. Now I'm making real progress!"
            </p>
            <div className="mt-4 font-medium">
              - Jamie R., Software Engineer
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="mt-12">
            <a 
              href="#top" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Get Started Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 