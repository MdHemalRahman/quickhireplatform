import { ArrowRight } from "lucide-react";

interface LatestJob {
  company: string;
  initial: string;
  color: string;
  title: string;
  location: string;
  tags: string[];
}

const latestJobs: LatestJob[] = [
  { company: "Nomad", initial: "N", color: "bg-qh-green text-card", title: "Social Media Assistant", location: "Paris, France", tags: ["Full Time", "Marketing", "Design"] },
  { company: "Netlify", initial: "N", color: "bg-primary text-primary-foreground", title: "Social Media Assistant", location: "Paris, France", tags: ["Full Time", "Marketing", "Design"] },
  { company: "Dropbox", initial: "D", color: "bg-primary text-primary-foreground", title: "Brand Designer", location: "San Francisco, USA", tags: ["Full Time", "Marketing", "Design"] },
  { company: "Maze", initial: "M", color: "bg-qh-orange text-card", title: "Brand Designer", location: "San Francisco, USA", tags: ["Full Time", "Marketing", "Design"] },
  { company: "Terraform", initial: "T", color: "bg-foreground text-card", title: "Interactive Developer", location: "Hamburg, Germany", tags: ["Full Time", "Marketing", "Design"] },
  { company: "Udacity", initial: "U", color: "bg-primary text-primary-foreground", title: "Interactive Developer", location: "Hamburg, Germany", tags: ["Full Time", "Marketing", "Design"] },
  { company: "Packer", initial: "P", color: "bg-qh-green text-card", title: "HR Manager", location: "Lucern, Switzerland", tags: ["Full Time", "Marketing", "Design"] },
  { company: "Webflow", initial: "W", color: "bg-primary text-primary-foreground", title: "HR Manager", location: "Lucern, Switzerland", tags: ["Full Time", "Marketing", "Design"] },
];

const LatestJobs = () => (
  <section className="py-20 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Latest <span className="text-primary italic">jobs open</span>
        </h2>
        <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-primary font-medium hover:underline">
          Show all jobs <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {latestJobs.map((job, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-5 rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer bg-card"
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${job.color}`}>
              {job.initial}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground">{job.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">
                {job.company} · {job.location}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      tag === "Full Time"
                        ? "bg-primary/10 text-primary"
                        : tag === "Marketing"
                        ? "bg-qh-orange/10 text-qh-orange"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestJobs;
