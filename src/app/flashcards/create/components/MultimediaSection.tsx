import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageIcon, Mic } from "@/lib/icons";
import React from "react";

export const MultimediaSection: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Contenido multimedia</CardTitle>
      <CardDescription>
        Añade imágenes o audio para enriquecer tu tarjeta
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-20 flex-col">
          <ImageIcon className="h-6 w-6 mb-2" />
          Añadir imagen
        </Button>
        <Button className="h-20 flex-col">
          <Mic className="h-6 w-6 mb-2" />
          Grabar audio
        </Button>
      </div>
    </CardContent>
  </Card>
);
