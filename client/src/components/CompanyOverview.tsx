import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function CompanyOverview() {
  const stats = [
    { number: "3", label: "Business Verticals" },
    { number: "5+", label: "States Covered" },
    { number: "50+", label: "Corporate Clients" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-who-we-are">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The JSPL Group of Companies is a fast-growing, forward-looking business house driven by passion, purpose, and performance. 
            Headquartered in Jharkhand, we have established a strong pan-India presence across three core sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-stat-${index}`}>
              <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8" data-testid="card-vision">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a recognized multi-sector enterprise delivering excellence, innovation, and integrity across every business vertical. 
                  We aspire to be the partner of choice for organizations seeking reliable, value-driven solutions that drive sustainable growth.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8" data-testid="card-mission">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide value-driven services in human resources, hospitality, and technology through continuous improvement and 
                  unwavering commitment to client satisfaction. We strive to set industry benchmarks through operational excellence.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-primary/5 border-primary/20" data-testid="card-trust">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Users className="h-6 w-6 text-primary" />
            <p className="text-lg font-semibold text-center">
              Trusted Partner to India's Leading Corporations: Adani, Reliance, Tata
            </p>
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
        </Card>
      </div>
    </section>
  );
}
