import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wtbxcmlferpdxculpfkw.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhjbWxmZXJwZHhjdWxwZmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MjU5NjcsImV4cCI6MjA3NjUwMTk2N30.-M2-ZLMLBqpm3Il-zYqSpRxBZasprI7xS0_Mq1jrAe4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      job_applications: {
        Row: {
          id: string
          job_id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          cover_letter: string | null
          resume_url: string | null
          resume_file_name: string | null
          applied_at: string
          status: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
        Insert: {
          id?: string
          job_id: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          cover_letter?: string | null
          resume_url?: string | null
          resume_file_name?: string | null
          applied_at?: string
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
        Update: {
          id?: string
          job_id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          cover_letter?: string | null
          resume_url?: string | null
          resume_file_name?: string | null
          applied_at?: string
          status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
        }
      }
    }
  }
}
