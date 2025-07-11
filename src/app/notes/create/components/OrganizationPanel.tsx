import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";
import { Plus } from "@/lib/icons";
import React from "react";

interface OrganizationPanelProps {
  category: string;
  tags: string[];
  newTag: string;
  onCategoryChange: (category: string) => void;
  onNewTagChange: (tag: string) => void;
  onAddTag: () => void;
  onRemoveTag: (tag: string) => void;
}

const categories = [
  { value: "matematicas", label: "Matemáticas" },
  { value: "historia", label: "Historia" },
  { value: "ciencias", label: "Ciencias" },
  { value: "idiomas", label: "Idiomas" },
  { value: "geografia", label: "Geografía" },
  { value: "literatura", label: "Literatura" },
  { value: "personal", label: "Personal" },
  { value: "otros", label: "Otros" },
];

export const OrganizationPanel: React.FC<OrganizationPanelProps> = ({
  category,
  tags,
  newTag,
  onCategoryChange,
  onNewTagChange,
  onAddTag,
  onRemoveTag,
}) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle>Organización</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="category">Categoría</Label>
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="whitespace-nowrap">
            Seleccionar categoría
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Etiquetas</Label>
        <div className="flex gap-2">
          <Input
            placeholder="Nueva etiqueta"
            value={newTag}
            onChange={(e) => onNewTagChange(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onAddTag()}
          />
          <Button onClick={onAddTag} size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="neutral"
              className="cursor-pointer"
              onClick={() => onRemoveTag(tag)}
            >
              {tag} ×
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);
