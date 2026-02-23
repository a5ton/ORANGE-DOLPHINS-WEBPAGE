export const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/orangedolphins",
  facebook: "https://www.facebook.com/orangedolphins",
  linkedin: "https://www.linkedin.com/company/orangedolphins",
};

export const PRODUCT_CATEGORIES = [
  {
    group: "Fresh & Local",
    color: "bg-green-50 border-green-200",
    items: [
      "Fresh Fruit & Vegetables",
      "Fresh Meat & Fish",
      "Meze & Snacks",
      "Bakery",
      "Best of Local",
    ],
  },
  {
    group: "Daily Essentials",
    color: "bg-blue-50 border-blue-200",
    items: [
      "Breakfast & Spreads",
      "Dairy, Cheese & Alternatives",
      "Canned & Preserved Food",
      "Condiments, Oils & Sauces",
      "Frozen Foods",
    ],
  },
  {
    group: "Household & Hygiene",
    color: "bg-purple-50 border-purple-200",
    items: ["Hygiene & Beauty", "Household & Cleaning"],
  },
  {
    group: "Beverages",
    color: "bg-red-50 border-red-200",
    items: ["Wine & Beer", "Spirits", "Soft Drinks", "Water"],
  },
  {
    group: "Ice",
    color: "bg-cyan-50 border-cyan-200",
    items: ["Ice Cubes", "Ice Block"],
  },
];

export const PARTNERS_DATA = [
  {
    id: "fruits-veg",
    name: "Island Fresh Market",
    type: "fruits-veg" as const,
    typeLabel: "Fruits & Vegetables",
    shortDescription:
      "The finest selection of fresh, locally grown fruits and vegetables from Leros farmers.",
    fullDescription:
      "Island Fresh Market has been serving the community of Leros for over 20 years. Their commitment to sourcing only from local farmers means you get the freshest produce possible, harvested that same morning. From juicy tomatoes to fragrant herbs, their selection celebrates the incredible agricultural heritage of the Dodecanese.",
    imageUrl: null,
    location: "Lakki, Leros",
  },
  {
    id: "butcher",
    name: "Aegean Butcher",
    type: "butcher" as const,
    typeLabel: "Butcher",
    shortDescription:
      "Premium quality meats from local farms, expertly prepared for life on the water.",
    fullDescription:
      "The Aegean Butcher works exclusively with local farms to bring you the finest quality meats. Their expert butchers are happy to prepare your cuts to order, making meal preparation on board effortless. They specialize in lamb, goat, and pork — the heart of traditional Greek cuisine.",
    imageUrl: null,
    location: "Agia Marina, Leros",
  },
  {
    id: "bakery",
    name: "Golden Crust Bakery",
    type: "bakery" as const,
    typeLabel: "Bakery",
    shortDescription:
      "Traditional Greek breads, pastries, and sweets baked fresh every morning.",
    fullDescription:
      "Golden Crust Bakery has been waking up before dawn since 1985 to bake the most delicious bread in Leros. Their recipes are passed down through three generations, combining traditional techniques with the finest local ingredients. Don't miss their sesame-crusted bread rings and honey-soaked loukoumades!",
    imageUrl: null,
    location: "Platanos, Leros",
  },
  {
    id: "fishmonger",
    name: "Leros Daily Catch",
    type: "fishmonger" as const,
    typeLabel: "Fishmonger",
    shortDescription:
      "The freshest catch from local Dodecanese fishermen, delivered straight from the sea.",
    fullDescription:
      "Leros Daily Catch works with a cooperative of local fishermen who go out every morning before sunrise. By the time you place your order, their boats are already back at the dock with the day's catch. Octopus, sea bream, sea bass, prawns — whatever the Aegean has to offer that day is yours.",
    imageUrl: null,
    location: "Lakki Port, Leros",
  },
  {
    id: "poultry",
    name: "Sunrise Poultry Farm",
    type: "poultry" as const,
    typeLabel: "Poultry Farm",
    shortDescription:
      "Free-range chickens and eggs from a family-run farm on the hills of Leros.",
    fullDescription:
      "Sunrise Poultry Farm is a small, family-run operation on the hillside above Alinda. Their chickens roam freely, feeding on natural grains and the island's wild herbs, which gives their eggs and meat an exceptional flavor that you simply cannot find in a supermarket.",
    imageUrl: null,
    location: "Alinda, Leros",
  },
  {
    id: "supermarket",
    name: "Blue Horizon Market",
    type: "supermarket" as const,
    typeLabel: "Supermarket",
    shortDescription:
      "A well-stocked local supermarket for all your everyday provisioning needs.",
    fullDescription:
      "Blue Horizon Market has everything from pantry staples to household supplies. Locally owned and operated, they stock a carefully curated range of Greek and imported products, always prioritizing quality. They are our go-to source for all the dry goods and packaged products that make a boat's larder complete.",
    imageUrl: null,
    location: "Agia Marina, Leros",
  },
  {
    id: "deli",
    name: "Dodecanese Deli",
    type: "deli" as const,
    typeLabel: "Deli",
    shortDescription:
      "Handcrafted mezedes, cured meats, and specialty cheeses from across Greece.",
    fullDescription:
      "Dodecanese Deli is a treasure chest for food lovers. They import the finest cheeses from across Greece — graviera from Crete, feta from Epirus, aged kefalotyri — and pair them with locally cured meats and handcrafted mezedes. Perfect for impromptu sundowner spreads in a beautiful anchorage.",
    imageUrl: null,
    location: "Platanos, Leros",
  },
  {
    id: "ice-maker",
    name: "Crystal Ice Leros",
    type: "ice-maker" as const,
    typeLabel: "Ice Supplier",
    shortDescription:
      "High-quality ice cubes and blocks, essential for keeping your provisions fresh.",
    fullDescription:
      "Crystal Ice Leros produces food-grade ice in both cube and block form. Their ice is made with filtered water and stored in hygienic conditions. Whether you need to fill your cooler or keep your drinks chilled on a hot summer's day, they have you covered with fast and reliable supply.",
    imageUrl: null,
    location: "Lakki, Leros",
  },
  {
    id: "winery",
    name: "Aegean Cellar",
    type: "winery" as const,
    typeLabel: "Winery",
    shortDescription:
      "Exceptional local wines and craft spirits that capture the spirit of the Dodecanese.",
    fullDescription:
      "Aegean Cellar produces small-batch wines from grapes grown in the sun-drenched vineyards of Leros and neighboring islands. Their muscat is particularly renowned, with a floral sweetness that perfectly complements a Aegean sunset. They also produce a superb local tsipouro and a range of naturally flavored spirits.",
    imageUrl: null,
    location: "Xerokampos, Leros",
  },
  {
    id: "kiosk",
    name: "Island Kiosk",
    type: "kiosk" as const,
    typeLabel: "Kiosk",
    shortDescription:
      "Newspapers, snacks, beverages and everyday sundries from our friendly local kiosk.",
    fullDescription:
      "No Greek island experience is complete without the periptero — the iconic kiosk that stocks everything from newspapers and magazines to chips, chocolate, soft drinks, and local postcards. Our partner kiosk in Agia Marina opens early and closes late, so you never have to go without the little extras that make life on board more enjoyable.",
    imageUrl: null,
    location: "Agia Marina, Leros",
  },
];

export type PartnerType =
  | "fruits-veg"
  | "butcher"
  | "bakery"
  | "fishmonger"
  | "poultry"
  | "supermarket"
  | "deli"
  | "ice-maker"
  | "winery"
  | "kiosk";
