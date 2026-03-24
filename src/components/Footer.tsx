const Footer = () => (
  <footer className="bg-qh-dark text-card py-12 md:py-16">
    <div className="max-w-[1280px] mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
          <div className="flex items-center gap-2 font-bold text-lg mb-3 justify-center sm:justify-start">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">Q</span>
            </div>
            QuickHire
          </div>
          <p className="text-card/60 text-sm leading-relaxed">
            Great platform for the job seeker that passionate about startups. Find your dream job easier.
          </p>
        </div>

        {/* About */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-sm">About</h4>
          <ul className="space-y-2.5 text-sm text-card/60">
            {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map((item) => (
              <li key={item}><a href="#" className="hover:text-card transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-sm">Resources</h4>
          <ul className="space-y-2.5 text-sm text-card/60">
            {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
              <li key={item}><a href="#" className="hover:text-card transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 md:col-span-1 text-center sm:text-left">
          <h4 className="font-semibold mb-3 text-sm">Get job notifications</h4>
          <p className="text-card/60 text-sm mb-4">The latest job news, articles, sent to your inbox weekly.</p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-card/10 border border-card/20 text-sm rounded-lg px-4 py-3 text-card placeholder:text-card/40 outline-none min-h-[44px]"
            />
            <button className="w-full bg-primary text-primary-foreground text-sm font-medium px-4 py-3 rounded-lg hover:opacity-90 transition-opacity min-h-[44px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-card/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-card/40 text-xs text-center">2021 © QuickHire. All rights reserved.</p>
        <div className="flex gap-3">
          {["f", "in", "ig", "yt", "tw"].map((s) => (
            <div
              key={s}
              className="w-8 h-8 rounded-full border border-card/20 flex items-center justify-center text-card/40 text-xs hover:text-card hover:border-card/40 transition-colors cursor-pointer"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
