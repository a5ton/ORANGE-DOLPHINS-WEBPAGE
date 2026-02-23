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

const TYPE_ICONS: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement> & { className?: string }>
> = {
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
  const Icon = TYPE_ICONS[type] || BuildingStorefrontIcon;

  return (
    <div className="border border-gray-100 hover:border-orange-200 transition-colors overflow-hidden group">
      {/* Image / placeholder */}
      <div className="aspect-[4/3] bg-cream-50 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon className="h-10 w-10 text-gray-200 group-hover:text-orange-200 transition-colors duration-300" />
        )}
      </div>

      {/* Content */}
      <div className="p-5 border-t border-gray-100">
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-2">
          {typeLabel}
        </p>
        <h3 className="font-display font-bold text-gray-900 text-lg mb-1">
          {name}
        </h3>
        {location && (
          <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
            <MapPinIcon className="h-3 w-3 shrink-0" />
            {location}
          </p>
        )}
        <ReadMoreToggle
          short={
            <p className="text-gray-500 text-sm leading-relaxed">
              {shortDescription}
            </p>
          }
          long={
            <p className="text-gray-500 text-sm leading-relaxed">
              {fullDescription}
            </p>
          }
          readMoreLabel={t("readMore")}
          readLessLabel={t("readLess")}
        />
      </div>
    </div>
  );
}
