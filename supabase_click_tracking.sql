-- Create a table for tracking website clicks
CREATE TABLE website_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_path TEXT NOT NULL,
  button_id TEXT,
  button_text TEXT,
  section_id TEXT,
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT
);

-- Create an index for faster queries on created_at
CREATE INDEX idx_website_clicks_created_at ON website_clicks(created_at);

-- Create a view for daily click counts
CREATE VIEW daily_click_counts AS
SELECT 
  DATE_TRUNC('day', created_at) AS day,
  COUNT(*) AS total_clicks,
  COUNT(DISTINCT ip_address) AS unique_visitors
FROM website_clicks
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY day DESC;

-- Create a view for button click analytics
CREATE VIEW button_click_analytics AS
SELECT 
  button_id,
  button_text,
  COUNT(*) AS click_count,
  COUNT(DISTINCT ip_address) AS unique_clickers
FROM website_clicks
WHERE button_id IS NOT NULL
GROUP BY button_id, button_text
ORDER BY click_count DESC;

-- Create a view for section engagement
CREATE VIEW section_engagement AS
SELECT 
  section_id,
  COUNT(*) AS engagement_count
FROM website_clicks
WHERE section_id IS NOT NULL
GROUP BY section_id
ORDER BY engagement_count DESC;

-- Enable Row Level Security
ALTER TABLE website_clicks ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone (for tracking)
CREATE POLICY "Allow anonymous inserts" ON website_clicks FOR INSERT TO anon WITH CHECK (true);

-- Create a policy that only allows the authenticated users to select
CREATE POLICY "Allow authenticated select" ON website_clicks FOR SELECT TO authenticated USING (true); 