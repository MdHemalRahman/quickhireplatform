import heroImage from "@/assets/hero-person.png";
import { Search, MapPin } from "lucide-react";

const Hero = () => (
  <section className="bg-card py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-[56px] font-extrabold leading-[1.1] text-foreground mb-4">
            Discover<br />more than<br />
            <span className="text-primary">5000+ Jobs</span>
          </h1>
          <div className="w-24 h-1 bg-primary rounded mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 px-4 py-3 flex-1 border-b sm:border-b-0 sm:border-r border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-3 flex-1 border-b sm:border-b-0 sm:border-r border-border">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Florence, Italy"
                className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 hover:opacity-90 transition-opacity m-1.5 rounded-lg">
              Search my job
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Popular: <span className="text-foreground">UI Designer, UX Researcher, Android, Admin</span>
          </p>
        </div>

        <div className="hidden md:flex justify-end">
          <img
            src={heroImage}
            alt="Job seeker"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
