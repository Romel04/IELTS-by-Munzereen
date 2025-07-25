// components/ProductDescription.tsx
export default function ProductDescription({ html }: { html: string }) {
  return (
    <div
      className="prose prose-neutral dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
