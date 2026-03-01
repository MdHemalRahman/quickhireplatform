# ⚡ Admin Dashboard - Quick Reference

## 🔐 Access

1. Login at `/login` with Supabase credentials
2. Navigate to `/admin`

## 🎯 Features

### 📊 View Jobs
- See all jobs in table format
- Columns: Title, Company, Category, Type, Date, Actions
- Auto-sorted by newest first

### 🔍 Search
- Type in search box at top
- Searches: Title, Company, Category
- Live filtering

### ➕ Add Job
1. Click "Add Job" button (top right)
2. Fill required fields:
   - Title *
   - Company *
   - Location *
   - Category * (dropdown)
   - Type * (dropdown)
   - Description * (min 10 chars)
   - Tags * (comma-separated)
3. Click "Create"

### ✏️ Edit Job
1. Click pencil icon on any row
2. Modify fields
3. Click "Update"

### 🗑️ Delete Job
1. Click trash icon on any row
2. Confirm deletion
3. Job removed

## 📋 Categories
- Design
- Sales
- Marketing
- Finance
- Technology
- Engineering
- Business
- Human Resource

## 📋 Types
- Full Time
- Remote
- Contract

## ✅ Validation
- All fields required except tags can be empty
- Title: min 2 chars
- Company: min 2 chars
- Location: min 2 chars
- Description: min 10 chars
- Tags: comma-separated (e.g., "Design, UI/UX")

## 🎨 UI Features
- Skeleton loading states
- Toast notifications
- Confirmation dialogs
- Error messages
- Real-time updates
- Responsive design

## 🔄 Auto-Refresh
Table automatically updates after:
- Creating a job
- Updating a job
- Deleting a job

## 🚀 Quick Test

```bash
# 1. Start server
npm run dev

# 2. Login
Visit: http://localhost:8080/login

# 3. Access Admin
Visit: http://localhost:8080/admin

# 4. Test CRUD
- Add a test job
- Edit it
- Delete it
- Search for jobs
```

---

**Status**: ✅ Ready to use!
