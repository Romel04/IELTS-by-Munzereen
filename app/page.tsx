// app/page.tsx
import { fetchProduct } from "@/lib/fetchProducts";
import ProductTitle from "@/components/main/ProductTitile";
import ProductDescription from "@/components/main/ProductDescription";
import Instructors from "@/components/main/Instructors";
import Features from "@/components/main/Features";
import Pointers from "@/components/main/Pointers";
import Checklist from "@/components/main/Checklist";
import AboutSection from "@/components/main/AboutUs";
import ProductTrailer from "@/components/main/ProductTrailer";
import CTASection from "@/components/main/CTASection";
import ExclusiveFeatures from "@/components/main/ExclusiveFeatures";

export default async function Home() {
  const product = await fetchProduct("en");

  const instructors = product.data.sections?.find((sec: { type: string }) => sec.type === "instructors");
  const features = product.data.sections?.find((sec: { type: string }) => sec.type === "features");
  const pointers = product.data.sections?.find((sec: { type: string }) => sec.type === "pointers");
  const about = product.data.sections?.find((sec: { type: string }) => sec.type === "about");
  const trailer = product.data.media.find((m) => m.resource_type === "video");
  const featureSection = product.data.sections?.find((sec: { type: string }) => sec.type === "feature_explanations");

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Page Grid */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Left Column */}
        <div className="md:w-2/3 space-y-12">
          <ProductTitle title={product.data.title} />

          <ProductDescription html={product.data.description} />

          <Instructors section={instructors} />

          <Features section={features} />

          <Pointers section={pointers} />

          {/* <Checklist items={product.data.checklist} /> */}

          {featureSection && <ExclusiveFeatures section={featureSection} />}


          <AboutSection section={about} />
        </div>

        {/* Right Column */}
        <div className="md:w-1/3 space-y-8">
          
        <ProductTrailer url={trailer?.resource_value || ""} />

          <CTASection cta={product.data.cta_text} />

          <Checklist items={product.data.checklist} />
        </div>
      </div>
    </main>
  );
}
