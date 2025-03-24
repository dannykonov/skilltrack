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
        
        // Check if it's a duplicate key error
        if (error.code === '23505') {
          return { success: true, error: 'You are already on the waitlist!' };
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
            source: 'learning_roadmap_waitlist',
            metadata: {
              learning_goal: entry.learning_goal,
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