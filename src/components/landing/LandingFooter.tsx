import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import React from "react";

const footerLinks = {
  producto: [
    { href: "#", label: "Características" },
    { href: "#", label: "Precios" },
    { href: "#", label: "API" },
  ],
  empresa: [
    { href: "#", label: "Acerca de" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Carreras" },
  ],
  soporte: [
    { href: "#", label: "Centro de Ayuda" },
    { href: "#", label: "Contacto" },
    { href: "#", label: "Estado" },
  ],
};

export const LandingFooter: React.FC = () => (
  <footer className="py-12 transition-colors duration-300 border-t-2 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Logo />
          <p>
            La plataforma de estudio más avanzada del mundo, potenciada por
            inteligencia artificial.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-semibold">Producto</span>
          <ul className="space-y-2">
            {footerLinks.producto.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold">Empresa</div>
          <ul className="space-y-2">
            {footerLinks.empresa.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold">Soporte</div>
          <ul className="space-y-2">
            {footerLinks.soporte.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t mt-12 pt-8 text-center">
        <p>&copy; 2025 StudyIA. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);
