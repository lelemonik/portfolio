import { Code2, Palette, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, performant web applications with modern technologies",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive and beautiful user interfaces with attention to detail",
    },
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description: "Combining creativity with technical skills to solve complex problems",
    },
  ];

  return (
    <section id="about-extra" className="hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div className="space-y-4 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                -
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                -
              </p>
            </div>

            <div className="grid gap-4 animate-fade-in">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
