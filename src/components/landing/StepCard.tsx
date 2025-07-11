import { ScrollAnimation } from "@/components/scroll-animation";
import React from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  animation: "slideLeft" | "slideUp" | "slideRight";
  delay: number;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  animation,
  delay,
}) => (
  <ScrollAnimation animation={animation} delay={delay}>
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-main rounded-full flex items-center justify-center mx-auto shadow-lg border-2">
        <span className="text-2xl font-bold">{number}</span>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  </ScrollAnimation>
); 