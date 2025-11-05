import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Certificate Name",
      issuer: "Issuing Organization",
      date: "Month Year",
      description: "Brief description of what this certification covers",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      link: "https://example.com/certificate",
    },
    {
      title: "Another Certificate",
      issuer: "Another Organization",
      date: "Month Year",
      description: "Brief description of what this certification covers",
      skills: ["Skill 1", "Skill 2"],
      link: "https://example.com/certificate",
    },
    // Add more certifications as needed
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up border-border hover:border-primary/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
                        aria-label="View certificate"
                      >
                        <ExternalLink className="h-5 w-5 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
