import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ajayImage from "@assets/generated_images/Leadership_headshot_Mr_Upadhyay_96a1969c.png";
import rajeevImage from "@assets/generated_images/Leadership_headshot_Mr_Rajeev_7992910b.png";

export default function Leadership() {
  const leaders = [
    {
      name: "Mr. Ajay Kumar Upadhyay",
      title: "Co-Founder & Director",
      image: ajayImage,
      bio: [
        "A visionary entrepreneur with extensive experience in building and scaling businesses across diverse sectors. Mr. Upadhyay brings strategic insight and operational excellence to the JSPL Group, driving growth through innovation and strong client relationships.",
        "His leadership philosophy centers on sustainable growth, ethical business practices, and creating opportunities that benefit all stakeholders—from employees to clients to communities we serve.",
      ],
    },
    {
      name: "Mr. Rajeev Upadhyay",
      title: "Co-Founder & Director",
      image: rajeevImage,
      bio: [
        "With deep industry expertise and a proven track record of operational excellence, Mr. Rajeev Upadhyay has been instrumental in establishing JSPL Group's reputation for reliability and quality across all business verticals.",
        "His hands-on approach to business development and commitment to service excellence has enabled the group to forge strong partnerships with India's leading corporate houses and successfully execute large-scale projects.",
      ],
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-leadership">
            Leadership That Drives Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the visionaries behind JSPL Group's success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all"
              data-testid={`card-leader-${index}`}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-40 w-40 mb-6 border-4 border-primary/20">
                  <AvatarImage src={leader.image} alt={leader.name} />
                  <AvatarFallback className="text-2xl">{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-primary font-medium">{leader.title}</p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {leader.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
