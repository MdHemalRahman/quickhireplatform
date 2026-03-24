const companies = ["Vodafone", "Intel", "Tesla", "AMD", "Talkit"];

const CompanyLogos = () => (
  <section className="py-10 md:py-16 bg-card border-y border-border">
    <div className="max-w-[1280px] mx-auto px-4">
      <p className="text-xs text-muted-foreground text-center mb-6">Companies we helped grow</p>
      {/* Horizontal scroll on mobile, flex-wrap on desktop */}
      <div className="flex items-center gap-8 md:gap-16 overflow-x-auto pb-1 md:pb-0 md:flex-wrap md:justify-center scrollbar-none">
        {companies.map((c) => (
          <span
            key={c}
            className="text-lg md:text-2xl font-bold text-muted-foreground/40 select-none tracking-wide shrink-0"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyLogos;
