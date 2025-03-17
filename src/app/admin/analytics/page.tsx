'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface DailyClickCount {
  day: string;
  total_clicks: number;
  unique_visitors: number;
}

interface ButtonClickAnalytic {
  button_id: string;
  button_text: string;
  click_count: number;
  unique_clickers: number;
}

interface SectionEngagement {
  section_id: string;
  engagement_count: number;
}

export default function AnalyticsDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dailyClicks, setDailyClicks] = useState<DailyClickCount[]>([]);
  const [buttonClicks, setButtonClicks] = useState<ButtonClickAnalytic[]>([]);
  const [sectionEngagement, setSectionEngagement] = useState<SectionEngagement[]>([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  
  useEffect(() => {
    async function fetchAnalytics() {
      setIsLoading(true);
      try {
        // Fetch daily click counts
        const { data: dailyData, error: dailyError } = await supabase
          .from('daily_click_counts')
          .select('*')
          .order('day', { ascending: false })
          .limit(30);
        
        if (dailyError) throw dailyError;
        setDailyClicks(dailyData || []);
        
        // Fetch button click analytics
        const { data: buttonData, error: buttonError } = await supabase
          .from('button_click_analytics')
          .select('*')
          .order('click_count', { ascending: false });
        
        if (buttonError) throw buttonError;
        setButtonClicks(buttonData || []);
        
        // Fetch section engagement
        const { data: sectionData, error: sectionError } = await supabase
          .from('section_engagement')
          .select('*')
          .order('engagement_count', { ascending: false });
        
        if (sectionError) throw sectionError;
        setSectionEngagement(sectionData || []);
        
        // Fetch total clicks
        const { data: totalData, error: totalError } = await supabase
          .from('website_clicks')
          .select('id', { count: 'exact' });
        
        if (totalError) throw totalError;
        setTotalClicks(totalData?.length || 0);
        
        // Fetch unique visitors
        const { data: uniqueData, error: uniqueError } = await supabase
          .from('website_clicks')
          .select('ip_address')
          .not('ip_address', 'is', null);
        
        if (uniqueError) throw uniqueError;
        
        // Count unique IP addresses
        const uniqueIps = new Set(uniqueData?.map(item => item.ip_address));
        setUniqueVisitors(uniqueIps.size);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchAnalytics();
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Clicks</h2>
                <p className="text-4xl font-bold text-blue-600">{totalClicks}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Unique Visitors</h2>
                <p className="text-4xl font-bold text-blue-600">{uniqueVisitors}</p>
              </div>
            </div>
            
            {/* Daily Clicks */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Clicks</h2>
              
              {dailyClicks.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Clicks</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unique Visitors</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dailyClicks.map((day, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(day.day).toLocaleDateString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{day.total_clicks}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{day.unique_visitors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No daily click data available yet.</p>
              )}
            </div>
            
            {/* Button Clicks */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Button Clicks</h2>
              
              {buttonClicks.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Button ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Button Text</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click Count</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unique Clickers</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {buttonClicks.map((button, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{button.button_id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{button.button_text}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{button.click_count}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{button.unique_clickers}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No button click data available yet.</p>
              )}
            </div>
            
            {/* Section Engagement */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Section Engagement</h2>
              
              {sectionEngagement.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Count</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sectionEngagement.map((section, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{section.section_id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{section.engagement_count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No section engagement data available yet.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
} 