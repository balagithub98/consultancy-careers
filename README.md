# gigmarines Website

A modern careers website for gigmarines built with Next.js, Supabase, and Sanity CMS.

<!-- Updated for Vercel deployment --> This application allows HR teams to manage job postings through Sanity Studio, while job seekers can browse and apply for positions directly on the website.

## Features

- **Job Management**: HR teams can create, edit, and manage job postings through Sanity Studio
- **Job Listings**: Beautiful, responsive job listings with filtering and search capabilities
- **Job Details**: Detailed job pages with comprehensive information
- **Application System**: Integrated application forms with file upload for resumes
- **Database Storage**: Applications and resumes stored securely in Supabase
- **Modern UI**: Clean, professional design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **CMS**: Sanity for content management
- **Database**: Supabase for application storage and file uploads
- **Styling**: Tailwind CSS with custom components
- **Forms**: React Hook Form with Zod validation

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Sanity account and project
- A Supabase account and project
- Git installed

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd gigmarines-nextjs
npm install
```

### 2. Sanity Setup

1. **Create a Sanity Project**:
   - Go to [sanity.io](https://sanity.io) and create a new project
   - Note down your Project ID and Dataset name

2. **Deploy the Schema**:
   ```bash
   npx sanity@latest schema deploy
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   ```

### 3. Supabase Setup

1. **Create a Supabase Project**:
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Note down your Project URL and Anon Key

2. **Set up the Database**:
   - Go to the SQL Editor in your Supabase dashboard
   - Run the SQL commands from `supabase-schema.sql`

3. **Configure Storage**:
   - Go to Storage in your Supabase dashboard
   - Create a new bucket called `job-applications`
   - Set it to private (not public)

4. **Update Environment Variables**:
   Add to your `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

### 4. Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## Project Structure

```
src/
├── app/
│   ├── jobs/
│   │   └── [slug]/
│   │       └── page.tsx          # Job detail pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   └── JobApplicationForm.tsx    # Application form component
├── lib/
│   ├── sanity.ts                 # Sanity client configuration
│   └── supabase.ts              # Supabase client configuration
sanity/
├── schemas/
│   └── job.ts                    # Job schema definition
└── sanity.config.ts              # Sanity configuration
```

## Content Management

### Adding Job Postings

1. **Access Sanity Studio**:
   - Run `npx sanity@latest dev` to start the studio
   - Visit the studio URL (usually `http://localhost:3333`)

2. **Create Job Postings**:
   - Click "Create" → "Job Posting"
   - Fill in all required fields:
     - Job Title
     - Company (defaults to "Consultancy Firm")
     - Location
     - Employment Type
     - Job Description (rich text)
     - Requirements (optional)
     - Benefits (optional)
     - Department
     - Experience Level
     - Salary Range (optional)
     - Remote work option
     - Application deadline (optional)

3. **Publish**:
   - Click "Publish" to make the job visible on the website

### Managing Applications

Applications are stored in Supabase and can be viewed in the Supabase dashboard:

1. Go to your Supabase project dashboard
2. Navigate to "Table Editor" → "job_applications"
3. View all submitted applications with applicant details and resume links

## Customization

### Styling

The application uses Tailwind CSS for styling. Key customization points:

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Components**: Modify component styles in the respective `.tsx` files
- **Layout**: Adjust the layout in `src/app/layout.tsx`

### Job Schema

To modify the job posting structure:

1. Edit `sanity/schemas/job.ts`
2. Run `npx sanity@latest schema deploy`
3. Update the TypeScript types in `lib/sanity.ts`

### Application Form

To customize the application form:

1. Edit `src/components/JobApplicationForm.tsx`
2. Update the validation schema in the same file
3. Modify the Supabase table schema if needed

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

3. **Deploy**: Vercel will automatically deploy on every push to main

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Deploy from GitHub

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **API Keys**: Use environment variables for all sensitive data
3. **File Uploads**: Resume files are stored securely in Supabase storage
4. **Data Privacy**: Consider GDPR compliance for EU applicants

## Troubleshooting

### Common Issues

1. **Sanity Connection Issues**:
   - Verify your project ID and dataset name
   - Check your API token permissions

2. **Supabase Connection Issues**:
   - Verify your project URL and anon key
   - Check that RLS policies are correctly set

3. **File Upload Issues**:
   - Ensure the storage bucket exists
   - Check storage policies are configured

4. **Build Issues**:
   - Run `npm run build` locally to check for errors
   - Ensure all environment variables are set

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Sanity documentation](https://www.sanity.io/docs)
- Consult [Supabase documentation](https://supabase.com/docs)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation links above