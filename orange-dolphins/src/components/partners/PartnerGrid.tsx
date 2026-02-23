import { PARTNERS_DATA } from "@/lib/constants";
import { PartnerCard } from "./PartnerCard";
import { FadeReveal } from "@/components/ui/FadeReveal";

export function PartnerGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeReveal className="mb-14">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
            Our Partners
          </p>
          <h2
            className="font-display font-black italic text-gray-900 leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Local Suppliers
          </h2>
        </FadeReveal>
        <FadeReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS_DATA.map((partner) => (
              <PartnerCard key={partner.id} {...partner} />
            ))}
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
