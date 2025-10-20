# Quick Setup Guide

## 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=g7fa5mly
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token_here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 2. Sanity Setup

1. **Deploy the schema**:
   ```bash
   npx sanity@latest schema deploy
   ```

2. **Start Sanity Studio** (in a separate terminal):
   ```bash
   npm run studio
   ```

3. **Create your first job posting** in the Sanity Studio interface

## 3. Supabase Setup

1. **Run the database schema**:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy and paste the contents of `supabase-schema.sql`
   - Execute the SQL

2. **Create storage bucket**:
   - Go to Storage in your Supabase dashboard
   - Create a new bucket called `job-applications`
   - Set it to private

## 4. Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 5. Testing the Application

1. **Create a job posting** in Sanity Studio
2. **Visit the homepage** to see the job listing
3. **Click on a job** to view details
4. **Submit an application** to test the form
5. **Check Supabase** to see the stored application

## Troubleshooting

- **Sanity connection issues**: Verify your project ID and API token
- **Supabase connection issues**: Check your URL and anon key
- **File upload issues**: Ensure the storage bucket exists and policies are set
- **Build errors**: Run `npm run build` to check for issues

## Next Steps

1. Customize the styling to match your brand
2. Add more job posting fields as needed
3. Set up email notifications for new applications
4. Deploy to your preferred hosting platform

