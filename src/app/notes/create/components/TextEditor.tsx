import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  ImageIcon,
  LinkIcon,
} from "@/lib/icons";
import React from "react";

interface TextEditorProps {
  content: string;
  onContentChange: (content: string) => void;
  onFormatText: (format: string) => void;
}

export const TextEditor: React.FC<TextEditorProps> = ({
  content,
  onContentChange,
  onFormatText,
}) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle>Contenido</CardTitle>
      <CardDescription>
        Usa la barra de herramientas para dar formato a tu texto
      </CardDescription>
    </CardHeader>
    <CardContent>
      {/* Barra de herramientas */}
      <div className="rounded-t-lg p-3 bg-background border-2">
        <div className="flex items-center space-x-2 flex-wrap gap-2">
          <Button
            variant="noShadow"
            size="sm"
            onClick={() => onFormatText("bold")}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="noShadow"
            size="sm"
            onClick={() => onFormatText("italic")}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-slate-300"></div>
          <Button
            variant="noShadow"
            size="sm"
            onClick={() => onFormatText("h1")}
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            variant="noShadow"
            size="sm"
            onClick={() => onFormatText("h2")}
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          <div className="w-px h-6"></div>
          <Button variant="noShadow" size="sm">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="noShadow" size="sm">
            <ListOrdered className="h-4 w-4" />
          </Button>
          <div className="w-px h-6"></div>
          <Button variant="noShadow" size="sm">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button variant="noShadow" size="sm">
            <LinkIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Editor de texto */}
      <Textarea
        id="content"
        placeholder="Comienza a escribir tu nota aquí...

Puedes usar:
- **texto en negrita**
- *texto en cursiva*
- # Títulos grandes
- ## Títulos medianos
- Listas con viñetas
- Y mucho más..."
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="min-h-64 sm:min-h-[400px] rounded-t-none border-t-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </CardContent>
  </Card>
);
