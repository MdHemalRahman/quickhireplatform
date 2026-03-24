import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, X } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname === "/admin";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Failed to logout");
    } else {
      toast.success("Logged out successfully");
      navigate("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-14 px-4">
        {/* Logo */}
        {isAdminPage ? (
          <div className="flex items-center gap-2 font-bold text-lg text-foreground">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">Q</span>
            </div>
            QuickHire
          </div>
        ) : (
          <a href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">Q</span>
            </div>
            QuickHire
          </a>
        )}

        {/* Desktop nav links */}
        {!isAdminPage && (
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/jobs" className="hover:text-foreground transition-colors">Find Jobs</a>
            <a href="#" className="hover:text-foreground transition-colors">Browse Companies</a>
          </div>
        )}

        {/* Right side */}
        {isAdminPage ? (
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        ) : (
          <>
            {/* Desktop auth */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Login</a>
              <a href="#" className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Sign Up
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && !isAdminPage && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-3">
          <a href="/jobs" className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors" onClick={() => setMenuOpen(false)}>
            Find Jobs
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors" onClick={() => setMenuOpen(false)}>
            Browse Companies
          </a>
          <div className="flex gap-3 pt-2 border-t border-border">
            <a href="#" className="flex-1 text-center text-sm font-medium py-2.5 rounded-lg border border-border hover:bg-accent transition-colors">
              Login
            </a>
            <a href="#" className="flex-1 text-center bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
