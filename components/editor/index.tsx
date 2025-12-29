"use client";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  toolbarPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  UndoRedo,
  BoldItalicUnderlineToggles,
  Separator,
  ListsToggle,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  tablePlugin,
} from "@mdxeditor/editor";
import { basicDark } from "cm6-theme-basic-dark";
import { useTheme } from "next-themes";
import type { ForwardedRef } from "react";
import { useCallback, useRef, useMemo, useEffect } from "react";
import "./dark-editor.css";
import "@mdxeditor/editor/style.css";

interface Props {
  value: string;
  fieldChange: (value: string) => void;
  editorRef: ForwardedRef<MDXEditorMethods> | null;
}

const Editor = ({ value, editorRef, fieldChange }: Props) => {
  const { resolvedTheme } = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Дебаунс для onChange - обновляем форму только через 300мс после остановки печати
  const handleChange = useCallback(
    (newValue: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fieldChange(newValue);
      }, 300);
    },
    [fieldChange]
  );

  // Очистка таймера при размонтировании
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Мемоизация плагинов - создаем их только один раз
  const plugins = useMemo(() => {
    const theme = resolvedTheme === "dark" ? [basicDark] : [];

    return [
      headingsPlugin(),
      listsPlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      quotePlugin(),
      markdownShortcutPlugin(),
      tablePlugin(),
      imagePlugin(),
      codeBlockPlugin({ defaultCodeBlockLanguage: "" }),
      codeMirrorPlugin({
        codeBlockLanguages: {
          css: "css",
          txt: "txt",
          sql: "sql",
          html: "html",
          sass: "sass",
          scss: "scss",
          bash: "bash",
          json: "json",
          js: "javascript",
          ts: "typescript",
          "": "unspecified",
          tsx: "TypeScript (React)",
          jsx: "JavaScript (React)",
        },
        autoLoadLanguageSupport: true,
        codeMirrorExtensions: theme,
      }),
      diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "" }),
      toolbarPlugin({
        toolbarContents: () => (
          <ConditionalContents
            options={[
              {
                when: (editor) => editor?.editorType === "codeblock",
                contents: () => <ChangeCodeMirrorLanguage />,
              },
              {
                fallback: () => (
                  <>
                    <UndoRedo />
                    <Separator />
                    <BoldItalicUnderlineToggles />
                    <Separator />
                    <ListsToggle />
                    <Separator />
                    <CreateLink />
                    <InsertImage />
                    <Separator />
                    <InsertTable />
                    <InsertThematicBreak />
                    <InsertCodeBlock />
                  </>
                ),
              },
            ]}
          />
        ),
      }),
    ];
  }, [resolvedTheme]);

  return (
    <MDXEditor
      key={resolvedTheme}
      markdown={value}
      ref={editorRef}
      onChange={handleChange}
      plugins={plugins}
      className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border rounded-2 grid"
    />
  );
};

export default Editor;
