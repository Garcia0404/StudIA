import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export const LandingHeader: React.FC = () => (
  <header className="bg-white slide-down sticky top-0 z-50 border-b-4 transition-all duration-300">
    <div className="container mx-auto px-6 py-4">
      <nav className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-3 max-sm:hidden">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg text-sm border-2"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm rounded-lg bg-main border-2"
          >
            Comenzar Gratis
          </Link>
        </div>
      </nav>
    </div>
  </header>
);
