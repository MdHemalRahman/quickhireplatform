import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const applicationSchema = z.object({
  job_id: z.string().uuid(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  resume_link: z.string().url('Invalid URL format'),
  cover_letter: z.string().optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const applicationsApi = {
  async createApplication(data: ApplicationInput): Promise<{ success: boolean; error: Error | null }> {
    try {
      // Validate input
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
  }
};
