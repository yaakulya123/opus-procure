/**
 * Image asset URLs and constants for OpusProcure
 * All images are from royalty-free sources (Unsplash, Pexels)
 */

export const HERO_IMAGES = {
  landing: {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop",
    alt: "Modern warehouse logistics and distribution center",
    width: 1600,
    height: 900,
  },
  dashboard: {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=400&fit=crop&sat=-20",
    alt: "Professional business analytics workspace",
    width: 1600,
    height: 400,
  },
  procurement: {
    url: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=600&fit=crop",
    alt: "Modern industrial warehouse with automated systems",
    width: 1200,
    height: 600,
  },
} as const;

export const CATEGORY_IMAGES = {
  Electronics: {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    alt: "Electronic components and copper wire",
  },
  "Raw Materials": {
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    alt: "Raw materials and metal supplies",
  },
  "Office Supplies": {
    url: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop",
    alt: "Office supplies and stationery",
  },
  "Industrial Equipment": {
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    alt: "Industrial manufacturing equipment",
  },
  Packaging: {
    url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
    alt: "Cardboard boxes and packaging materials",
  },
  Chemicals: {
    url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
    alt: "Chemical containers and laboratory equipment",
  },
  Textiles: {
    url: "https://images.unsplash.com/photo-1558769132-cb1aea8a388f?w=400&h=300&fit=crop",
    alt: "Textile fabrics and materials",
  },
  "Hardware & Tools": {
    url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
    alt: "Hardware tools and fasteners",
  },
} as const;

export const PLACEHOLDER_IMAGES = {
  vendorLogo: (companyName: string, color: string = "0D8ABC") =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(companyName)}&background=${color}&color=fff&size=128&bold=true`,
  product: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
  avatar: (name: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=40&background=random`,
} as const;

export const ILLUSTRATION_IMAGES = {
  emptyState: {
    url: "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&h=600&fit=crop&sat=-50",
    alt: "Empty warehouse - no results found",
  },
  loading: {
    url: "https://images.unsplash.com/photo-1580982324076-fc8a06abb99b?w=800&h=600&fit=crop&sat=-50",
    alt: "Processing - AI searching for vendors",
  },
  success: {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&sat=-30",
    alt: "Success - order confirmed",
  },
} as const;

/**
 * Vendor logo color palette
 * Tailwind CSS color values for consistent branding
 */
export const VENDOR_COLORS = {
  blue: "0D8ABC",
  navy: "1E40AF",
  green: "059669",
  red: "DC2626",
  orange: "EA580C",
  purple: "7C3AED",
  amber: "D97706",
  forest: "16A34A",
  teal: "0D9488",
  indigo: "4F46E5",
  pink: "DB2777",
  slate: "475569",
} as const;

/**
 * Get a random vendor color for dynamic logo generation
 */
export function getRandomVendorColor(): string {
  const colors = Object.values(VENDOR_COLORS);
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Get category-specific image URL
 */
export function getCategoryImage(category: string): string {
  const categoryKey = category as keyof typeof CATEGORY_IMAGES;
  return CATEGORY_IMAGES[categoryKey]?.url || PLACEHOLDER_IMAGES.product;
}

/**
 * Get vendor logo URL with custom color
 */
export function getVendorLogo(
  companyName: string,
  color?: string
): string {
  return PLACEHOLDER_IMAGES.vendorLogo(
    companyName,
    color || getRandomVendorColor()
  );
}
