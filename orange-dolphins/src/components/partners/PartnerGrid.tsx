import { PARTNERS_DATA } from "@/lib/constants";
import { PartnerCard } from "./PartnerCard";

export function PartnerGrid() {
  return (
    <section className="py-16 md:py-24 bg-sand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS_DATA.map((partner) => (
            <PartnerCard key={partner.id} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
