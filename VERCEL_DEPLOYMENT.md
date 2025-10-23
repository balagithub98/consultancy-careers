# Vercel Deployment Guide

Complete guide for deploying gigmarines to Vercel.

## 🚀 Quick Deployment

### 1. Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Import your GitHub repository
4. Select the repository: `consultancy-careers`

### 2. Configure Build Settings
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)

### 3. Add Environment Variables
Copy all variables from [VERCEL_ENV_VARS.md](./VERCEL_ENV_VARS.md) to Vercel:

**In Vercel Dashboard → Settings → Environment Variables:**

```
NEXT_PUBLIC_SANITY_PROJECT_ID=9usx959t
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skFFyev0n4GUdYzqw1aCIHKsEOthtIWQJ9GfvClQBeG3VHxZ0yuce2tPResAFI0ucrHrEREV3Mzne6rthAzkC0EXWuccO9rmre7nHaXAPguckCWPf1boIp1lyL7OcAwFZqergvnSBympbC088VAWFQ8Q42qpGF03ZKSXkHUEX0lbE4Mrxyml
NEXT_PUBLIC_SUPABASE_URL=https://wtbxcmlferpdxculpfkw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhjbWxmZXJwZHhjdWxwZmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MjU5NjcsImV4cCI6MjA3NjUwMTk2N30.-M2-ZLMLBqpm3Il-zYqSpRxBZasprI7xS0_Mq1jrAe4
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhjbWxmZXJwZHhjdWxwZmt3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDkyNTk2NywiZXhwIjoyMDc2NTAxOTY3fQ.pHBmihsoqAd_gDemTpGa19lOLCnDLVMKI3HZRi5Xbsk
```

### 4. Deploy
1. Click **Deploy**
2. Wait for build to complete
3. Your site will be available at `https://your-project.vercel.app`

## 🔧 Environment Variables Setup

### Step-by-Step Process

1. **Go to Project Settings**
   - In your Vercel dashboard
   - Select your project
   - Click **Settings** tab

2. **Navigate to Environment Variables**
   - Click **Environment Variables** in the sidebar
   - Click **Add New** for each variable

3. **Add Each Variable**
   For each variable in the list above:
   - **Name**: Copy the exact variable name
   - **Value**: Copy the corresponding value
   - **Environment**: Select **Production** (and **Preview** if needed)
   - Click **Save**

4. **Redeploy**
   - Go to **Deployments** tab
   - Click **Redeploy** on the latest deployment
   - Or push a new commit to trigger automatic deployment

## 📋 Pre-Deployment Checklist

### Required Services
- [ ] Sanity project created and configured
- [ ] Supabase project created and database schema applied
- [ ] All environment variables obtained
- [ ] Test locally with `npm run dev`

### Environment Variables
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] `NEXT_PUBLIC_SANITY_DATASET`
- [ ] `NEXT_PUBLIC_SANITY_API_VERSION`
- [ ] `SANITY_API_TOKEN`
- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `SUPABASE_SERVICE_ROLE_KEY`

### Database Setup
- [ ] Supabase database schema applied (`supabase-schema.sql`)
- [ ] Storage bucket configured for file uploads
- [ ] RLS policies enabled

## 🛠️ Post-Deployment

### Verification Steps
1. **Check Website**
   - Visit your Vercel URL
   - Verify homepage loads
   - Check for any console errors

2. **Test Functionality**
   - Browse job listings
   - Click on a job to view details
   - Test job application form
   - Verify file upload works

3. **Check Sanity Studio**
   - Add/edit job postings
   - Verify changes appear on website
   - Test content management workflow

### Common Issues

1. **Environment Variables Not Working**
   - Verify all variables are added correctly
   - Check variable names match exactly
   - Redeploy after adding variables

2. **Build Failures**
   - Check build logs in Vercel dashboard
   - Verify all dependencies are in `package.json`
   - Check for TypeScript errors

3. **Runtime Errors**
   - Check browser console for errors
   - Verify API endpoints are accessible
   - Check network requests in DevTools

## 🔄 Updates and Maintenance

### Automatic Deployments
- Pushes to `main` branch trigger automatic deployments
- Preview deployments for pull requests
- Environment variables are preserved across deployments

### Manual Deployments
- Use Vercel dashboard to trigger manual deployments
- Redeploy specific commits if needed
- Rollback to previous deployments if issues occur

## 📊 Monitoring

### Vercel Analytics
- Enable Vercel Analytics for performance monitoring
- Track page views and user interactions
- Monitor Core Web Vitals

### Error Monitoring
- Check Vercel function logs for server-side errors
- Monitor browser console for client-side errors
- Set up error tracking if needed

---

**Need Help?** Check the troubleshooting section or refer to Vercel's documentation.
