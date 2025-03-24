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
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasRecordedInterest, setHasRecordedInterest] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      setHasRecordedInterest(false); // Reset when modal closes
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
      const result = await saveWaitlistEntry({
        email,
        learning_goal: learningGoal,
        metadata: {
          page: typeof window !== 'undefined' ? window.location.pathname : '',
          referrer: typeof window !== 'undefined' ? document.referrer : '',
          timestamp: new Date().toISOString(),
          submitted_form: true
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
      setHasRecordedInterest(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting waitlist entry:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Function to handle closing and recording interest
  const handleClose = async () => {
    if (!hasRecordedInterest && !isSuccess && learningGoal) {
      try {
        // Record the learning interest with an anonymous email
        await saveWaitlistEntry({
          email: `anonymous-${Date.now()}-${Math.random().toString(36).substring(2, 10)}@user.com`,
          learning_goal: learningGoal,
          metadata: {
            page: typeof window !== 'undefined' ? window.location.pathname : '',
            referrer: typeof window !== 'undefined' ? document.referrer : '',
            timestamp: new Date().toISOString(),
            submitted_form: false,
            action: 'cancel'
          }
        });
        setHasRecordedInterest(true);
      } catch (error) {
        console.error('Failed to record learning interest:', error);
      }
    }
    
    // Close the modal
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300"
      onClick={handleClose}
    >
      <div 
        className="absolute inset-0 bg-blue-900/50 opacity-90"
        aria-hidden="true"
      ></div>
      
      <div 
        className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out relative z-10 overflow-hidden modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/40 rounded-full translate-x-20 -translate-y-20 blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300/30 rounded-full animate-blob"></div>
        <div className="absolute top-1/2 -right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-blob animation-delay-2000"></div>
        
        <div className="p-6 sm:p-8 relative">
          {!isSuccess ? (
            <>
              <div className="absolute top-2 right-2">
                <button 
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 float-in">
                Get Early Access
              </h3>
              <p className="text-gray-600 mb-6 float-in animation-delay-200">
                Enter your email to get early access to your custom roadmap for <span className="font-medium text-blue-600">"{learningGoal}"</span>
              </p>
              
              <form onSubmit={handleSubmit} className="float-in animation-delay-400">
                <div className="mb-4">
                  <div className="relative overflow-hidden">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 text-gray-800 shadow-sm
                        ${isFocused ? 'border-blue-400 ring-2 ring-blue-300/50' : 'border-gray-200'} 
                        ${isHovered && !isFocused ? 'border-blue-200 animate-shimmer' : ''}
                      `}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
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
                    <p className="mt-2 text-sm text-red-500 flex items-center animate-fade-in">
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
                    className="flex-grow py-4 px-5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        Processing<span className="ml-1 animate-pulse">.</span><span className="animate-pulse animation-delay-200">.</span><span className="animate-pulse animation-delay-400">.</span>
                      </span>
                    ) : (
                      "Join the waitlist"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="py-4 px-5 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-300 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8 animate-fade-in">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-6 animate-pulse-slow shadow-lg shadow-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 float-in">
                Thanks for joining!
              </h3>
              <p className="text-gray-600 mb-8 float-in animation-delay-200">
                We'll notify you as soon as your learning journey for <span className="font-medium text-blue-600">"{learningGoal}"</span> is ready.
              </p>
              <button
                onClick={handleClose}
                className="w-full py-4 px-5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 float-in animation-delay-400"
              >
                Close
              </button>
              
              {/* Additional decorative elements for success state */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full animate-blob"></div>
              <div className="absolute bottom-5 right-5 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-5 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
              <div className="absolute bottom-5 right-16 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 