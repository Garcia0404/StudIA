import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface BasicInfoSectionProps {
  title: string;
  onTitleChange: (title: string) => void;
}

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  title,
  onTitleChange,
}) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle>Información básica</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">
          Título de la nota <span className="text-main">*</span>
        </Label>
        <Input
          id="title"
          placeholder="Ej: Conceptos clave de Matemáticas"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="text-lg h-12"
        />
      </div>
    </CardContent>
  </Card>
);
