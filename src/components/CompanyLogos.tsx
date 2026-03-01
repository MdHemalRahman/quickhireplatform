const companies = ["vodafone", "intel", "TESLA", "AMD", "Talkit"];

const CompanyLogos = () => (
  <section className="py-20 bg-card">
    <div className="max-w-[1280px] mx-auto px-4 text-center">
      <p className="text-xs text-muted-foreground mb-8">Companies we helped grow</p>
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
        {companies.map((c) => (
          <span key={c} className="text-xl md:text-2xl font-bold text-muted-foreground/50 grayscale select-none tracking-wide">
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyLogos;
