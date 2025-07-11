import { ScrollAnimation } from "@/components/scroll-animation";
import { StepCard } from "./StepCard";

const steps = [
  {
    number: 1,
    title: "Crea tu contenido",
    description:
      "Sube tus apuntes, PDFs o crea tarjetas manualmente. Nuestra IA generará automáticamente material de estudio optimizado.",
    animation: "slideLeft" as const,
    delay: 200,
  },
  {
    number: 2,
    title: "Estudia inteligentemente",
    description:
      "Practica con tarjetas adaptativas, realiza simulacros personalizados y recibe explicaciones instantáneas de la IA.",
    animation: "slideUp" as const,
    delay: 400,
  },
  {
    number: 3,
    title: "Domina la materia",
    description:
      "Sigue tu progreso, identifica áreas de mejora y alcanza tus objetivos con nuestro sistema de gamificación.",
    animation: "slideRight" as const,
    delay: 600,
  },
];

export const LandingHowItWorks: React.FC = () => (
  <section
    id="how-it-works"
    className="py-20 transition-colors duration-300 border-t-2"
  >
    <div className="container mx-auto px-6">
      <ScrollAnimation animation="slideUp">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Así de simple es
            <span className="text-main">{" "}revolucionar tu estudio</span>
          </h2>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            animation={step.animation}
            delay={step.delay}
          />
        ))}
      </div>
    </div>
  </section>
);
