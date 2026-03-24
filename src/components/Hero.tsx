import heroImage from "@/assets/hero-person.png";
import { Search, MapPin } from "lucide-react";

const BrushUnderline = () => (
  <svg
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    className="w-[110%] h-[4px] -ml-[5%] mt-1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 8C20 3 50 2 100 6C150 10 180 4 198 7"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const Hero = () => (
  <section className="bg-background pt-10 md:pt-20 pb-10 md:pb-0 relative overflow-hidden">
    {/* Subtle background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute right-[-10%] top-[5%] w-[60%] h-[90%] rounded-3xl rotate-6 opacity-40"
        style={{ background: "hsl(var(--primary) / 0.04)" }}
      />
    </div>

    <div className="max-w-[1280px] mx-auto px-4 relative z-10 md:pb-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text + Search */}
        <div>
          <h1
            className="text-[28px] sm:text-4xl md:text-[52px] font-extrabold leading-[1.15] text-foreground mb-0"
            style={{ letterSpacing: "-0.02em" }}
          >
            Discover<br />more than<br />
            <span className="text-primary text-[36px] sm:text-5xl md:text-[64px]">5000+ Jobs</span>
          </h1>
          <BrushUnderline />

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mt-4 mb-6 md:mt-6 md:mb-8">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search box — stacked on mobile */}
          <div
            className="bg-card border border-border rounded-xl overflow-hidden"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.07)", borderRadius: "12px" }}
          >
            <div className="flex items-center gap-2 px-4 border-b border-border h-[52px] md:h-[60px]">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2 px-4 border-b border-border h-[52px] md:h-[60px]">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Location"
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="p-2">
              <button
                className="w-full bg-primary text-primary-foreground text-sm font-semibold h-11 md:h-12 rounded-[10px] hover:brightness-95 transition-all"
              >
                Search my job
              </button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            Popular: <span className="text-foreground">UI Designer, UX Researcher, Android, Admin</span>
          </p>
        </div>

        {/* Hero image — hidden on mobile */}
        <div className="hidden md:flex justify-end relative mb-[-40px]">
          <img
            src={heroImage}
            alt="Job seeker"
            className="w-full max-w-md rounded-2xl object-cover relative z-10"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
