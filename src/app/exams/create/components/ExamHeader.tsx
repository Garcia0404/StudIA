import Link from "next/link";
import { Zap } from "@/lib/icons";
import React from "react";

export const ExamHeader: React.FC = () => (
  <header className="bg-white border-b-4">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <div className="border-2 bg-main p-1 rounded-md">
                <Zap className="size-5" />
              </div>
              <span className="text-xl font-bold">Simulacros</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </header>
);
