"use client";

import { useState } from "react";
import { NoteHeader } from "./components/NoteHeader";
import { EditorView } from "./components/EditorView";
import { NotePreview } from "./components/NotePreview";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface NoteData {
  title: string;
  content: string;
  category: string;
  tags: string[];
  isPublic: boolean;
}

export default function CreateNotePage() {
  const [noteData, setNoteData] = useState<NoteData>({
    title: "",
    content: "",
    category: "",
    tags: [],
    isPublic: false,
  });
  const [newTag, setNewTag] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleNoteDataChange = (data: Partial<NoteData>) => {
    setNoteData((prev) => ({ ...prev, ...data }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !noteData.tags.includes(newTag.trim())) {
      setNoteData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setNoteData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSave = () => {
    console.log("Nota guardada:", noteData);
    // Aquí guardaríamos la nota
  };

  const formatText = (format: string) => {
    // Simulamos el formato de texto
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);

      let formattedText = selectedText;
      switch (format) {
        case "bold":
          formattedText = `**${selectedText}**`;
          break;
        case "italic":
          formattedText = `*${selectedText}*`;
          break;
        case "h1":
          formattedText = `# ${selectedText}`;
          break;
        case "h2":
          formattedText = `## ${selectedText}`;
          break;
      }

      const newContent =
        textarea.value.substring(0, start) +
        formattedText +
        textarea.value.substring(end);
      handleNoteDataChange({ content: newContent });
    }
  };

  return (
    <div className=" bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] min-h-screen">
      <NoteHeader
        showPreview={showPreview}
        onTogglePreview={() => setShowPreview(!showPreview)}
        onSave={handleSave}
      />
      <div className="container mx-auto">
        <Breadcrumb className="px-4 pt-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/notes">Notas</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container mx-auto px-4 pt-4 pb-8">
        {!showPreview ? (
          <EditorView
            noteData={noteData}
            newTag={newTag}
            onNoteDataChange={handleNoteDataChange}
            onNewTagChange={setNewTag}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            onFormatText={formatText}
          />
        ) : (
          <NotePreview
            title={noteData.title}
            content={noteData.content}
            category={noteData.category}
            tags={noteData.tags}
          />
        )}
      </div>
    </div>
  );
}
