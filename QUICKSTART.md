# 🚀 QUICK START - Post-Audit Setup

## Step 1: Install Supabase
```bash
npm install @supabase/supabase-js
```

## Step 2: Create Database Tables

Go to your Supabase SQL Editor and run:

```sql
-- Jobs Table
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON jobs
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated delete" ON jobs
  FOR DELETE USING (auth.role() = 'authenticated');

-- Applications Table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  resume_link TEXT NOT NULL,
  cover_letter TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON applications
  FOR SELECT USING (auth.role() = 'authenticated');

-- Sample Data
INSERT INTO jobs (company, title, location, type, description, tags) VALUES
('Revolut', 'Email Marketing', 'Madrid, Spain', 'Full Time', 'Revolut is looking for Email Marketing to help team manage campaigns', ARRAY['Marketing', 'Design']),
('Dropbox', 'Brand Designer', 'San Francisco, US', 'Full Time', 'Dropbox is looking for Brand Designer to help the brand team', ARRAY['Design', 'Business']),
('Pitch', 'Customer Marketing', 'Berlin, Germany', 'Full Time', 'Pitch is looking for Customer Marketing to join marketing team', ARRAY['Marketing']);
```

## Step 3: Restart Dev Server
```bash
npm run dev
```

## Step 4: Test the Application

### Test Homepage
- Visit: http://localhost:8080
- Should see jobs loading from database

### Test Admin (requires Supabase user)
1. Create a user in Supabase Dashboard → Authentication
2. Visit: http://localhost:8080/login
3. Login with credentials
4. Access: http://localhost:8080/admin
5. Test job deletion

## ✅ What's Been Implemented

| Feature | Status | File |
|---------|--------|------|
| Database Connection | ✅ | `src/lib/supabase.ts` |
| Environment Config | ✅ | `.env.local` |
| Jobs API | ✅ | `src/api/jobs/index.ts` |
| Applications API | ✅ | `src/api/applications/index.ts` |
| Apply Form | ✅ | `src/components/ApplyForm.tsx` |
| Form Validation | ✅ | Zod schemas in API & components |
| Dynamic Data | ✅ | `src/components/FeaturedJobs.tsx` |
| Admin Dashboard | ✅ | `src/pages/Admin.tsx` |
| Authentication | ✅ | `src/hooks/useAuth.ts` |
| Protected Routes | ✅ | `src/components/ProtectedRoute.tsx` |
| Login Page | ✅ | `src/pages/Login.tsx` |

## 📋 Checklist

- [ ] Run `npm install @supabase/supabase-js`
- [ ] Create database tables in Supabase
- [ ] Create a test user in Supabase Auth
- [ ] Restart dev server
- [ ] Test homepage loads jobs
- [ ] Test login functionality
- [ ] Test admin dashboard
- [ ] Test job deletion

## 🔗 Important URLs

- **Homepage**: http://localhost:8080
- **Login**: http://localhost:8080/login
- **Admin**: http://localhost:8080/admin (protected)
- **Supabase Dashboard**: https://app.supabase.com/project/tvsmngcgtldiobyrwdlf

## 📚 Documentation

- Full details: `AUDIT_SUMMARY.md`
- Setup guide: `TECHNICAL_AUDIT.md`
