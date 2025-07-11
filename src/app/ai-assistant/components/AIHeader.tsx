import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Sparkles } from "@/lib/icons";
import React from "react";

export const AIHeader: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white border-b-4">
    <div className="container mx-auto px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex items-center p-2 gap-2 rounded-lg transition-colors"
        >
          <ChevronLeft className="size-5" />
          <div className="flex items-center space-x-2">
            <Badge className="flex items-center gap-2">
              <Sparkles className="size-5" />
              Asistente IA
            </Badge>
          </div>
        </Link>
      </nav>
    </div>
  </header>
);
