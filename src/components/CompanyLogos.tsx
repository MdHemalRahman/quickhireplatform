const companies = ["vodafone", "intel", "TESLA", "AMD", "Talkit"];

const CompanyLogos = () => (
  <section className="py-12 border-b border-border bg-card">
    <div className="container mx-auto px-4">
      <p className="text-xs text-muted-foreground mb-6">Companies we helped grow</p>
      <div className="flex flex-wrap items-center gap-12 md:gap-16">
        {companies.map((c) => (
          <span key={c} className="text-xl md:text-2xl font-bold text-muted-foreground/40 tracking-wide select-none">
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyLogos;
