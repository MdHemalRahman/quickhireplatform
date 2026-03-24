import { useEffect, useState } from "react";
import { jobsApi, Job } from "@/api/jobs";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ApplyForm } from "@/components/ApplyForm";

const LatestJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  useEffect(() => { loadJobs(); }, []);

  const loadJobs = async () => {
    try {
      const { data, error } = await jobsApi.getJobs(6);
      if (error) toast.error("Failed to load jobs");
      else setJobs(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-12 md:py-24 bg-card">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Latest <span className="text-primary italic">jobs open</span>
            </h2>
            <a href="/jobs" className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">
              See all <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border animate-pulse">
                  <div className="w-12 h-12 rounded-lg bg-muted shrink-0" />
                  <div className="flex-1">
                    <div className="h-4 bg-muted rounded mb-2 w-3/4" />
                    <div className="h-3 bg-muted rounded mb-3 w-1/2" />
                    <div className="flex gap-2">
                      <div className="h-5 w-16 bg-muted rounded-full" />
                      <div className="h-5 w-16 bg-muted rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : jobs.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No jobs available</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-3">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer bg-card active:scale-[0.99]"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 bg-primary text-primary-foreground">
                    {job.company.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground text-sm truncate">{job.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{job.company} · {job.location}</p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {job.type}
                      </span>
                      {job.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl mx-4">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedJob?.title}</DialogTitle>
          </DialogHeader>
          {selectedJob && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center text-lg font-bold bg-primary text-primary-foreground shrink-0">
                  {selectedJob.company.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold">{selectedJob.company}</h3>
                  <p className="text-sm text-muted-foreground">{selectedJob.location}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{selectedJob.type}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">{selectedJob.category}</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Job Description</h4>
                <p className="text-sm text-muted-foreground">{selectedJob.description}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Skills & Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
                  ))}
                </div>
              </div>
              <Button className="w-full min-h-[44px]" onClick={() => { setApplyingJob(selectedJob); setSelectedJob(null); }}>
                Apply Now
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!applyingJob} onOpenChange={() => setApplyingJob(null)}>
        <DialogContent className="max-w-2xl mx-4">
          <DialogHeader>
            <DialogTitle>Apply for {applyingJob?.title}</DialogTitle>
          </DialogHeader>
          {applyingJob && <ApplyForm jobId={applyingJob.id} onSuccess={() => setApplyingJob(null)} />}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LatestJobs;
