import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface NotePreviewProps {
  title: string;
  content: string;
  category: string;
  tags: string[];
}

export const NotePreview: React.FC<NotePreviewProps> = ({
  title,
  content,
  category,
  tags,
}) => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">Vista previa de la nota</h1>
      <p>Así se verá tu nota una vez guardada</p>
    </div>

    <Card className="bg-white">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl mb-2">
              {title || "Título de la nota"}
            </CardTitle>
            <div className="flex items-center space-x-4 text-sm">
              <span>Creado hoy</span>
              {category && <Badge className="capitalize">{category}</Badge>}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="prose max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed">
            {content || "El contenido de tu nota aparecerá aquí..."}
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);
