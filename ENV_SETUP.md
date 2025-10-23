# Environment Setup Guide

This guide will help you set up the environment variables for the gigmarines careers website.

## 📋 Prerequisites

Before setting up the environment, make sure you have:
- Node.js (v18 or higher)
- npm or yarn package manager
- Git installed
- Access to Sanity Studio
- Access to Supabase project

## 🔧 Environment Variables Setup

### 1. Create Environment File

Copy the template file and rename it:

```bash
cp env.template .env.local
```

### 2. Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_sanity_api_token

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 🎯 Getting Your API Keys

### Sanity Configuration

1. **Project ID**: 
   - Go to [sanity.io](https://sanity.io)
   - Navigate to your project
   - Copy the Project ID from the project settings

2. **API Token**:
   - In Sanity Studio, go to Settings → API
   - Create a new token with "Editor" permissions
   - Copy the token

3. **Dataset**:
   - Usually `production` for live sites
   - Can be `development` for testing

### Supabase Configuration

1. **Supabase URL**:
   - Go to your Supabase project dashboard
   - Navigate to Settings → API
   - Copy the "Project URL"

2. **Anon Key**:
   - In the same API settings page
   - Copy the "anon public" key

3. **Service Role Key**:
   - In the same API settings page
   - Copy the "service_role" key (keep this secret!)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment

```bash
# Copy the template
cp env.template .env.local

# Edit with your actual values
nano .env.local  # or use your preferred editor
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Run Sanity Studio

```bash
npm run studio
```

## 🔒 Security Notes

- **Never commit `.env.local`** to version control
- Keep your service role keys secure
- Use different keys for development and production
- Rotate keys regularly for security

## 📁 File Structure

```
├── .env.local          # Your environment variables (create this)
├── env.template        # Template file (safe to commit)
├── .env.example        # Example file (safe to commit)
└── .gitignore          # Should include .env.local
```

## 🛠️ Troubleshooting

### Common Issues

1. **"Environment variable not found"**
   - Make sure `.env.local` exists in the root directory
   - Check that variable names match exactly
   - Restart your development server

2. **Sanity connection issues**
   - Verify your project ID is correct
   - Check that your API token has proper permissions
   - Ensure the dataset exists

3. **Supabase connection issues**
   - Verify your URL and keys are correct
   - Check that your Supabase project is active
   - Ensure RLS policies are set up correctly

### Verification

To verify your setup is working:

1. **Sanity**: Check if jobs load on the homepage
2. **Supabase**: Try submitting a job application form
3. **Console**: Check browser console for any errors

## 📞 Support

If you encounter issues:

1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure all services (Sanity, Supabase) are accessible
4. Check network connectivity

## 🔄 Environment Updates

When updating environment variables:

1. Update `.env.local` with new values
2. Restart the development server
3. Clear browser cache if needed
4. Test all functionality

---

**Note**: This template provides a starting point. Always use your own API keys and never share sensitive credentials.
