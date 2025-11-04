import { Card } from "@/components/ui/card";
import { Briefcase, Utensils, Laptop, ArrowRight } from "lucide-react";

export default function BusinessVerticals() {
  const verticals = [
    {
      icon: Briefcase,
      title: "Jet Staffing Private Limited",
      subtitle: "Manpower Solutions",
      description: "Comprehensive workforce management, recruitment, training, and skill development services. We bridge the gap between talent and opportunity, providing organizations with skilled personnel across India.",
      highlights: [
        "Pan-India operations",
        "Premier clientele including Adani, Reliance, Tata",
        "End-to-end workforce solutions",
      ],
    },
    {
      icon: Utensils,
      title: "JSPL Hospitality Private Limited",
      subtitle: "Hospitality & Tourism",
      description: "Full-service hospitality operations including hotel management, restaurant services, catering, and large-scale event logistics. We create memorable experiences combining traditional Indian hospitality with modern standards.",
      highlights: [
        "Hotel & resort operations",
        "Large-scale event management",
        "Kumbh Mela logistics expertise",
      ],
    },
    {
      icon: Laptop,
      title: "JSPL Tech Private Limited",
      subtitle: "Technology Solutions",
      description: "Custom IT solutions, software development, digital transformation, and data management services. We empower businesses with technology that drives efficiency and creates competitive advantage.",
      highlights: [
        "Custom software development",
        "Business automation",
        "Digital transformation",
      ],
    },
  ];

  return (
    <section id="verticals" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-business-verticals">
            Our Business Verticals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three synergistic sectors contributing unique value to our comprehensive service portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate active-elevate-2 cursor-pointer transition-all"
                data-testid={`card-vertical-${index}`}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{vertical.title}</h3>
                  <p className="text-primary font-medium">{vertical.subtitle}</p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {vertical.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {vertical.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-primary font-medium hover-elevate px-3 py-2 rounded-md -ml-3">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
