"use client";

import { useTranslations } from "next-intl";
import { ReadMoreToggle } from "@/components/ui/ReadMoreToggle";
import {
  LeafIcon,
  ScissorsIcon,
  CakeIcon,
  FishIcon,
  SailboatIcon,
  ShoppingCartIcon,
  GiftIcon,
  CubeIcon,
  BeakerIcon,
  NewspaperIcon,
  BuildingStorefrontIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { ComponentType, SVGProps } from "react";

const TYPE_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement> & { className?: string }>> = {
  "fruits-veg": LeafIcon,
  butcher: ScissorsIcon,
  bakery: CakeIcon,
  fishmonger: FishIcon,
  poultry: SailboatIcon,
  supermarket: ShoppingCartIcon,
  deli: GiftIcon,
  "ice-maker": CubeIcon,
  winery: BeakerIcon,
  kiosk: NewspaperIcon,
};

interface PartnerCardProps {
  id: string;
  name: string;
  type: string;
  typeLabel: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string | null;
  location?: string;
}

export function PartnerCard({
  name,
  type,
  typeLabel,
  shortDescription,
  fullDescription,
  imageUrl,
  location,
}: PartnerCardProps) {
  const t = useTranslations("partners");

  return (
    <div className="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Image */}
      <div className="aspect-[4/3] bg-gradient-to-br from-ocean-50 to-sand-100 flex items-center justify-center relative">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            {(() => {
              const Icon = TYPE_ICONS[type] || BuildingStorefrontIcon;
              return <Icon className="h-16 w-16 text-ocean-400 group-hover:scale-110 transition-transform duration-200" />;
            })()}
          </div>
        )}
        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 text-white text-xs font-semibold px-3 py-1 shadow-sm">
            {(() => {
              const Icon = TYPE_ICONS[type] || BuildingStorefrontIcon;
              return <Icon className="h-3.5 w-3.5" />;
            })()} {typeLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-ocean-900 text-lg mb-1">
          {name}
        </h3>
        {location && (
          <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
            <MapPinIcon className="h-3.5 w-3.5 shrink-0" /> {location}
          </p>
        )}
        <ReadMoreToggle
          short={<p className="text-gray-600 text-sm leading-relaxed">{shortDescription}</p>}
          long={<p className="text-gray-600 text-sm leading-relaxed">{fullDescription}</p>}
          readMoreLabel={t("readMore")}
          readLessLabel={t("readLess")}
        />
      </div>
    </div>
  );
}
