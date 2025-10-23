# Vercel Environment Variables

Copy and paste these environment variables into your Vercel project settings.

## 🔧 Environment Variables for Vercel

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

## 📋 How to Add to Vercel

### Step 1: Go to Vercel Dashboard
1. Log in to [vercel.com](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**

### Step 2: Add Each Variable
For each environment variable above:
1. Click **Add New**
2. **Name**: Copy the variable name (e.g., `NEXT_PUBLIC_SANITY_PROJECT_ID`)
3. **Value**: Copy the corresponding value
4. **Environment**: Select **Production** (and Preview if needed)
5. Click **Save**

### Step 3: Redeploy
After adding all variables:
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Or push a new commit to trigger automatic deployment

## 🔒 Security Notes

- **Never commit these values to Git**
- These are production keys - keep them secure
- Consider rotating keys periodically
- Use different keys for development vs production

## 🛠️ Alternative: Bulk Import

If Vercel supports bulk import:
1. Copy all the variables above
2. Use Vercel's bulk import feature (if available)
3. Verify all variables are added correctly

## ✅ Verification

After deployment, verify:
1. Website loads without errors
2. Jobs are displayed from Sanity
3. Job application form works
4. No console errors related to missing environment variables

---

**Note**: Make sure to replace these with your own production keys before going live!
