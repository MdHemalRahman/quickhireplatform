import ctaDashboard from "@/assets/cta-dashboard.png";

const CTABanner = () => (
  <section className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="rounded-2xl overflow-hidden bg-qh-dark grid md:grid-cols-2 items-center">
        <div className="p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card leading-tight mb-4">
            Start posting<br />jobs today
          </h2>
          <p className="text-card/70 text-sm mb-8">
            Start posting jobs for only $10.
          </p>
          <a
            href="#"
            className="inline-block bg-card text-foreground text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign Up For Free
          </a>
        </div>
        <div className="hidden md:block p-8">
          <img
            src={ctaDashboard}
            alt="Dashboard preview"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
