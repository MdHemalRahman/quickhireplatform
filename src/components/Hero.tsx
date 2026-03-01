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

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Geometric lines */}
    <svg className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06]" viewBox="0 0 400 400" fill="none">
      <line x1="50" y1="0" x2="350" y2="400" stroke="hsl(var(--primary))" strokeWidth="1" />
      <line x1="100" y1="0" x2="400" y2="400" stroke="hsl(var(--primary))" strokeWidth="1" />
      <line x1="0" y1="100" x2="400" y2="300" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <circle cx="300" cy="200" r="80" stroke="hsl(var(--primary))" strokeWidth="0.5" />
      <circle cx="250" cy="150" r="40" stroke="hsl(var(--primary))" strokeWidth="0.5" />
    </svg>
    {/* Angled background shape */}
    <div
      className="absolute right-[5%] top-[10%] w-[40%] h-[80%] rounded-3xl rotate-3"
      style={{ background: "hsl(var(--primary) / 0.04)" }}
    />
  </div>
);

const Hero = () => (
  <section className="bg-card py-16 md:py-24 relative">
    <HeroBackground />
    <div className="max-w-[1280px] mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1
            className="text-4xl md:text-[56px] font-extrabold leading-[1.1] text-foreground mb-0"
            style={{ letterSpacing: "-0.02em" }}
          >
            Discover<br />more than<br />
            <span className="text-primary text-[64px]">5000+ Jobs</span>
          </h1>
          <BrushUnderline />

          <p className="text-muted-foreground text-base leading-relaxed max-w-md mt-6 mb-10">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search bar */}
          <div
            className="flex flex-col sm:flex-row bg-card border border-border rounded-xl overflow-hidden"
            style={{
              height: "auto",
              minHeight: "60px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <div className="flex items-center gap-2 px-4 flex-1 border-b sm:border-b-0 sm:border-r border-border h-[60px]">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2 px-4 flex-1 border-b sm:border-b-0 sm:border-r border-border h-[60px]">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Florence, Italy"
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button
              className="bg-primary text-primary-foreground text-sm font-semibold px-6 hover:brightness-95 transition-all m-1.5 h-[calc(60px-12px)]"
              style={{ borderRadius: "10px" }}
            >
              Search my job
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Popular: <span className="text-foreground">UI Designer, UX Researcher, Android, Admin</span>
          </p>
        </div>

        <div className="hidden md:flex justify-end relative">
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
