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

    // Check if a subscribers table exists, if not, create it
    const { error: tableError } = await supabase
      .from('subscribers')
      .select('email')
      .limit(1)
      .catch(() => ({ error: { message: 'Table does not exist' } }));

    if (tableError) {
      console.log('Creating subscribers table...');
      await supabase.rpc('create_subscribers_table').catch((err: Error) => {
        console.error('Error creating table:', err);
      });
    }

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
  } catch (err) {
    console.error('Failed to save subscriber:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
} 