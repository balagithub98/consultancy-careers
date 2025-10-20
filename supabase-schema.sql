-- Create the job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  cover_letter TEXT,
  resume_url TEXT,
  resume_file_name TEXT,
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'))
);

-- Create an index on job_id for faster queries
CREATE INDEX IF NOT EXISTS idx_job_applications_job_id ON job_applications(job_id);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);

-- Create an index on applied_at for sorting
CREATE INDEX IF NOT EXISTS idx_job_applications_applied_at ON job_applications(applied_at);

-- Enable Row Level Security (RLS)
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert applications (for public job applications)
CREATE POLICY "Allow public to insert job applications" ON job_applications
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows anyone to read applications (for admin purposes)
-- Note: In production, you might want to restrict this to authenticated users only
CREATE POLICY "Allow public to read job applications" ON job_applications
  FOR SELECT USING (true);

-- Create a storage bucket for resume files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('job-applications', 'job-applications', false)
ON CONFLICT (id) DO NOTHING;

-- Create a policy for the storage bucket to allow public uploads
CREATE POLICY "Allow public to upload resumes" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'job-applications');

-- Create a policy to allow public to view resumes (for admin access)
CREATE POLICY "Allow public to view resumes" ON storage.objects
  FOR SELECT USING (bucket_id = 'job-applications');

