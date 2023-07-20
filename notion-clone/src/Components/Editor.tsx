import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from 'highlight.js/lib/languages/javascript'
import { lowlight } from "lowlight";

import 'highlight.js/styles/a11y-dark.css'

lowlight.registerLanguage("js", js);

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <EditorContent className="max-w-[700px] prose-emerald" editor={editor} />
  );
}
