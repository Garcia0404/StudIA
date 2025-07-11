import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Save, Eye } from "@/lib/icons";
import React from "react";

interface NoteHeaderProps {
  showPreview: boolean;
  onTogglePreview: () => void;
  onSave: () => void;
}

export const NoteHeader: React.FC<NoteHeaderProps> = ({
  showPreview,
  onTogglePreview,
  onSave,
}) => (
  <header className="border-b-4 bg-white">
    <div className="container mx-auto px-4 py-3.5">
      <div className="flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="p-1 border-2 rounded-lg bg-main">
              <FileText className="size-5" />
            </div>
            <span className="text-xl font-bold">
              Nueva <span className="max-sm:hidden">Nota</span>
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-2">
          <Button variant="neutral" size="sm" onClick={onTogglePreview}>
            <Eye className="h-4 w-4" />
            <span className="max-md:hidden">
              {showPreview ? "Editar" : "Vista previa"}
            </span>
          </Button>
          <Button size="sm" onClick={onSave}>
            <Save className="h-4 w-4" />
            <span className="max-sm:hidden">Guardar nota</span>
          </Button>
        </div>
      </div>
    </div>
  </header>
);
