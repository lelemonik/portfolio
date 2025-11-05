import Picture from "@/components/Picture";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Picture />
      
      {/* Tech Stack and Certifications side by side */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 relative">
            <TechStack />
            <Separator orientation="vertical" className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full" />
            <Certifications />
          </div>
        </div>
      </section>
      
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
