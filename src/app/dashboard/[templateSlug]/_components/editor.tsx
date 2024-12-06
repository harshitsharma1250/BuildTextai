"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

// Define the props interface
interface EditorProps {
  value: string;
}

export const Editor: React.FC<EditorProps> = ({ value }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm bg-white p-4">
      <div className="flex flex-wrap items-center space-x-2 mb-4">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition duration-200"
        >
          Bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition duration-200"
        >
          Italic
        </button>
        <button
          onClick={() => editor?.chain().focus().setParagraph().run()}
          className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition duration-200"
        >
          Paragraph
        </button>
        <button
          onClick={() => editor?.chain().focus().setHeading({ level: 1 }).run()}
          className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition duration-200"
        >
          H1
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-[300px] p-4 border border-gray-300 rounded-lg bg-gray-50"
      />
    </div>
  );
};
