import { useEffect, useState } from 'react';
import { jobsApi, Job } from '@/api/jobs';
import { ArrowRight } from "lucide-react";
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ApplyForm } from '@/components/ApplyForm';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const { data, error } = await jobsApi.getJobs(8);
      if (error) {
        toast.error('Failed to load jobs');
      } else {
        setJobs(data || []);
      }
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-primary italic">jobs</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 animate-pulse">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-muted"></div>
                  <div className="h-6 w-20 rounded-full bg-muted"></div>
                </div>
                <div className="h-5 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-primary italic">jobs</span>
            </h2>
            <a href="/jobs" className="hidden sm:flex items-center gap-1 text-sm text-primary font-medium hover:underline">
              Show all jobs <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {jobs.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No jobs available</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold bg-primary text-primary-foreground">
                      {job.company.charAt(0)}
                    </div>
                    <span className="text-xs font-medium border border-primary text-primary px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {job.company} · {job.location}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>
                  <div className="flex items-end justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" className="shrink-0" onClick={() => setApplyingJob(job)}>
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!applyingJob} onOpenChange={() => setApplyingJob(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Apply for {applyingJob?.title}</DialogTitle>
          </DialogHeader>
          {applyingJob && (
            <ApplyForm jobId={applyingJob.id} onSuccess={() => setApplyingJob(null)} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeaturedJobs;
