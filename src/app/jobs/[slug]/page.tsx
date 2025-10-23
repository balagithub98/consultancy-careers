import { client } from '@/lib/sanity'
import { Job } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { MapPin, Briefcase, DollarSign, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import JobApplicationForm from '@/components/JobApplicationForm'

interface JobPageProps {
  params: {
    slug: string
  }
}

async function getJob(slug: string): Promise<Job | null> {
  const query = `*[_type == "job" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    company,
    location,
    employmentType,
    salaryRange,
    description,
    requirements,
    benefits,
    department,
    experienceLevel,
    remote,
    featured,
    publishedAt,
    applicationDeadline
  }`
  
  const job = await client.fetch(query, { slug })
  return job
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = await getJob(slug)

  if (!job) {
    notFound()
  }

  const isApplicationOpen = !job.applicationDeadline || 
    new Date(job.applicationDeadline) > new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-slate-700" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">gigmarines</h1>
            </div>
            <Link 
              href="/" 
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              ← Back to Jobs
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Job Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">{job.company}</p>
                  </div>
                  {job.featured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-200 text-amber-800">
                      Featured
                    </span>
                  )}
                </div>

                {/* Job Meta */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{job.location}</span>
                    {job.remote && <span className="ml-2 text-emerald-600">• Remote</span>}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-5 w-5 mr-2" />
                    <span>{job.employmentType.charAt(0).toUpperCase() + job.employmentType.slice(1).replace('-', ' ')}</span>
                  </div>
                  {job.salaryRange && (
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 mr-2" />
                      <span>{job.salaryRange}</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Posted {new Date(job.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Job Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.department && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      {job.department}
                    </span>
                  )}
                  {job.experienceLevel && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {job.experienceLevel.charAt(0).toUpperCase() + job.experienceLevel.slice(1)} Level
                    </span>
                  )}
                </div>

                {/* Application Deadline */}
                {job.applicationDeadline && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-amber-600 mr-2" />
                      <span className="text-amber-800 font-medium">
                        Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Job Description */}
              {job.description && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                  <div className="prose max-w-none prose-slate prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-900 [&>*]:text-gray-800 [&>p]:text-gray-800 [&>ul]:text-gray-800 [&>ol]:text-gray-800 [&>li]:text-gray-800">
                    <PortableText value={job.description} />
                  </div>
                </div>
              )}

              {/* Requirements */}
              {job.requirements && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                  <div className="prose max-w-none prose-slate prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-900 [&>*]:text-gray-800 [&>p]:text-gray-800 [&>ul]:text-gray-800 [&>ol]:text-gray-800 [&>li]:text-gray-800">
                    <PortableText value={job.requirements} />
                  </div>
                </div>
              )}

              {/* Benefits */}
              {job.benefits && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                  <div className="prose max-w-none prose-slate prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-900 [&>*]:text-gray-800 [&>p]:text-gray-800 [&>ul]:text-gray-800 [&>ol]:text-gray-800 [&>li]:text-gray-800">
                    <PortableText value={job.benefits} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for this position</h3>
              
              {!isApplicationOpen ? (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Application Closed</h4>
                  <p className="text-gray-600">
                    The application deadline for this position has passed.
                  </p>
                </div>
              ) : (
                <JobApplicationForm jobId={job._id} jobTitle={job.title} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const query = `*[_type == "job"] {
    "slug": slug.current
  }`
  
  const jobs = await client.fetch(query)
  return jobs.map((job: { slug: string }) => ({
    slug: job.slug,
  }))
}
