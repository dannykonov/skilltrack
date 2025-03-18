'use client';

import { supabase } from './supabase';

export interface Subscriber {
  email: string;
  source?: string;
  created_at?: string;
  metadata?: Record<string, any>;
}

/**
 * Save a subscriber email to the Supabase database
 */
export async function saveSubscriber(subscriber: Subscriber): Promise<{ success: boolean; error?: string }> {
  try {
    // Make sure we're on the client side
    if (typeof window === 'undefined') {
      return { success: false, error: 'Can only be called on the client side' };
    }

    // Check if supabase is available
    if (!supabase) {
      console.error('Supabase client not initialized');
      return { success: false, error: 'Database connection not available' };
    }

    // Add creation timestamp
    const subscriberWithTimestamp = {
      ...subscriber,
      created_at: new Date().toISOString(),
    };

    // Skip table check and just try to insert directly
    try {
      // Insert the subscriber
      const { error } = await supabase
        .from('subscribers')
        .insert([subscriberWithTimestamp]);

      if (error) {
        console.error('Error saving subscriber:', error);
        
        // Check if it's a duplicate key error
        if (error.code === '23505') {
          return { success: true, error: 'You are already subscribed!' };
        }
        
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (insertError) {
      console.error('Error inserting subscriber:', insertError);
      
      // If we get here, attempt to save the email another way - to website_clicks table
      try {
        // Save to the website_clicks table as a fallback
        const { error: clickError } = await supabase
          .from('website_clicks')
          .insert([{
            page_path: '/email-signup',
            button_id: 'email_signup',
            button_text: subscriberWithTimestamp.email,
            section_id: subscriberWithTimestamp.source || 'email_signup',
            user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
            referrer: typeof window !== 'undefined' ? document.referrer : '',
          }]);
        
        if (clickError) {
          console.error('Error saving to website_clicks:', clickError);
          return { success: false, error: 'Could not save your email. Please try again.' };
        }
        
        return { success: true };
      } catch (clickInsertError) {
        console.error('Error with fallback save:', clickInsertError);
        return { success: false, error: 'An error occurred. Please try again later.' };
      }
    }
  } catch (err) {
    console.error('Failed to save subscriber:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
} 