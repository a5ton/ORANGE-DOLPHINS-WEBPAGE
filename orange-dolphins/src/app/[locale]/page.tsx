import { HeroSection } from "@/components/home/HeroSection";
import { VisionStatement } from "@/components/home/VisionStatement";
import { MissionStatement } from "@/components/home/MissionStatement";
import { HowItWorksTeaser } from "@/components/home/HowItWorksTeaser";
import { ProductCategoriesPreview } from "@/components/home/ProductCategoriesPreview";
import { CtaSection } from "@/components/home/CtaSection";
import { ScrollSnapPage } from "@/components/ui/ScrollSnapPage";

export default function HomePage() {
  return (
    <ScrollSnapPage>
      <div data-snap><HeroSection /></div>
      <div data-snap><VisionStatement /></div>
      <div data-snap><MissionStatement /></div>
      <div data-snap><HowItWorksTeaser /></div>
      <div data-snap><ProductCategoriesPreview /></div>
      <div data-snap><CtaSection /></div>
    </ScrollSnapPage>
  );
}
