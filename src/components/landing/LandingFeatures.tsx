import { BookOpen, Brain, Zap, BarChart3, Target, Sparkles } from "@/lib/icons";
import { ScrollAnimation } from "@/components/scroll-animation";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Tarjetas Inteligentes",
    description:
      "Crea tarjetas de estudio con IA que se adaptan a tu progreso. Incluye imágenes, audio y tips personalizados.",
    delay: 100,
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Asistente IA",
    description:
      "Obtén explicaciones instantáneas, genera contenido automáticamente y recibe sugerencias personalizadas.",
    delay: 200,
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Simulacros Adaptativos",
    description:
      "Exámenes que se ajustan a tu nivel con cronómetro, puntuación automática y análisis detallado.",
    delay: 300,
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Análisis Avanzado",
    description:
      "Estadísticas detalladas de tu progreso, puntos débiles y recomendaciones para mejorar.",
    delay: 400,
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Objetivos Gamificados",
    description:
      "Establece metas, sigue tu progreso y mantente motivado con un sistema de logros y recompensas.",
    delay: 500,
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Generación Automática",
    description:
      "Convierte PDFs y textos en tarjetas, exámenes y resúmenes automáticamente con IA avanzada.",
    delay: 600,
  },
];

export const LandingFeatures: React.FC = () => (
  <section
    id="features"
    className="py-40 transition-colors duration-300 md:px-28 border-t-2 bg-background"
  >
    <div className="container mx-auto px-6">
      <ScrollAnimation animation="slideUp">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Todo lo que necesitas para
            <span className="text-main"> dominar cualquier materia</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Una suite completa de herramientas de estudio diseñadas para
            adaptarse a tu estilo de aprendizaje
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </div>
  </section>
);
