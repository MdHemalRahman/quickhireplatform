const Footer = () => (
  <footer className="bg-qh-dark text-card py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-lg mb-4">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">Q</span>
            </div>
            QuickHire
          </div>
          <p className="text-card/60 text-sm leading-relaxed">
            Great platform for the job seeker that passionate about startups. Find your dream job easier.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">About</h4>
          <ul className="space-y-2 text-sm text-card/60">
            <li><a href="#" className="hover:text-card transition-colors">Companies</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Advice</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Resources</h4>
          <ul className="space-y-2 text-sm text-card/60">
            <li><a href="#" className="hover:text-card transition-colors">Help Docs</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Guide</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Updates</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Get job notifications</h4>
          <p className="text-card/60 text-sm mb-4">The latest job news, articles, sent to your inbox weekly.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-card/10 border border-card/20 text-sm rounded-lg px-3 py-2 text-card placeholder:text-card/40 outline-none flex-1"
            />
            <button className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-card/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-card/40 text-sm">2021 © QuickHire. All rights reserved.</p>
        <div className="flex gap-4">
          {["f", "in", "ig", "yt", "tw"].map((s) => (
            <div key={s} className="w-8 h-8 rounded-full border border-card/20 flex items-center justify-center text-card/40 text-xs hover:text-card hover:border-card/40 transition-colors cursor-pointer">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
