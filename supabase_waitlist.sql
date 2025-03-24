-- Create a table for waitlist entries
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  learning_goal TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_learning_goal ON waitlist(learning_goal);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone
CREATE POLICY "Allow anonymous inserts" ON waitlist FOR INSERT TO anon WITH CHECK (true);

-- Create a policy that only allows the authenticated users to select
CREATE POLICY "Allow authenticated select" ON waitlist FOR SELECT TO authenticated USING (true);

-- Create a policy that only allows the authenticated users to update or delete
CREATE POLICY "Allow authenticated modify" ON waitlist 
FOR ALL TO authenticated USING (true); 