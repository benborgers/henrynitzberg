import { DocumentElement } from "@keystatic/core";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default function Prose({ document }: { document: DocumentElement[] }) {
  return (
    <div className="prose max-w-none text-gray-400 prose-a:text-gray-400 prose-strong:text-gray-300">
      <DocumentRenderer document={document} />
    </div>
  );
}
