import Navbar from "@/components/Navbar";
import Picture from "@/components/Picture";
import About from "@/components/About";
import Experience from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Picture />
      <About />
      <div className="hidden">
        <Experience />
      </div>
      
      {/* Tech Stack and Certifications side by side */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <TechStack />
            <Certifications />
          </div>
        </div>
      </section>
      
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
};

export default Index;
