import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/scroll-animation";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <ScrollAnimation animation="slideUp" delay={delay}>
      <Card className="group transition-all duration-300 hover:scale-105 h-full bg-white">
        <CardContent className="px-8 py-4">
          <div className="bg-main w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border-2">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="mb-4">{description}</p>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
};
