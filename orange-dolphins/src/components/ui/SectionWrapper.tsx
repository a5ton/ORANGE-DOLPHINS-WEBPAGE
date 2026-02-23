import { cn } from "@/lib/utils";
import { FadeReveal } from "./FadeReveal";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <FadeReveal>
        <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", innerClassName)}>
          {children}
        </div>
      </FadeReveal>
    </section>
  );
}
