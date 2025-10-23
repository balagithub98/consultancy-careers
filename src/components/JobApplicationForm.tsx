'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'
import { Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const applicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
})

type ApplicationFormData = z.infer<typeof applicationSchema>

interface JobApplicationFormProps {
  jobId: string
  jobTitle: string
}

export default function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isUploadingResume, setIsUploadingResume] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setError('Please upload a PDF or Word document')
        return
      }
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB')
        return
      }
      
      setResumeFile(file)
      setError(null)
    }
  }

  const uploadResume = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `resumes/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('job-applications')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data } = supabase.storage
        .from('job-applications')
        .getPublicUrl(filePath)

      return data.publicUrl
    } catch (error) {
      console.error('Error uploading resume:', error)
      return null
    }
  }

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      let resumeUrl: string | null = null
      let resumeFileName: string | null = null

      // Upload resume if provided
      if (resumeFile) {
        setIsUploadingResume(true)
        resumeUrl = await uploadResume(resumeFile)
        resumeFileName = resumeFile.name
        
        if (!resumeUrl) {
          throw new Error('Failed to upload resume')
        }
        setIsUploadingResume(false)
      }

      // Submit application to Supabase
      const { error: insertError } = await supabase
        .from('job_applications')
        .insert({
          job_id: jobId,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || null,
          cover_letter: data.coverLetter || null,
          resume_url: resumeUrl,
          resume_file_name: resumeFileName,
          applied_at: new Date().toISOString(),
          status: 'pending',
        })

      if (insertError) {
        throw insertError
      }

      setIsSuccess(true)
      reset()
      setResumeFile(null)
    } catch (error) {
      console.error('Error submitting application:', error)
      setError(error instanceof Error ? error.message : 'Failed to submit application')
    } finally {
      setIsSubmitting(false)
      setIsUploadingResume(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900 mb-2">Application Submitted!</h4>
        <p className="text-gray-600 mb-4">
          Thank you for your interest in the {jobTitle} position. We&apos;ll review your application and get back to you soon.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-slate-700 hover:text-slate-900 font-medium"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <span className="text-red-800">{error}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1">
            First Name *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 text-gray-900 placeholder-gray-500 transition-colors duration-200"
            placeholder="Rajesh"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1">
            Last Name *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 text-gray-900 placeholder-gray-500 transition-colors duration-200"
            placeholder="Kumar"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
          Email Address *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="rajesh.kumar@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
          Phone Number
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="+91 98765 43210"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-900 mb-1">
          Resume/CV
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors duration-200">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-800">
              <label
                htmlFor="resume"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition-colors duration-200"
              >
                <span>Upload a file</span>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-700">
              PDF, DOC, DOCX up to 5MB
            </p>
          </div>
        </div>
        {resumeFile && (
          <p className="mt-2 text-sm text-green-600">
            ✓ {resumeFile.name} selected
          </p>
        )}
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-900 mb-1">
          Cover Letter
        </label>
        <textarea
          {...register('coverLetter')}
          id="coverLetter"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us why you're interested in this position..."
        />
        {errors.coverLetter && (
          <p className="mt-1 text-sm text-red-600">{errors.coverLetter.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isUploadingResume}
        className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isSubmitting || isUploadingResume ? (
          <>
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
            {isUploadingResume ? 'Uploading Resume...' : 'Submitting Application...'}
          </>
        ) : (
          'Submit Application'
        )}
      </button>

      <p className="text-xs text-gray-700 text-center">
        By submitting this application, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}

