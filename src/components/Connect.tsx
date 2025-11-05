import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink, Instagram } from "lucide-react";

const Connect = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "gaylemonique21@gmail.com",
      href: "mailto:gaylemonique21@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "gaylemonique_",
      href: "https://instagram.com/gaylemonique_",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/lelemonik",
      href: "https://github.com/lelemonik",
    },
  ];

  return (
    <section id="connect" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" /> 
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up border-border hover:border-primary/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-5 text-center">
                  <div className="mb-3 inline-flex p-3 bg-gradient-primary rounded-full group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:animate-glow">
                    <method.icon className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {method.label}
                  </h3>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="text-center p-6 sm:p-10 border-0 animate-fade-in-up bg-[hsl(30,25%,90%)] dark:bg-[hsl(30,20%,20%)]">
            <CardContent className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Let's work together!
              </h3>
              <Button
                size="lg"
                variant="default"
                className="mt-4 hover:scale-110 hover:shadow-lg transition-all duration-300 group bg-[hsl(30,35%,35%)] text-white hover:bg-[hsl(30,35%,30%)] dark:bg-[hsl(30,30%,40%)] dark:hover:bg-[hsl(30,30%,35%)]"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  Get In Touch
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Connect;
