import { useEffect, useState } from 'react';
import { jobsApi, Job } from '@/api/jobs';
import { Palette, BarChart3, Megaphone, DollarSign, Monitor, Code2, Briefcase, Users, ArrowRight } from "lucide-react";
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ApplyForm } from '@/components/ApplyForm';

const categoryIcons = {
  Design: Palette,
  Sales: BarChart3,
  Marketing: Megaphone,
  Finance: DollarSign,
  Technology: Monitor,
  Engineering: Code2,
  Business: Briefcase,
  'Human Resource': Users,
};

const CategoryGrid = () => {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryJobs, setCategoryJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data, error } = await jobsApi.getCategoryCounts();
      if (error) {
        toast.error('Failed to load categories');
      } else {
        const categoryList = Object.entries(data || {}).map(([name, count]) => ({
          name,
          count,
        }));
        setCategories(categoryList);
      }
    } catch (error) {
      console.error('Error loading categories:', error);
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
        toast.error('Failed to load jobs');
      } else {
        const filtered = (data || []).filter(job => job.category === categoryName);
        setCategoryJobs(filtered);
      }
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoadingJobs(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore by <span className="text-primary italic">category</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border p-6 animate-pulse">
                <div className="w-12 h-12 rounded-lg bg-muted mb-4"></div>
                <div className="h-5 bg-muted rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore by <span className="text-primary italic">category</span>
            </h2>
            <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-primary font-medium hover:underline">
              Show all jobs <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.name as keyof typeof categoryIcons] || Briefcase;
              return (
                <div
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className="group rounded-xl border p-6 cursor-pointer transition-all duration-200 bg-card border-border hover:border-primary hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-accent">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-1 text-foreground">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-muted-foreground">
                      {cat.count} jobs available
                    </span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedCategory} Jobs ({categoryJobs.length})
            </DialogTitle>
          </DialogHeader>
          {loadingJobs ? (
            <div className="py-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading jobs...</p>
            </div>
          ) : categoryJobs.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              No jobs found in this category
            </div>
          ) : (
            <div className="grid gap-4">
              {categoryJobs.map((job) => (
                <div key={job.id} className="border border-border rounded-lg p-4 hover:border-primary transition-colors relative">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                  <div className="flex items-end justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" className="shrink-0" onClick={(e) => { e.stopPropagation(); setApplyingJob(job); }}>
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

export default CategoryGrid;
