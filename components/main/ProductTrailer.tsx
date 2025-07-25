// components/main/ProductTrailer.tsx

export default function ProductTrailer({ url }: { url: string }) {
  if (!url) return null;
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${url}`}
        className="w-full h-full rounded-md"
        allowFullScreen
      />
    </div>
  );
}
