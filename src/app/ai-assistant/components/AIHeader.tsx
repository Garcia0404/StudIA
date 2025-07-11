import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "@/lib/icons";
import React from "react";

export const AIHeader: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white border-b-4">
    <div className="container mx-auto px-4 py-5">
      <nav className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg transition-colors"
        >
          <Badge className="flex items-center gap-2">
            <Sparkles className="size-5" />
            Asistente IA
          </Badge>
        </Link>
      </nav>
    </div>
  </header>
);
