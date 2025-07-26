// app/page.tsx
import { fetchProduct } from "@/lib/fetchProducts";
import ProductTitle from "@/components/main/ProductTitile";
import ProductDescription from "@/components/main/ProductDescription";
import Instructors from "@/components/main/Instructors";
import Features from "@/components/main/Features";
import Pointers from "@/components/main/Pointers";
import AboutSection from "@/components/main/AboutUs";
import ExclusiveFeatures from "@/components/main/ExclusiveFeatures";
import RightCard from "@/components/main/RightSection";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetchProduct("en");

  if (!product?.data) {
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }

  const seo = product.data.seo;
  const defaultMeta = seo.defaultMeta || [];

  const ogTitle = defaultMeta.find((meta) => meta.value === "og:title")?.content || product.data.title;
  const ogDescription = seo.description || product.data.description || "";
  const ogImage = defaultMeta.find((meta) => meta.value === "og:image")?.content || "";

  return {
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function Home() {
  const product = await fetchProduct("en");

  const instructors = product.data.sections?.find(
    (sec: { type: string }) => sec.type === "instructors"
  );
  const features = product.data.sections?.find(
    (sec: { type: string }) => sec.type === "features"
  );
  const pointers = product.data.sections?.find(
    (sec: { type: string }) => sec.type === "pointers"
  );
  const about = product.data.sections?.find(
    (sec: { type: string }) => sec.type === "about"
  );
  const media = product.data.media;
  const featureSection = product.data.sections?.find(
    (sec: { type: string }) => sec.type === "feature_explanations"
  );

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="flex flex-col-reverse md:flex-row gap-12">
        <div className="md:w-2/3 space-y-12">
          <div className="space-y-4 hidden md:block">
            <ProductTitle title={product.data.title} />

            <ProductDescription html={product.data.description} />
          </div>

          <Instructors section={instructors} />

          <Features section={features} />

          <Pointers section={pointers} />

          {featureSection && <ExclusiveFeatures section={featureSection} />}

          <AboutSection section={about} />
        </div>

        <div className="md:w-1/3 space-y-8">
          <RightCard
            title={product.data.title}
            description={product.data.description}
            media={media}
            cta={product.data.cta_text}
            items={product.data.checklist}
          />
        </div>
      </div>
    </main>
  );
}

export const revalidate = 60;
