import { Construction } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-bold text-primary">JSPL</div>
              <Badge variant="outline" className="bg-primary/10 border-primary/30">
                <Construction className="h-3 w-3 mr-1" />
                Under Construction
              </Badge>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building India's Future through excellence in Manpower Solutions, Hospitality Services, and Technology Innovation.
            </p>
            <p className="text-sm text-muted-foreground">
              Headquartered in Jharkhand with pan-India operations across 5+ states.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover-elevate px-2 py-1 rounded -ml-2">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('verticals')?.scrollIntoView({ behavior: 'smooth' })} className="hover-elevate px-2 py-1 rounded -ml-2">
                  Business Verticals
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })} className="hover-elevate px-2 py-1 rounded -ml-2">
                  Leadership
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover-elevate px-2 py-1 rounded -ml-2">
                  Contact
                </button>
              </li>
              <li className="text-muted-foreground/50">Careers (Coming Soon)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Businesses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Jet Staffing Pvt. Ltd.</li>
              <li>JSPL Hospitality Pvt. Ltd.</li>
              <li>JSPL Tech Pvt. Ltd.</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JSPL Group of Companies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover-elevate px-2 py-1 rounded">Privacy Policy</button>
            <button className="hover-elevate px-2 py-1 rounded">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
