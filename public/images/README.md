# Image Assets for OpusProcure

This directory contains image assets used throughout the OpusProcure application.

## Hero & Background Images

### Landing Page Hero
- **URL:** `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop`
- **Description:** Modern warehouse logistics and distribution center
- **Source:** [Unsplash - Logistics](https://unsplash.com/s/photos/logistics)
- **Use Case:** Landing page hero section

### Dashboard Background
- **URL:** `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=400&fit=crop&sat=-20`
- **Description:** Professional business analytics workspace
- **Source:** [Unsplash](https://unsplash.com)
- **Use Case:** Dashboard header background (optional)

### Procurement Process
- **URL:** `https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=600&fit=crop`
- **Description:** Modern industrial warehouse with automated systems
- **Source:** [Unsplash - Warehouse](https://unsplash.com/s/photos/warehouse)
- **Use Case:** About section, process illustrations

## Product Category Images

### Electronics
- **URL:** `https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop`
- **Description:** Copper wire and electrical components
- **Category:** Electronics, Cables, Wiring

### Industrial Equipment
- **URL:** `https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop`
- **Description:** Industrial manufacturing equipment
- **Category:** Industrial Equipment, Manufacturing

### Hardware & Tools
- **URL:** `https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop`
- **Description:** Metal fasteners and hardware components
- **Category:** Hardware, Fasteners, Tools

### Raw Materials
- **URL:** `https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop`
- **Description:** Copper wire spools and raw materials
- **Category:** Raw Materials, Metals, Supplies

### Packaging Materials
- **URL:** `https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop`
- **Description:** Cardboard boxes and packaging materials
- **Category:** Packaging, Shipping Supplies

## Vendor Company Logos

All vendor logos are dynamically generated using the **UI Avatars API**:

Format: `https://ui-avatars.com/api/?name=[Company+Name]&background=[HexColor]&color=fff&size=128&bold=true`

### Current Vendors:
1. **TechSource Global** - Blue (#0D8ABC)
2. **EuroWire Industries** - Navy (#1E40AF)
3. **Pacific Materials Co.** - Green (#059669)
4. **AmeriCable Supply** - Red (#DC2626)
5. **ShenZhen ElectroParts** - Orange (#EA580C)
6. **Nordic Industrial AB** - Purple (#7C3AED)
7. **Mumbai Wire Works** - Amber (#D97706)
8. **BrazilTech Cables** - Forest Green (#16A34A)

## Stock Photo Sources

All images are from royalty-free sources:

- **Unsplash** - [https://unsplash.com](https://unsplash.com)
  - Free to use for commercial projects
  - No attribution required
  - High-quality photography

- **Pexels** - [https://pexels.com](https://pexels.com)
  - Free stock photos & videos
  - Commercial use allowed
  - No attribution needed

- **UI Avatars** - [https://ui-avatars.com](https://ui-avatars.com)
  - Dynamic avatar/logo generation API
  - Free for commercial use
  - Customizable colors and text

## Image Guidelines

### Product Images
- **Dimensions:** 400x300px (4:3 aspect ratio)
- **Format:** WebP or JPEG
- **Quality:** High resolution, professional photography
- **Style:** Clean, well-lit, professional product shots

### Hero Images
- **Dimensions:** 1600x900px minimum (16:9 aspect ratio)
- **Format:** WebP for best performance
- **Quality:** High resolution for retina displays
- **Style:** Modern, professional, relevant to B2B procurement

### Company Logos
- **Dimensions:** 128x128px (square)
- **Format:** SVG (preferred) or PNG with transparency
- **Style:** Simple, recognizable, professional
- **Colors:** Brand-aligned, high contrast for readability

## Next.js Image Optimization

When using images in components, always use Next.js `<Image>` component:

```tsx
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/photo-..."
  alt="Description"
  width={400}
  height={300}
  className="rounded-xl"
/>
```

For external images, configure `next.config.mjs`:

```javascript
images: {
  domains: ['images.unsplash.com', 'ui-avatars.com'],
}
```

## Attribution

While not legally required for Unsplash images, you can optionally credit photographers:

- Warehouse photos: [Unsplash Logistics Collection](https://unsplash.com/s/photos/logistics)
- Electronics photos: [Unsplash Electrical Wire Collection](https://unsplash.com/s/photos/electrical-wire)
- Industrial photos: [Unsplash Manufacturing Collection](https://unsplash.com/s/photos/manufacturing)

---

**Last Updated:** 2026-02-15
