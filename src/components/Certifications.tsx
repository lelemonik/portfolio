import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Certificate Name",
      issuer: "Issuing Organization",
      date: "Month Year",
      description: "Brief description of what this certification covers",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      color: "bg-gradient-primary",
    },
    {
      title: "Another Certificate",
      issuer: "Another Organization",
      date: "Month Year",
      description: "Brief description of what this certification covers",
      skills: ["Skill 1", "Skill 2"],
      color: "bg-gradient-accent",
    },
    // Add more certifications as needed
  ];

  return (
    <div id="certifications" className="h-full">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">
          Professional certifications
        </p>
      </div>

      <div className="grid gap-6">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up border-border group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`h-2 ${cert.color} group-hover:h-3 transition-all duration-500`} />
            <CardContent className="pt-4">
              <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {cert.issuer} • {cert.date}
              </p>
              <p className="text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm py-2 px-3 hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
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
  );
};

export default Certifications;
