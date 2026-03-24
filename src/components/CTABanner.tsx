import ctaDashboard from "@/assets/cta-dashboard.png";

const CTABanner = () => (
  <section className="py-12 md:py-24 bg-background">
    <div className="max-w-[1280px] mx-auto px-4">
      <div className="rounded-2xl overflow-hidden bg-qh-dark">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-16">
            <h2 className="text-2xl md:text-4xl font-bold text-card leading-tight mb-3">
              Start posting<br />jobs today
            </h2>
            <p className="text-card/70 text-sm mb-6 md:mb-8">
              Start posting jobs for only $10.
            </p>
            <a
              href="#"
              className="block w-full md:w-auto text-center bg-card text-foreground text-sm font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center md:inline-flex"
            >
              Sign Up For Free
            </a>
          </div>
          {/* Dashboard image: hidden on mobile, visible on md+ */}
          <div className="hidden md:block p-8">
            <img
              src={ctaDashboard}
              alt="Dashboard preview"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
        {/* Dashboard image below CTA on mobile */}
        <div className="md:hidden px-6 pb-6">
          <img
            src={ctaDashboard}
            alt="Dashboard preview"
            className="w-full rounded-xl shadow-lg opacity-80"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
