-- QuickHire Platform - Complete Database Schema
-- Run this to create tables from scratch

-- Jobs Table (Updated with category column)
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public read access" ON jobs
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated delete" ON jobs
  FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert" ON jobs
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON jobs
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  resume_link TEXT NOT NULL,
  cover_letter TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public insert" ON applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON applications
  FOR SELECT USING (auth.role() = 'authenticated');

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_jobs_category ON jobs(category);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON jobs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_type ON jobs(type);
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

-- Comments
COMMENT ON TABLE jobs IS 'Job listings for the QuickHire platform';
COMMENT ON TABLE applications IS 'Job applications submitted by candidates';
COMMENT ON COLUMN jobs.category IS 'Job category: Design, Sales, Marketing, Finance, Technology, Engineering, Business, Human Resource';
COMMENT ON COLUMN jobs.type IS 'Employment type: Full Time, Remote, Contract';
