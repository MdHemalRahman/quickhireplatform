import { ArrowRight } from "lucide-react";

interface Job {
  company: string;
  companyInitial: string;
  companyColor: string;
  type: string;
  title: string;
  location: string;
  description: string;
  tags: { label: string; color: string }[];
}

const jobs: Job[] = [
  {
    company: "Revolut", companyInitial: "R", companyColor: "bg-foreground text-card",
    type: "Full Time", title: "Email Marketing",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma...",
    tags: [
      { label: "Marketing", color: "bg-qh-orange/10 text-qh-orange" },
      { label: "Design", color: "bg-primary/10 text-primary" },
    ],
  },
  {
    company: "Dropbox", companyInitial: "⬡", companyColor: "bg-primary text-primary-foreground",
    type: "Full Time", title: "Brand Designer",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the bran...",
    tags: [
      { label: "Design", color: "bg-primary/10 text-primary" },
      { label: "Business", color: "bg-qh-green/10 text-qh-green" },
    ],
  },
  {
    company: "Pitch", companyInitial: "W", companyColor: "bg-qh-dark text-card",
    type: "Full Time", title: "Email Marketing",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Marketing to join marketi...",
    tags: [
      { label: "Marketing", color: "bg-qh-orange/10 text-qh-orange" },
    ],
  },
  {
    company: "Blinkist", companyInitial: "●", companyColor: "bg-qh-green text-card",
    type: "Full Time", title: "Visual Designer",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team des...",
    tags: [
      { label: "Design", color: "bg-primary/10 text-primary" },
    ],
  },
  {
    company: "ClassPass", companyInitial: "◆", companyColor: "bg-red-500 text-card",
    type: "Full Time", title: "Product Designer",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help se...",
    tags: [
      { label: "Marketing", color: "bg-qh-orange/10 text-qh-orange" },
      { label: "Design", color: "bg-primary/10 text-primary" },
    ],
  },
  {
    company: "Canva", companyInitial: "C", companyColor: "bg-qh-green text-card",
    type: "Full Time", title: "Lead Designer",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Designer to help develop r...",
    tags: [
      { label: "Design", color: "bg-primary/10 text-primary" },
      { label: "Business", color: "bg-qh-green/10 text-qh-green" },
    ],
  },
  {
    company: "GoDaddy", companyInitial: "G", companyColor: "bg-qh-green text-card",
    type: "Full Time", title: "Brand Strategist",
    location: "Marseille, France",
    description: "GoDaddy is looking to join the team...",
    tags: [
      { label: "Marketing", color: "bg-qh-orange/10 text-qh-orange" },
    ],
  },
  {
    company: "Twitter", companyInitial: "𝕏", companyColor: "bg-primary text-primary-foreground",
    type: "Full Time", title: "Data Analyst",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team deci...",
    tags: [
      { label: "Technology", color: "bg-primary/10 text-primary" },
    ],
  },
];

const FeaturedJobs = () => (
  <section className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Featured <span className="text-primary italic">jobs</span>
        </h2>
        <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-primary font-medium hover:underline">
          Show all jobs <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${job.companyColor}`}>
                {job.companyInitial}
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
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag.label} className={`text-xs font-medium px-2.5 py-1 rounded-full ${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedJobs;
