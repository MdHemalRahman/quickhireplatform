# Database Migration Guide - QuickHire Platform

## Step 1: Update Database Schema

Run this SQL in your Supabase SQL Editor to add the `category` column:

```sql
-- Add category column to jobs table
ALTER TABLE jobs ADD COLUMN IF NOT EXISTS category TEXT;

-- Update existing jobs to have a category (if any exist)
UPDATE jobs SET category = 'Technology' WHERE category IS NULL;
```

## Step 2: Clear Existing Data (Optional)

If you have old test data, clear it:

```sql
-- Clear existing jobs
TRUNCATE TABLE jobs CASCADE;
```

## Step 3: Run Seed Script

Execute the seed script located at `seed_jobs.sql`:

```bash
# Copy the contents of seed_jobs.sql and paste into Supabase SQL Editor
# Or use the Supabase CLI:
supabase db reset --db-url "postgresql://postgres:[YOUR-PASSWORD]@db.tvsmngcgtldiobyrwdlf.supabase.co:5432/postgres"
```

## Step 4: Verify Data

Check that data was inserted correctly:

```sql
-- Count jobs by category
SELECT category, COUNT(*) as count 
FROM jobs 
GROUP BY category 
ORDER BY count DESC;

-- View recent jobs
SELECT company, title, category, type, created_at 
FROM jobs 
ORDER BY created_at DESC 
LIMIT 10;
```

Expected output:
- Design: 8 jobs
- Sales: 7 jobs
- Marketing: 7 jobs
- Finance: 6 jobs
- Technology: 8 jobs
- Engineering: 8 jobs
- Business: 3 jobs
- Human Resource: 3 jobs

**Total: 50 jobs**

## Step 5: Restart Development Server

```bash
npm run dev
```

## Verification Checklist

- [ ] Database schema updated with `category` column
- [ ] 50 jobs inserted successfully
- [ ] Jobs distributed across 8 categories
- [ ] Mix of Full Time, Remote, and Contract types
- [ ] Timestamps vary over last 30 days
- [ ] Homepage loads without errors
- [ ] Featured Jobs shows 8 jobs
- [ ] Latest Jobs shows 6 jobs
- [ ] Category Grid shows live counts
- [ ] All components display dynamic data

## Troubleshooting

### Issue: "column category does not exist"
**Solution**: Run the ALTER TABLE command in Step 1

### Issue: No jobs showing on homepage
**Solution**: 
1. Check browser console for errors
2. Verify Supabase connection in `.env.local`
3. Check that seed script ran successfully

### Issue: Category counts are 0
**Solution**: Ensure jobs have valid category values matching the 8 categories

## What Changed

### Components Now 100% Dynamic:
1. ✅ **FeaturedJobs.tsx** - Fetches 8 most recent jobs
2. ✅ **LatestJobs.tsx** - Fetches 6 most recent jobs
3. ✅ **CategoryGrid.tsx** - Calculates live job counts per category

### API Updates:
- Added `category` field to Job interface
- Added `getJobs(limit)` parameter for pagination
- Added `getCategoryCounts()` method for category statistics

### All Static Data Removed:
- ❌ Removed hardcoded job arrays
- ❌ Removed static category counts
- ❌ Removed mock data constants
