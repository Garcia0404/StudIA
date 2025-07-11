import Link from "next/link";
import { ArrowRight, Play, Users, Trophy, Sparkles } from "@/lib/icons";
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder";

export const LandingHero: React.FC = () => (
  <section className="relative overflow-hidden pt-10 pb-20 lg:pb-60 lg:pt-44 md:px-28">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4 fade-blur-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-main text-sm font-medium border-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Potenciado por IA
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Aprende más rápido con
              <span className="text-main"> IA inteligente</span>
            </h1>
            <p className="text-xl leading-relaxed">
              La plataforma de estudio definitiva que combina tarjetas
              inteligentes, simulacros adaptativos y asistencia de IA para
              maximizar tu aprendizaje.
            </p>
          </div>

          <div className="fade-in delay-500 flex flex-col sm:flex-row gap-4">
            <Link
              className="px-4 py-2 w-max rounded-lg flex items-center cursor-pointer border-2 bg-main group transition-transform"
              href="/register"
            >
              Comenzar Gratis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="flex px-4 w-max py-2 items-center rounded-lg text-sm border-2 group cursor-pointer bg-white"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Demo
            </Link>
          </div>

          <div className="slide flex items-center gap-8 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 stroke-main" />
              +10,000 estudiantes
            </div>
            <div className="flex items-center">
              <Trophy className="w-4 h-4 mr-2 stroke-main" />
              95% de éxito
            </div>
          </div>
        </div>

        <div className="zoom relative group">
          <div className="relative z-10">
            <AnimatedPlaceholder />
          </div>
          <div className="absolute inset-0 group-hover:scale-130 transition-transform duration-300 bg-main/20 rounded-2xl blur-3xl transform scale-110"></div>
        </div>
      </div>
    </div>
  </section>
);
