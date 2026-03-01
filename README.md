# QuickHire Platform

A modern job board platform built with React, TypeScript, and Supabase. QuickHire allows users to browse jobs by category, search and filter listings, and apply directly through the platform. Includes a full-featured admin dashboard for managing job postings.

## Features

- 🔍 **Job Search & Filtering** - Search by title/company, filter by category and job type
- 📊 **Category Browse** - Explore jobs across 8 categories (Design, Sales, Marketing, Finance, Technology, Engineering, Business, HR)
- 📝 **Job Applications** - Apply directly with resume link and cover letter
- 🔐 **Admin Dashboard** - Full CRUD operations for managing job listings
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Supabase (PostgreSQL)
- **UI Components**: shadcn/ui, Tailwind CSS
- **State Management**: TanStack React Query
- **Form Validation**: React Hook Form + Zod
- **Routing**: React Router v6

## Prerequisites

- Node.js 16+ and npm
- Supabase account

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MdHemalRahman/quickhireplatform.git
cd quickhireplatform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL scripts in your Supabase SQL Editor:
   - First run `schema.sql` to create tables
   - Then run `seed_jobs.sql` to populate with sample data

### 4. Configure environment variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase project settings under **API**.

### 5. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## Admin Access

To access the admin dashboard at `/admin`:

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Users**
3. Click **Add user** and create an account
4. Use these credentials to login at `/login`

## Project Structure

```
src/
├── api/              # API layer for Supabase
├── components/       # React components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Supabase client config
└── types/           # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Database Schema

### Jobs Table
- `id` (uuid, primary key)
- `company` (text)
- `title` (text)
- `location` (text)
- `category` (text)
- `type` (text)
- `description` (text)
- `tags` (text[])
- `created_at` (timestamp)

### Applications Table
- `id` (uuid, primary key)
- `job_id` (uuid, foreign key)
- `name` (text)
- `email` (text)
- `resume_link` (text)
- `cover_letter` (text)
- `created_at` (timestamp)

## License

MIT

## Author

[MdHemalRahman](https://github.com/MdHemalRahman)
