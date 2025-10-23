# gigmarines - Complete Setup Guide

A comprehensive guide to set up and run the gigmarines careers website.

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd gigmarines-nextjs

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp env.template .env.local

# Edit with your actual values
nano .env.local  # or use your preferred editor
```

### 3. Run the Application

```bash
# Start development server
npm run dev

# In another terminal, start Sanity Studio
npm run studio
```

## 📋 Prerequisites

- **Node.js**: v18 or higher
- **npm**: Latest version
- **Git**: For version control
- **Sanity Account**: For content management
- **Supabase Account**: For database and storage

## 🔧 Detailed Setup

### Environment Variables

See [ENV_SETUP.md](./ENV_SETUP.md) for detailed environment configuration.

### Required Services

1. **Sanity CMS**
   - Create a new project at [sanity.io](https://sanity.io)
   - Set up your schema (already configured)
   - Get your project ID and API token

2. **Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Set up the database schema (see `supabase-schema.sql`)
   - Configure storage bucket for file uploads
   - Get your URL and API keys

## 🗄️ Database Setup

### Supabase Schema

Run the SQL commands in `supabase-schema.sql` to set up:

- `job_applications` table
- Row Level Security (RLS) policies
- Storage bucket for file uploads

### Sanity Schema

The job schema is already configured in `sanity/schemas/job.ts` with:

- Job title, description, requirements
- Company information
- Location and remote options
- Salary range and experience level
- Department and featured status

## 🎨 Customization

### Branding

Update the following files to match your brand:

- `src/app/layout.tsx` - Site metadata
- `src/app/page.tsx` - Homepage content
- `package.json` - Project name and description

### Styling

The application uses Tailwind CSS. Key files:

- `src/app/globals.css` - Global styles
- Component files - Individual component styles

### Content Management

Use Sanity Studio (http://localhost:3333) to:

- Add/edit job postings
- Manage company information
- Update job requirements and benefits

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run studio       # Start Sanity Studio
npm run lint         # Run ESLint
```

### Project Structure

```
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── page.tsx         # Homepage
│   │   ├── jobs/[slug]/     # Job detail pages
│   │   └── layout.tsx       # Root layout
│   ├── components/          # React components
│   └── lib/                 # Utility functions
├── sanity/                  # Sanity CMS configuration
│   └── schemas/            # Content schemas
├── public/                  # Static assets
└── supabase-schema.sql     # Database schema
```

## 🛠️ Troubleshooting

### Common Issues

1. **Environment Variables**
   - Ensure `.env.local` exists and has correct values
   - Restart development server after changes

2. **Sanity Connection**
   - Verify project ID and API token
   - Check dataset name matches

3. **Supabase Connection**
   - Verify URL and API keys
   - Check RLS policies are configured

4. **Build Issues**
   - Clear `.next` folder and rebuild
   - Check for TypeScript errors

### Getting Help

1. Check browser console for errors
2. Verify all environment variables
3. Ensure all services are accessible
4. Check network connectivity

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔄 Updates

To update the application:

1. Pull latest changes: `git pull origin main`
2. Install new dependencies: `npm install`
3. Update environment variables if needed
4. Restart development server

---

**Need help?** Check the troubleshooting section or create an issue in the repository.
