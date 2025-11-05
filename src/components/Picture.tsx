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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Picture and Name */}
            <div className="flex flex-col items-center md:items-start space-y-6 animate-fade-in">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                <img
                  src="/images/profile.jpg"
                  alt="Gayle Monique R. Florencio"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center md:text-left space-y-3 animate-slide-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground hover:text-primary transition-colors duration-300">
                  Gayle
                </h1>
                <h2 className="text-2xl sm:text-3xl text-muted-foreground">
                  Web & UI/UX Developer
                </h2>
              </div>
            </div>

            {/* Right Side - About Content */}
            <div className="space-y-6 animate-fade-in-up" id="about" style={{ animationDelay: '0.3s' }}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-primary mb-6" />
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                 22, QC, maganda
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  -
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Picture;
