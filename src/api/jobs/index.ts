import { supabase } from '@/lib/supabase';

export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  category: string;
  type: string;
  description: string;
  tags: string[];
  created_at: string;
}

export interface JobInput {
  company: string;
  title: string;
  location: string;
  category: string;
  type: string;
  description: string;
  tags: string[];
}

export const jobsApi = {
  async getJobs(limit?: number): Promise<{ data: Job[] | null; error: Error | null }> {
    try {
      let query = supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (limit) query = query.limit(limit);

      const { data, error } = await query;

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return { data: null, error: error as Error };
    }
  },

  async getCategoryCounts(): Promise<{ data: Record<string, number> | null; error: Error | null }> {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('category');

      if (error) throw error;

      const counts: Record<string, number> = {};
      data?.forEach((job) => {
        counts[job.category] = (counts[job.category] || 0) + 1;
      });

      return { data: counts, error: null };
    } catch (error) {
      console.error('Error fetching category counts:', error);
      return { data: null, error: error as Error };
    }
  },

  async createJob(job: JobInput): Promise<{ success: boolean; error: Error | null }> {
    try {
      const { error } = await supabase
        .from('jobs')
        .insert([job]);

      if (error) throw error;
      return { success: true, error: null };
    } catch (error) {
      console.error('Error creating job:', error);
      return { success: false, error: error as Error };
    }
  },

  async updateJob(id: string, job: JobInput): Promise<{ success: boolean; error: Error | null }> {
    try {
      const { error } = await supabase
        .from('jobs')
        .update(job)
        .eq('id', id);

      if (error) throw error;
      return { success: true, error: null };
    } catch (error) {
      console.error('Error updating job:', error);
      return { success: false, error: error as Error };
    }
  },

  async deleteJob(id: string): Promise<{ success: boolean; error: Error | null }> {
    try {
      const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { success: true, error: null };
    } catch (error) {
      console.error('Error deleting job:', error);
      return { success: false, error: error as Error };
    }
  }
};
