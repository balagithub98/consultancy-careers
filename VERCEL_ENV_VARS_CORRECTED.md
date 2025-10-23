# Vercel Environment Variables - CORRECTED

Copy and paste these environment variables into your Vercel project settings.

## 🔧 Corrected Environment Variables for Vercel

### Production Environment Variables

Add these to your Vercel project dashboard under Settings → Environment Variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=9usx959t
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skFFyev0n4GUdYzqw1aCIHKsEOthtIWQJ9GfvClQBeG3VHxZ0yuce2tPResAFI0ucrHrEREV3Mzne6rthAzkC0EXWuccO9rmre7nHaXAPguckCWPf1boIp1lyL7OcAwFZqergvnSBympbC088VAWFQ8Q42qpGF03ZKSXkHUEX0lbE4Mrxyml
NEXT_PUBLIC_SUPABASE_URL=https://wtbxcmlferpdxculpfkw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhjbWxmZXJwZHhjdWxwZmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MjU5NjcsImV4cCI6MjA3NjUwMTk2N30.-M2-ZLMLBqpm3Il-zYqSpRxBZasprI7xS0_Mq1jrAe4
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhjbWxmZXJwZHhjdWxwZmt3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDkyNTk2NywiZXhwIjoyMDc2NTAxOTY3fQ.pHBmihsoqAd_gDemTpGa19lOLCnDLVMKI3HZRi5Xbsk
```

## 🚨 Important: Variable Names Must Match Exactly

Make sure you copy the variable names **exactly** as shown above. Vercel is case-sensitive and the names must match what's in your code.

## 📋 Step-by-Step Vercel Setup

### 1. Go to Vercel Dashboard
- Log in to [vercel.com](https://vercel.com)
- Select your project
- Go to **Settings** → **Environment Variables**

### 2. Add Each Variable Individually

**For each variable below, click "Add New" and enter:**

#### Variable 1:
- **Name**: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- **Value**: `9usx959t`
- **Environment**: Production

#### Variable 2:
- **Name**: `NEXT_PUBLIC_SANITY_DATASET`
- **Value**: `production`
- **Environment**: Production

#### Variable 3:
- **Name**: `NEXT_PUBLIC_SANITY_API_VERSION`
- **Value**: `2024-01-01`
- **Environment**: Production

#### Variable 4:
- **Name**: `SANITY_API_TOKEN`
- **Value**: `skFFyev0n4GUdYzqw1aCIHKsEOthtIWQJ9GfvClQBeG3VHxZ0yuce2tPResAFI0ucrHrEREV3Mzne6rthAzkC0EXWuccO9rmre7nHaXAPguckCWPf1boIp1lyL7OcAwFZqergvnSBympbC088VAWFQ8Q42qpGF03ZKSXkHUEX0lbE4Mrxyml`
- **Environment**: Production

#### Variable 5:
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://wtbxcmlferpdxculpfkw.supabase.co`
- **Environment**: Production

#### Variable 6:
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhjbWxmZXJwZHhjdWxwZmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MjU5NjcsImV4cCI6MjA3NjUwMTk2N30.-M2-ZLMLBqpm3Il-zYqSpRxBZasprI7xS0_Mq1jrAe4`
- **Environment**: Production

#### Variable 7:
- **Name**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhjbWxmZXJwZHhjdWxwZmt3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDkyNTk2NywiZXhwIjoyMDc2NTAxOTY3fQ.pHBmihsoqAd_gDemTpGa19lOLCnDLVMKI3HZRi5Xbsk`
- **Environment**: Production

### 3. Redeploy
After adding all variables:
- Go to **Deployments** tab
- Click **Redeploy** on the latest deployment

## 🔍 Troubleshooting

### If you still get errors:

1. **Check Variable Names**: Make sure they match exactly (case-sensitive)
2. **Check for Extra Spaces**: No leading/trailing spaces
3. **Verify Values**: Copy the entire value without truncation
4. **Redeploy**: Always redeploy after adding variables

### Common Mistakes:
- ❌ `sanity_project_id` (wrong case)
- ❌ `NEXT_PUBLIC_SANITY_PROJECT_ID ` (extra space)
- ❌ `next_public_sanity_project_id` (wrong case)
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID` (correct)

## ✅ Verification

After deployment, check:
1. Website loads without errors
2. No console errors about missing environment variables
3. Jobs display from Sanity
4. Application form works

---

**Note**: The variable names must match exactly what's in your Next.js code!
