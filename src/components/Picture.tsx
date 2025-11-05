import { Separator } from "@/components/ui/separator";

const Picture = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Two Column Layout: Left (Picture + About) | Right (Education) */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Picture and About */}
            <div className="space-y-4 animate-fade-in">
              {/* Picture and Name */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                  <img
                    src="/images/profile.jpg"
                    alt="Gayle Monique R. Florencio"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center lg:text-left space-y-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors duration-300">
                    Gayle
                  </h1>
                  <h2 className="text-lg sm:text-xl text-muted-foreground">
                    Web & UI/UX Developer
                  </h2>
                </div>
              </div>

              {/* Separator */}
              <Separator className="my-3" />

              {/* About Section */}
              <div className="space-y-3" id="about">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 text-center lg:text-left">
                    About Me
                  </h2>
                  <div className="w-16 h-1 bg-gradient-primary mb-2 mx-auto lg:mx-0" />
                </div>
                
                <div className="space-y-2 text-center lg:text-left">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    22, QC, maganda
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    -
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Education */}
            <div className="space-y-3 animate-fade-in-up lg:pt-0" id="education" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 text-center lg:text-left">
                  Education
                </h2>
                <div className="w-16 h-1 bg-gradient-primary mb-2 mx-auto lg:mx-0" />
              </div>
              
              {/* Compact Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-border" />
                
                {/* Timeline items */}
                <div className="space-y-3">
                  <div className="relative pl-6 group hover:translate-x-1 transition-transform duration-300">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-primary border-primary group-hover:scale-125 transition-all duration-300" />
                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Our Lady of Perpetual Succor College
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2023 - present
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-6 group hover:translate-x-1 transition-transform duration-300">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-background border-border group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all duration-300" />
                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Our Lady of Perpetual Succor College
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Senior High School | Arts and Design - Media and Visual Arts
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2021 - 2023
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative pl-6 group hover:translate-x-1 transition-transform duration-300">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-background border-border group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all duration-300" />
                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Jose P. Laurel Sr. High School
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        High School
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2017 - 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Picture;
