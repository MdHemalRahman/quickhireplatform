import { useEffect, useState } from 'react';
import { jobsApi, Job } from '@/api/jobs';
import { ArrowRight } from "lucide-react";
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ApplyForm } from '@/components/ApplyForm';

const LatestJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const { data, error } = await jobsApi.getJobs(6);
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
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest <span className="text-primary italic">jobs open</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card animate-pulse">
                <div className="w-12 h-12 rounded-lg bg-muted shrink-0"></div>
                <div className="flex-1">
                  <div className="h-5 bg-muted rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-muted rounded mb-3 w-1/2"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-20 bg-muted rounded-full"></div>
                    <div className="h-6 w-20 bg-muted rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest <span className="text-primary italic">jobs open</span>
            </h2>
            <a href="/jobs" className="hidden sm:flex items-center gap-1 text-sm text-primary font-medium hover:underline">
              Show all jobs <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {jobs.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No jobs available</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer bg-card"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 bg-primary text-primary-foreground">
                    {job.company.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {job.company} · {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {job.type}
                      </span>
                      {job.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedJob?.title}</DialogTitle>
          </DialogHeader>
          {selectedJob && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center text-xl font-bold bg-primary text-primary-foreground">
                  {selectedJob.company.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{selectedJob.company}</h3>
                  <p className="text-sm text-muted-foreground">{selectedJob.location}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {selectedJob.type}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
                  {selectedJob.category}
                </span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Job Description</h4>
                <p className="text-muted-foreground">{selectedJob.description}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Skills & Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="w-full" onClick={() => { setApplyingJob(selectedJob); setSelectedJob(null); }}>
                Apply Now
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

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

export default LatestJobs;
