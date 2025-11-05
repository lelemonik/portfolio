import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  // Template project structure - easy to replace with real projects
  const projects = [
    {
      title: "Hearts In Motion",
      description: "A school finals project showcasing love and ethics.",
      image: "/images/hearts-in-motion.png",
      tags: ["React", "TypeScript", "Tailwind"],
      viewUrl: "https://heartinmotion.vercel.app/",
    },
    {
      title: "By Chi | Affiliator's Showcase",
      description: "A personal project showcasing a curated selection of products.",
      image: "/images/bychi.png",
      tags: ["Next.js", "UI/UX", "Design"],
      viewUrl: "http://bychi.vercel.app",
    },
    {
      title: "Zentry",
      description: "",
      image: "/images/zentry.png",
      tags: ["JavaScript", "API", "CSS"],
      viewUrl: "https://myzentry.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work showcasing my skills in web development and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up border-border hover:border-primary/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.viewUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        view
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors duration-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
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

export default Projects;
