import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

interface EmailSubscribeProps {
  buttonText?: string;
  className?: string;
}

export default function EmailSubscribe({ 
  buttonText = "Join the Waitlist", 
  className 
}: EmailSubscribeProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormValues) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('emails')
        .insert([{ email: data.email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          setStatus('success'); // Treat duplicate emails as success to avoid revealing if an email is already registered
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        reset();
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setStatus('error');
      setErrorMessage('Failed to submit email. Please try again later.');
    }
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {status === 'success' ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
          <p className="font-medium">Thank you for joining the waitlist!</p>
          <p className="text-sm mt-1">We'll notify you when SkillTrack AI launches.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <input
              {...register('email')}
              type="email"
              placeholder="Enter your email"
              className={cn(
                "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500",
                errors.email ? "border-red-300" : "border-gray-300"
              )}
              disabled={status === 'loading'}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : buttonText}
          </button>
        </form>
      )}
      
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
} 