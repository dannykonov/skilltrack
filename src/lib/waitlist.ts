'use client';

import { supabase } from './supabase';

export interface WaitlistEntry {
  email: string;
  learning_goal: string;
  created_at?: string;
  metadata?: Record<string, any>;
}

/**
 * Save a waitlist entry with learning goal to the Supabase database
 */
export async function saveWaitlistEntry(entry: WaitlistEntry): Promise<{ success: boolean; error?: string }> {
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

    // Handle anonymous emails (for users who cancel)
    const isAnonymous = entry.email.includes('anonymous');
    
    // Add creation timestamp
    const entryWithTimestamp = {
      ...entry,
      created_at: new Date().toISOString(),
    };

    try {
      // Insert the waitlist entry
      const { error } = await supabase
        .from('waitlist')
        .insert([entryWithTimestamp]);

      if (error) {
        console.error('Error saving waitlist entry:', error);
        
        // For duplicate email errors
        if (error.code === '23505') {
          // Only show this message for real email addresses, not anonymous ones
          if (!isAnonymous) {
            return { success: true, error: 'You are already on the waitlist!' };
          } else {
            // For anonymous entries that conflict, try again with a different random email
            const newEmail = `anonymous-${Date.now()}-${Math.random().toString(36).substring(2, 15)}@user.com`;
            return saveWaitlistEntry({
              ...entry,
              email: newEmail
            });
          }
        }
        
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (insertError) {
      console.error('Error inserting waitlist entry:', insertError);
      
      // Fallback to subscribers table if waitlist table doesn't exist yet
      try {
        const { error: subscriberError } = await supabase
          .from('subscribers')
          .insert([{
            email: entry.email,
            source: isAnonymous ? 'learning_interest_only' : 'learning_roadmap_waitlist',
            metadata: {
              learning_goal: entry.learning_goal,
              is_anonymous: isAnonymous,
              ...entry.metadata
            }
          }]);
        
        if (subscriberError) {
          console.error('Error saving to subscribers:', subscriberError);
          return { success: false, error: 'Could not save your information. Please try again.' };
        }
        
        return { success: true };
      } catch (fallbackError) {
        console.error('Error with fallback save:', fallbackError);
        return { success: false, error: 'An error occurred. Please try again later.' };
      }
    }
  } catch (err) {
    console.error('Failed to save waitlist entry:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
} 