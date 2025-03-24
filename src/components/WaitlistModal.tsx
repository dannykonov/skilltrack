'use client';

import { useState, useEffect } from 'react';
import { saveWaitlistEntry } from '@/lib/waitlist';

export interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  learningGoal: string;
}

export default function WaitlistModal({ 
  isOpen, 
  onClose,
  learningGoal
}: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Save the waitlist entry to Supabase
      const result = await saveWaitlistEntry({
        email,
        learning_goal: learningGoal,
        metadata: {
          page: typeof window !== 'undefined' ? window.location.pathname : '',
          referrer: typeof window !== 'undefined' ? document.referrer : '',
          timestamp: new Date().toISOString()
        }
      });
      
      if (!result.success) {
        if (result.error) {
          setError(result.error);
        } else {
          setError('Failed to join the waitlist. Please try again.');
        }
        setIsSubmitting(false);
        return;
      }
      
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting waitlist entry:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="absolute inset-0 bg-black/70 opacity-70"
        aria-hidden="true"
      ></div>
      
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform scale-100 opacity-100 transition-all duration-300 ease-out relative z-10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/20 rounded-full translate-x-20 -translate-y-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100/30 dark:bg-purple-900/20 rounded-full -translate-x-20 translate-y-20 blur-xl"></div>
        
        <div className="p-6 sm:p-8 relative">
          {!isSuccess ? (
            <>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Get Early Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Enter your email to get early access to your custom roadmap for <span className="font-medium text-blue-600 dark:text-blue-400">"{learningGoal}"</span>
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white dark:bg-gray-800 shadow-sm transition-all duration-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                    {isSubmitting && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center">
                      <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {error}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow py-4 px-5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : "Join the waitlist"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-4 px-5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Thanks for joining!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We'll notify you as soon as your learning journey for <span className="font-medium text-blue-600 dark:text-blue-400">"{learningGoal}"</span> is ready.
              </p>
              <button
                onClick={onClose}
                className="w-full py-4 px-5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 