import type { OutputData } from "@editorjs/editorjs/types";

export default function SuperadminText({ text }: { text: OutputData }) {
  return (
    <div className="prose max-w-none text-gray-400 prose-a:text-gray-400">
      {text.blocks.map((block) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={block.id}
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
