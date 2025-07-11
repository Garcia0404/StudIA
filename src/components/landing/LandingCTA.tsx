import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/lib/icons";
import React from "react";

export const LandingCTA: React.FC = () => (
  <section className="py-20 border-t-2 bg-white">
    <div className="container mx-auto px-6 text-center">
      <div className="space-y-8">
        <h2 className="text-3xl lg:text-5xl font-bold">
          ¿Listo para transformar tu forma de estudiar?
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          Únete a miles de estudiantes que ya están aprendiendo más rápido y
          mejor con StudyAI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button size="lg">
              Comenzar Gratis Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="neutral">
            Hablar con Ventas
          </Button>
        </div>
      </div>
    </div>
  </section>
);
