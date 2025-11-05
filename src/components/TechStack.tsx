import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design"],
      color: "bg-gradient-primary",
    },
    {
      category: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "bg-gradient-accent",
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "RESTful APIs"],
      color: "bg-gradient-primary",
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Creative Thinking", "Attention to Detail"],
      color: "bg-gradient-accent",
    },
  ];

  return (
    <section id="tech-stack" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Tech Stack
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up border-border group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 ${category.color} group-hover:h-3 transition-all duration-500`} />
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
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
      </div>
    </section>
  );
};

export default TechStack;
