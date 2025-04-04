'use client';

import EmailSubscribe from './EmailSubscribe';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useTracking } from '@/hooks/useTracking';
import AutoTypeInput from './AutoTypeInput';
import WaitlistModal from './WaitlistModal';

export default function HeroSection() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { trackClick } = useTracking({ sectionId: 'hero' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [learningGoal, setLearningGoal] = useState('');
  
  // List of learning goals to rotate through in the auto-typing effect
  const learningGoals = [
    "Python", "JavaScript", "Machine Learning", "UI/UX Design", "How to start a business", 
    "Public Speaking", "How to build an app", "Investment basics", "Product Management", 
    "Figma", "Adobe Illustrator", "3D modeling", "Photography", "Video editing", 
    "Writing a novel", "Singing", "Music production", "How to build a startup", 
    "How to freelance", "Creating a podcast", "Meditation", "Emotional Intelligence", 
    "Time management", "Productivity hacks", "Stoicism", "Personal branding", 
    "Marketing funnels", "TikTok growth", "YouTube growth", "E-commerce", 
    "Crypto basics", "Web3 development", "Prompt engineering", "Data Analysis", 
    "SQL", "No-code tools", "Automations with Zapier", "Excel for finance", 
    "Ethical hacking", "Cybersecurity", "Biology", "Physics", "Philosophy", 
    "History of Rome", "Psychology", "Game Development", "AR/VR", "Blockchain", 
    "Robotics", "Mathematics", "Algorithms", "CompSci fundamentals", "How to draw", 
    "Learn Japanese", "Learn Spanish", "Speed reading", "Negotiation", "How to network", 
    "How to pitch", "Startup fundraising", "Climate science", "AI Safety", 
    "Quantum Computing", "Linux basics", "Docker", "Kubernetes", "How to design logos", 
    "Sales", "Cold emailing", "Customer discovery", "Scrum methodology", 
    "Agile workflows", "Notion workflows", "Career switch to tech", "Financial literacy", 
    "Personal finance", "How to plan events", "Interior design", "Travel planning", 
    "How to build habits", "Healthy cooking", "Fitness training", "How to journal", 
    "How to build a blog", "SEO", "Google Ads", "How to run Facebook ads", 
    "Design thinking", "Creative problem solving", "Critical thinking", "Logical reasoning", 
    "Storytelling", "Resume writing", "Job interview prep", "LinkedIn profile", 
    "Freelance copywriting", "Voice acting", "Acting", "How to build a personal website"
  ];

  const handleLearningGoalSubmit = (value: string) => {
    setLearningGoal(value);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const scrollToEmailForm = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
      trackClick('learning_journey_cta', 'Start Your Learning Journey');
    }
  };
  
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-28 overflow-hidden">
      {/* Decorative elements positioned behind content */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
            <span className="text-blue-600">AI-Guided</span> Learning<br className="hidden sm:inline" /> 
            For Any Skill
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed animate-fade-in-delay-1">
            Find your way through the maze of online courses with personalized learning paths tailored to your goals.
            Our AI-powered roadmaps help you learn efficiently and achieve results faster.
          </p>
          
          {/* Interactive Learning Input */}
          <div className="mt-8 mb-6 animate-fade-in-delay-1 max-w-2xl mx-auto">
            <h2 className="text-xl mb-4 text-gray-700">What do you want to learn?</h2>
            <AutoTypeInput 
              placeholders={learningGoals}
              onSubmit={handleLearningGoalSubmit}
              buttonText="Generate My Roadmap"
            />
          </div>
          
          {/* Trust signal */}
          <div className="mt-4 flex items-center justify-center text-gray-500 animate-fade-in-delay-1">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Join 3,000+ learners waiting for early access</span>
            </span>
          </div>
          
          {/* Visual representation: Before vs After */}
          <div className="mt-16 mb-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">See the Difference</h2>
            <p className="mt-2 text-lg text-gray-600">How our structured approach transforms your learning journey</p>
          </div>
          
          <div className="relative mt-6 mx-auto max-w-4xl animate-fade-in-delay-3">
            <div className="grid md:grid-cols-2 gap-4 bg-white rounded-xl shadow-xl overflow-hidden p-4 md:p-6">
              {/* Before side */}
              <div className="bg-gray-50 rounded-lg p-4 relative flex flex-col h-full">
                <div className="absolute top-3 left-3 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm">
                  BEFORE
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4 text-center">Unstructured Learning</h3>
                <div className="space-y-3 flex-grow min-h-[150px]">
                  <div className="bg-white p-3 rounded-md border border-gray-200 text-sm flex items-center shadow-sm h-[50px]">
                    <span className="text-xl w-7 h-7 flex items-center justify-center mr-3">😵‍💫</span>
                    <span className="font-medium">Too many resources <span className="font-normal text-xs text-red-500">— no structure</span></span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-gray-200 text-sm flex items-center shadow-sm h-[50px]">
                    <span className="text-xl w-7 h-7 flex items-center justify-center mr-3">⌛</span>
                    <span className="font-medium">Wasting time <span className="font-normal text-xs text-red-500">— on random content</span></span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-gray-200 text-sm flex items-center shadow-sm h-[50px]">
                    <span className="text-xl w-7 h-7 flex items-center justify-center mr-3">❌</span>
                    <span className="font-medium">No sense of progress <span className="font-normal text-xs text-red-500">— or achievement</span></span>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div className="inline-block bg-red-50 text-red-700 text-sm px-4 py-2 rounded-full font-medium shadow-sm border border-red-100">
                    Confusion, burnout & self-doubt 😣
                  </div>
                </div>
              </div>
              
              {/* Animated arrow connector for larger screens */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-gradient-to-r from-red-100 via-white to-green-100 p-3 rounded-full shadow-lg border border-blue-100 animate-pulse-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              {/* Animated arrow connector for mobile */}
              <div className="md:hidden flex justify-center my-3">
                <div className="bg-gradient-to-b from-red-100 via-white to-green-100 p-3 rounded-full shadow-lg border border-blue-100 animate-pulse-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* After side */}
              <div className="bg-blue-50 rounded-lg p-4 relative flex flex-col h-full">
                <div className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm">
                  AFTER
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4 text-center">Structured Learning Path</h3>
                <div className="space-y-3 flex-grow min-h-[150px]">
                  <div className="bg-white p-3 rounded-md border border-green-200 text-sm flex items-center shadow-sm h-[50px]">
                    <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold shadow-sm">1</div>
                    <span className="font-medium">Clear Foundations</span>
                    <span className="text-xs text-green-700 ml-1">— get unstuck fast</span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-green-200 text-sm flex items-center shadow-sm h-[50px]">
                    <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold shadow-sm">2</div>
                    <span className="font-medium">Core Concepts</span>
                    <span className="text-xs text-green-700 ml-1">— build understanding</span>
                  </div>
                  <div className="bg-white p-3 rounded-md border border-green-200 text-sm flex items-center shadow-sm h-[50px]">
                    <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold shadow-sm">3</div>
                    <span className="font-medium">Practical Application</span>
                    <span className="text-xs text-green-700 ml-1">— apply & grow</span>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div className="inline-block bg-green-50 text-green-700 text-sm px-4 py-2 rounded-full font-medium shadow-sm border border-green-100">
                    Clarity, momentum & confidence 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for email collection */}
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        learningGoal={learningGoal}
      />
    </section>
  );
} 