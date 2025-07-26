// components/ProductDescription.tsx
export default function ProductDescription({ html }: { html: string }) {
  return (
    <div
      className="prose prose-neutral dark:prose-invert text-[#8B8B8F] leading-[24px]"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
