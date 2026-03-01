import { Search, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-card border-b border-border">
    <div className="container mx-auto flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">Q</span>
          </div>
          QuickHire
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Find Jobs</a>
          <a href="#" className="hover:text-foreground transition-colors">Browse Companies</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Login</a>
        <a href="#" className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
