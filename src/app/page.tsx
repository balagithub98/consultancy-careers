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
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">gigmarines</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#jobs" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">Jobs</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Find Your Next Gig
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Join our team of gigmarines and help shape the future of technology consulting in India
            </p>
            <a 
              href="#jobs" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-indigo-900 bg-white hover:bg-indigo-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
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
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {jobs.map((job) => (
                <div key={job._id} className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-200 group h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {job.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-3">{job.company}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{job.location}</span>
                            {job.remote && <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Remote</span>}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{job.employmentType.charAt(0).toUpperCase() + job.employmentType.slice(1).replace('-', ' ')}</span>
                          </div>
                          {job.salaryRange && (
                            <div className="flex items-center text-sm text-gray-600">
                              <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="font-medium">{job.salaryRange}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.department && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                              {job.department}
                            </span>
                          )}
                          {job.experienceLevel && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {job.experienceLevel}
                            </span>
                          )}
                        </div>
                      </div>
                      {job.featured && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          Posted {new Date(job.publishedAt).toLocaleDateString()}
                        </div>
                        <Link 
                          href={`/jobs/${job.slug.current}`}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                        >
                          View Details →
                        </Link>
                      </div>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Work With gigmarines?</h3>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We're a leading consultancy firm in India that values innovation, collaboration, and professional growth. 
              Join our team of gigmarines and work on challenging projects with industry experts across India.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Briefcase className="h-8 w-8 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Exciting Projects</h4>
                  <p className="text-gray-600">
                    Work on cutting-edge technology solutions for diverse clients across industries.
                  </p>
                </div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                <div className="bg-gradient-to-br from-emerald-100 to-green-200 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Calendar className="h-8 w-8 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h4>
                  <p className="text-gray-600">
                    Flexible working arrangements and comprehensive benefits package.
                  </p>
                </div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                <div className="bg-gradient-to-br from-purple-100 to-pink-200 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <MapPin className="h-8 w-8 text-purple-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Pan-India Opportunities</h4>
                  <p className="text-gray-600">
                    Remote work options and opportunities to work with teams across India.
                  </p>
                </div>
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
              <Briefcase className="h-8 w-8 text-slate-400" />
              <h4 className="ml-2 text-xl font-bold">gigmarines</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Building the future of technology consulting, one gig at a time.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 gigmarines. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}