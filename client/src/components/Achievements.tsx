import { Card } from "@/components/ui/card";
import { Award, Handshake, MapPin, TrendingUp } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: "Kumbh Mela Logistics",
      description: "Successfully executed hospitality and logistics operations for one of the world's largest religious gatherings, serving millions of pilgrims with precision and efficiency.",
    },
    {
      icon: Handshake,
      title: "Premier Partnerships",
      description: "Established long-term relationships with India's most respected corporate houses including Adani, Reliance, and Tata—testament to our reliability and quality.",
    },
    {
      icon: MapPin,
      title: "Pan-India Presence",
      description: "Expanded operations across multiple states, creating employment opportunities and contributing to regional economic development.",
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence",
      description: "Built reputation for consistent high-quality service delivery across all business verticals, with industry-leading client retention rates.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-achievements">
            Key Achievements & Milestones
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks to our capability, commitment, and consistent delivery of excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-elevate transition-all"
                data-testid={`card-achievement-${index}`}
              >
                <div className="flex flex-col h-full">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
