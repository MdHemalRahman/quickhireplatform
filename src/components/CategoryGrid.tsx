import { useEffect, useState } from "react";
import { jobsApi, Job } from "@/api/jobs";
import { Palette, BarChart3, Megaphone, DollarSign, Monitor, Code2, Briefcase, Users, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ApplyForm } from "@/components/ApplyForm";

const categoryIcons = {
  Design: Palette,
  Sales: BarChart3,
  Marketing: Megaphone,
  Finance: DollarSign,
  Technology: Monitor,
  Engineering: Code2,
  Business: Briefcase,
  "Human Resource": Users,
};

const CategoryGrid = () => {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryJobs, setCategoryJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  useEffect(() => { loadCategories(); }, []);

  const loadCategories = async () => {
    try {
      const { data, error } = await jobsApi.getCategoryCounts();
      if (error) {
        toast.error("Failed to load categories");
      } else {
        setCategories(Object.entries(data || {}).map(([name, count]) => ({ name, count })));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = async (categoryName: string) => {
    setSelectedCategory(categoryName);
    setLoadingJobs(true);
    try {
      const { data, error } = await jobsApi.getJobs();
      if (error) {
        toast.error("Failed to load jobs");
      } else {
        setCategoryJobs((data || []).filter((job) => job.category === categoryName));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingJobs(false);
    }
  };

  const skeletonItems = [...Array(8)].map((_, i) => (
    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border animate-pulse md:flex-col md:items-start md:p-6">
      <div className="w-11 h-11 rounded-lg bg-muted shrink-0" />
      <div className="flex-1">
        <div className="h-4 bg-muted rounded mb-2 w-3/4" />
        <div className="h-3 bg-muted rounded w-1/2" />
      </div>
    </div>
  ));

  return (
    <>
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Explore by <span className="text-primary italic">category</span>
            </h2>
            <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-primary font-medium hover:underline">
              Show all <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile: vertical list | Desktop: 4-col grid */}
          <div className="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-6">
            {loading
              ? skeletonItems
              : categories.map((cat) => {
                  const Icon = categoryIcons[cat.name as keyof typeof categoryIcons] || Briefcase;
                  return (
                    <div
                      key={cat.name}
                      onClick={() => handleCategoryClick(cat.name)}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border cursor-pointer transition-all duration-200 bg-card hover:border-primary hover:shadow-md active:scale-[0.98] md:flex-col md:items-start md:p-6"
                    >
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-accent shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm md:text-base text-foreground">{cat.name}</h3>
                        <p className="text-xs text-muted-foreground">{cat.count} jobs available</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto mx-4">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">
              {selectedCategory} Jobs ({categoryJobs.length})
            </DialogTitle>
          </DialogHeader>
          {loadingJobs ? (
            <div className="py-12 text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto" />
              <p className="mt-4 text-muted-foreground text-sm">Loading jobs...</p>
            </div>
          ) : categoryJobs.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground text-sm">No jobs found in this category</p>
          ) : (
            <div className="grid gap-3">
              {categoryJobs.map((job) => (
                <div key={job.id} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-xs text-muted-foreground">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary shrink-0">{job.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{job.description}</p>
                  <div className="flex items-end justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">{tag}</span>
                      ))}
                    </div>
                    <Button size="sm" className="shrink-0 min-h-[36px]" onClick={(e) => { e.stopPropagation(); setApplyingJob(job); }}>
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
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

export default CategoryGrid;
