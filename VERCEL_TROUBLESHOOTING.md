# Vercel Deployment Troubleshooting

Common issues and solutions for deploying gigmarines to Vercel.

## 🚨 Common Issues

### 1. Environment Variables Not Loading

**Error**: `sanity_project_id` references or undefined environment variables

**Solution**:
1. **Check Environment Variables in Vercel**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Verify all variables are added correctly
   - Check variable names match exactly (case-sensitive)

2. **Redeploy After Adding Variables**:
   - Go to Deployments tab
   - Click "Redeploy" on the latest deployment
   - Or push a new commit to trigger rebuild

3. **Verify Variable Names**:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=9usx959t
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_TOKEN=your_token_here
   NEXT_PUBLIC_SUPABASE_URL=your_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_key_here
   ```

### 2. Build Failures

**Error**: Build fails during deployment

**Solutions**:
1. **Check Build Logs**:
   - Go to Vercel Dashboard → Deployments
   - Click on failed deployment
   - Check build logs for specific errors

2. **Common Build Issues**:
   - Missing dependencies: Run `npm install` locally first
   - TypeScript errors: Fix all TypeScript errors locally
   - Environment variable references: Ensure all env vars are set

3. **Force Rebuild**:
   - Delete `.next` folder locally
   - Run `npm run build` locally to test
   - Push changes to trigger new deployment

### 3. Runtime Errors

**Error**: Website loads but shows errors

**Solutions**:
1. **Check Browser Console**:
   - Open browser DevTools
   - Check Console tab for JavaScript errors
   - Check Network tab for failed requests

2. **Verify API Connections**:
   - Test Sanity connection
   - Test Supabase connection
   - Check all environment variables are accessible

3. **Check Function Logs**:
   - Go to Vercel Dashboard → Functions
   - Check for server-side errors

## 🔧 Step-by-Step Fix

### If Environment Variables Aren't Working:

1. **Double-check Variable Names**:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID (not SANITY_PROJECT_ID)
   NEXT_PUBLIC_SANITY_DATASET (not SANITY_DATASET)
   ```

2. **Verify in Vercel Dashboard**:
   - Settings → Environment Variables
   - All variables should be listed
   - Values should match your local `.env.local`

3. **Redeploy**:
   - Go to Deployments
   - Click "Redeploy" on latest deployment
   - Wait for build to complete

4. **Test**:
   - Visit your Vercel URL
   - Check if jobs load from Sanity
   - Test job application form

### If Build Still Fails:

1. **Check Local Build**:
   ```bash
   npm run build
   ```
   - Fix any local build errors first

2. **Clear Cache**:
   - Delete `.next` folder
   - Run `npm run build` again

3. **Check Dependencies**:
   - Ensure all packages are in `package.json`
   - Run `npm install` to update dependencies

## 🛠️ Debugging Steps

### 1. Verify Environment Variables

Add this to your page to debug (remove after testing):

```typescript
// Add to src/app/page.tsx temporarily
console.log('Sanity Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('Sanity Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
```

### 2. Check Network Requests

1. Open browser DevTools
2. Go to Network tab
3. Reload page
4. Look for failed requests to Sanity/Supabase

### 3. Test API Endpoints

Test your Sanity connection:
```bash
curl "https://9usx959t.api.sanity.io/v2024-01-01/data/query/production?query=*[_type=='job']"
```

## 📋 Pre-Deployment Checklist

Before deploying to Vercel:

- [ ] All environment variables are set locally
- [ ] `npm run build` works locally
- [ ] `npm run dev` works locally
- [ ] Sanity Studio works locally
- [ ] All TypeScript errors are fixed
- [ ] No console errors in browser

## 🚀 Quick Fix Commands

```bash
# Test local build
npm run build

# Clear cache and rebuild
rm -rf .next
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Test environment variables
node -e "console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)"
```

## 📞 Still Having Issues?

1. **Check Vercel Build Logs**:
   - Go to Deployments → Click on deployment → View build logs

2. **Verify All Environment Variables**:
   - Compare with your local `.env.local`
   - Ensure no typos in variable names

3. **Test Locally First**:
   - Make sure everything works locally
   - Fix all errors before deploying

4. **Contact Support**:
   - Vercel support for deployment issues
   - Check Vercel documentation

---

**Remember**: Always test locally first, then deploy to Vercel!
