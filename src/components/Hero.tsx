import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-accent text-sm sm:text-base font-medium tracking-wider uppercase">
              Web & UI/UX Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Creative{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground">
              Building Digital Experiences
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science student passionate about creating beautiful, functional web experiences.
            Currently exploring the intersection of design and development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2"
            >
              Get in Touch
            </Button>
          </div>

          <div className="pt-12 animate-float">
            <button
              onClick={scrollToProjects}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
