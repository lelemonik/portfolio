import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Your University Name",
      period: "2022 - 2026 (Expected)",
      description: "Junior year • GPA: 3.X/4.0",
      highlights: ["Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems"],
    },
  ];

  const experience = [
    {
      title: "Web Development Intern",
      company: "Company Name",
      period: "Summer 2024",
      description: "Add your internship or work experience here",
      achievements: [
        "Describe your key responsibilities and achievements",
        "Quantify your impact when possible",
        "Highlight technologies used",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="resume" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground mb-8">
              My educational background and professional experience
            </p>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Education */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-foreground">{edu.degree}</CardTitle>
                    <CardDescription className="text-base">
                      {edu.institution} • {edu.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{edu.description}</p>
                    {edu.highlights.map((highlight, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">• {highlight}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-accent rounded-lg">
                <Briefcase className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-base">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
