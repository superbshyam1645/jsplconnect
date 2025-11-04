import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-primary">JSPL</div>
            <div className="hidden md:block text-sm text-muted-foreground">Group of Companies</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('verticals')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-verticals"
            >
              Business Verticals
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-leadership"
            >
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} size="default" data-testid="button-get-notified">
              Get Notified
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('verticals')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
              data-testid="link-verticals-mobile"
            >
              Business Verticals
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
              data-testid="link-leadership-mobile"
            >
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md text-left"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} size="default" className="mt-2" data-testid="button-get-notified-mobile">
              Get Notified
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
