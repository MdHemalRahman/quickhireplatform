import { Search, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname === '/admin';

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Failed to logout');
    } else {
      toast.success('Logged out successfully');
      navigate('/login');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-8">
          {isAdminPage ? (
            <div className="flex items-center gap-2 font-bold text-xl text-foreground">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">Q</span>
              </div>
              QuickHire
            </div>
          ) : (
            <a href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">Q</span>
              </div>
              QuickHire
            </a>
          )}
          {!isAdminPage && (
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/jobs" className="hover:text-foreground transition-colors">Find Jobs</a>
              <a href="#" className="hover:text-foreground transition-colors">Browse Companies</a>
            </div>
          )}
        </div>
        {isAdminPage ? (
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        ) : (
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Login</a>
            <a href="#" className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Sign Up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
