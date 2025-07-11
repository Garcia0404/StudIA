import React from "react";
import { BasicInfoSection } from "./BasicInfoSection";
import { TextEditor } from "./TextEditor";
import { OrganizationPanel } from "./OrganizationPanel";
import { WritingTips } from "./WritingTips";

interface NoteData {
  title: string;
  content: string;
  category: string;
  tags: string[];
  isPublic: boolean;
}

interface EditorViewProps {
  noteData: NoteData;
  newTag: string;
  onNoteDataChange: (data: Partial<NoteData>) => void;
  onNewTagChange: (tag: string) => void;
  onAddTag: () => void;
  onRemoveTag: (tag: string) => void;
  onFormatText: (format: string) => void;
}

export const EditorView: React.FC<EditorViewProps> = ({
  noteData,
  newTag,
  onNoteDataChange,
  onNewTagChange,
  onAddTag,
  onRemoveTag,
  onFormatText,
}) => (
  <div className="max-w-5xl mx-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">
        Crear nueva nota
      </h1>
      <p>
        Organiza tus ideas y conocimientos con nuestro editor
        enriquecido
      </p>
    </div>

    <div className="grid lg:grid-cols-4 gap-8">
      {/* Editor principal */}
      <div className="lg:col-span-3 space-y-6">
        <BasicInfoSection
          title={noteData.title}
          onTitleChange={(title) => onNoteDataChange({ title })}
        />
        <TextEditor
          content={noteData.content}
          onContentChange={(content) => onNoteDataChange({ content })}
          onFormatText={onFormatText}
        />
      </div>

      {/* Panel lateral */}
      <div className="space-y-6">
        <OrganizationPanel
          category={noteData.category}
          tags={noteData.tags}
          newTag={newTag}
          onCategoryChange={(category) => onNoteDataChange({ category })}
          onNewTagChange={onNewTagChange}
          onAddTag={onAddTag}
          onRemoveTag={onRemoveTag}
        />
        <WritingTips />
      </div>
    </div>
  </div>
); 