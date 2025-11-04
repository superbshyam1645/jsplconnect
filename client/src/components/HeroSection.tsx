import { Construction, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Hero_construction_infrastructure_image_98c91379.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Badge 
          variant="outline" 
          className="mb-8 px-6 py-3 text-sm font-semibold backdrop-blur-md bg-primary/20 border-primary/30 text-primary-foreground"
          data-testid="badge-construction"
        >
          <Construction className="h-4 w-4 mr-2" />
          Website Under Construction
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Building India's Future
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
          JSPL Group of Companies
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          Powering People, Hospitality & Technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="backdrop-blur-md bg-primary/90 hover:bg-primary text-primary-foreground px-8 py-6 text-lg"
            data-testid="button-stay-updated"
          >
            Stay Updated
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            size="lg"
            className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg"
            data-testid="button-contact-us"
          >
            Contact Us
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm">Scroll to learn more</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
