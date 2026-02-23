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
      <VisionStatement />
      <MissionStatement />
      <HowItWorksTeaser />
      <ProductCategoriesPreview />
      <CtaSection />
    </>
  );
}
