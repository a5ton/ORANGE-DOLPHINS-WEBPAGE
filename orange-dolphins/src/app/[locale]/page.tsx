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
      <div data-snap="true"><HeroSection /></div>
      <div data-snap="true"><VisionStatement /></div>
      <div data-snap="true"><MissionStatement /></div>
      <div data-snap="true"><HowItWorksTeaser /></div>
      <div data-snap="true"><ProductCategoriesPreview /></div>
      <div data-snap="true"><CtaSection /></div>
    </ScrollSnapPage>
  );
}
