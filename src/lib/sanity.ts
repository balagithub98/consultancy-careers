import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: unknown) {
  return builder.image(source)
}

// Types
export interface Job {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  company: string
  location: string
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship'
  salaryRange?: string
  description: unknown[]
  requirements?: unknown[]
  benefits?: unknown[]
  department?: string
  experienceLevel?: 'entry' | 'mid' | 'senior' | 'lead'
  remote: boolean
  featured: boolean
  publishedAt: string
  applicationDeadline?: string
}

export interface JobApplication {
  id?: string
  jobId: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  coverLetter?: string
  resumeUrl?: string
  resumeFileName?: string
  appliedAt: string
  status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
}
