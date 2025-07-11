import Link from "next/link";
import { Zap, ChevronLeft } from "@/lib/icons";
import React from "react";

export const ExamHeader: React.FC = () => (
  <header className="bg-white border-b-4">
    <div className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 p-2 rounded-lg"
          >
            <ChevronLeft className="size-5" />
            <div className="flex items-center space-x-2">
              <div className="border-2 bg-main p-1 rounded-md">
                <Zap className="size-5" />
              </div>
              <span className="text-xl font-bold">Simulacro</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </header>
);
