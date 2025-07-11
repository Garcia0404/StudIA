import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Save, Eye } from "@/lib/icons";
import { ButtonSonner } from "@/components/ui/sonner";

interface CreateCardHeaderProps {
  showPreview: boolean;
  onTogglePreview: () => void;
  onSave: () => boolean;
}

export const CreateCardHeader: React.FC<CreateCardHeaderProps> = ({
  showPreview,
  onTogglePreview,
  onSave,
}) => (
  <header className="bg-white border-b-4">
    <div className="container mx-auto px-4 py-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg"
          >
            <div className="border-2 bg-main p-1 rounded-md">
              <Brain className="size-5" />
            </div>
            <span className="text-xl font-bold">
              Crear <span className="max-sm:hidden">Tarjeta</span>
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="neutral" size="sm" onClick={onTogglePreview}>
            <Eye className="h-4 w-4" />
            <span className="max-md:hidden">
              {showPreview ? "Editar" : "Vista previa"}
            </span>
          </Button>
          <ButtonSonner callback={onSave}>
            <Save className="h-4 w-4" />
            <span className="max-sm:hidden">Guardar tarjeta</span>
          </ButtonSonner>
        </div>
      </div>
    </div>
  </header>
);
