// Database Types for QuickHire Platform

export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
  created_at: string;
}

export interface Application {
  id: string;
  job_id: string;
  name: string;
  email: string;
  resume_link: string;
  cover_letter?: string;
  created_at: string;
}

export interface ApplicationInput {
  job_id: string;
  name: string;
  email: string;
  resume_link: string;
  cover_letter?: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
}

export interface ApiSuccessResponse {
  success: boolean;
  error: Error | null;
}
