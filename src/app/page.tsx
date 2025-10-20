import { client } from '@/lib/sanity'
import { Job } from '@/lib/sanity'
import Link from 'next/link'
import { Calendar, MapPin, Briefcase, DollarSign } from 'lucide-react'

async function getJobs(): Promise<Job[]> {
  const query = `*[_type == "job"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    company,
    location,
    employmentType,
    salaryRange,
    department,
    experienceLevel,
    remote,
    featured,
    publishedAt
  }`
  
  return await client.fetch(query)
}

export default async function HomePage() {
  const jobs = await getJobs()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Consultancy Careers</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#jobs" className="text-gray-500 hover:text-gray-900">Jobs</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Find Your Next Career Opportunity
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our team of experts and help shape the future of technology consulting
            </p>
            <a 
              href="#jobs" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h3>
            <p className="text-lg text-gray-600">
              Discover exciting career opportunities with our consultancy firm
            </p>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No jobs available</h3>
              <p className="mt-1 text-sm text-gray-500">
                Check back later for new opportunities.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <div key={job._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">{job.company}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-2" />
                            {job.location}
                            {job.remote && <span className="ml-2 text-blue-600">• Remote</span>}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Briefcase className="h-4 w-4 mr-2" />
                            {job.employmentType.charAt(0).toUpperCase() + job.employmentType.slice(1).replace('-', ' ')}
                          </div>
                          {job.salaryRange && (
                            <div className="flex items-center text-sm text-gray-500">
                              <DollarSign className="h-4 w-4 mr-2" />
                              {job.salaryRange}
                            </div>
                          )}
                        </div>

                        {job.department && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                            {job.department}
                          </span>
                        )}
                      </div>
                      {job.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        Posted {new Date(job.publishedAt).toLocaleDateString()}
                      </div>
                      <Link 
                        href={`/jobs/${job.slug.current}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We're a leading consultancy firm that values innovation, collaboration, and professional growth. 
              Join our team and work on challenging projects with industry experts.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Exciting Projects</h4>
                <p className="text-gray-600">
                  Work on cutting-edge technology solutions for diverse clients across industries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h4>
                <p className="text-gray-600">
                  Flexible working arrangements and comprehensive benefits package.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Opportunities</h4>
                <p className="text-gray-600">
                  Remote work options and opportunities to work with international teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-8 w-8 text-blue-400" />
              <h4 className="ml-2 text-xl font-bold">Consultancy Careers</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Building the future of technology consulting, one career at a time.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Consultancy Firm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}