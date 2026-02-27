import { HeroSection } from "@/components/home/HeroSection";
import { VisionStatement } from "@/components/home/VisionStatement";
import { MissionStatement } from "@/components/home/MissionStatement";
import { HowItWorksTeaser } from "@/components/home/HowItWorksTeaser";
import { ProductCategoriesPreview } from "@/components/home/ProductCategoriesPreview";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-3 px-3 md:px-4 pb-4 pt-3">
        <VisionStatement />
        <MissionStatement />
        <HowItWorksTeaser />
        <ProductCategoriesPreview />
        <CtaSection />
      </div>
    </>
  );
}
