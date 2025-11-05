import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <div id="certifications" className="h-full flex flex-col">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">
          Professional certifications
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Card className="max-w-md w-full border-dashed border-2 border-muted-foreground/30 bg-muted/20 animate-fade-in">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-primary rounded-full">
                <Award className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              About to launch!
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently working on obtaining professional certifications to enhance my skills and expertise.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certifications;
