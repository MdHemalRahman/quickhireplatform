import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const applicationSchema = z.object({
  job_id: z.string().uuid(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  resume_link: z.string().url('Invalid URL format'),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export interface Application {
  id: string;
  job_id: string;
  name: string;
  email: string;
  resume_link: string;
  created_at: string;
  jobs?: {
    title: string;
    company: string;
  };
}

export const applicationsApi = {
  async createApplication(data: ApplicationInput): Promise<{ success: boolean; error: Error | null }> {
    try {
      const validated = applicationSchema.parse(data);
      const { error } = await supabase
        .from('applications')
        .insert([validated]);

      if (error) throw error;
      return { success: true, error: null };
    } catch (error) {
      console.error('Error creating application:', error);
      return { success: false, error: error as Error };
    }
  },

  async getApplications(): Promise<{ data: Application[] | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select(`
          *,
          jobs (title, company)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching applications:', error);
      return { data: null, error: error as Error };
    }
  }
};
