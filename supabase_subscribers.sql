-- Create a table for subscribers
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB
);

-- Create an index for faster queries on email
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);

-- Create a function to create the subscribers table if it doesn't exist
CREATE OR REPLACE FUNCTION create_subscribers_table()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'subscribers') THEN
    CREATE TABLE subscribers (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      email TEXT UNIQUE NOT NULL,
      source TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      metadata JSONB
    );
    
    CREATE INDEX idx_subscribers_email ON subscribers(email);
  END IF;
END;
$$;

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone
CREATE POLICY "Allow anonymous inserts" ON subscribers FOR INSERT TO anon WITH CHECK (true);

-- Create a policy that only allows the authenticated users to select
CREATE POLICY "Allow authenticated select" ON subscribers FOR SELECT TO authenticated USING (true); 