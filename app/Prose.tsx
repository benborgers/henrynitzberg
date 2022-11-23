export default function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose max-w-none text-gray-400 prose-a:text-gray-400 prose-strong:text-gray-300"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
