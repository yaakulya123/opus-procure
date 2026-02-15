# OpusProcure Design System

## Design Philosophy

**Minimalist & Modern** — Inspired by Linear, Notion, and Attio

Our design prioritizes **clarity over complexity**, using generous whitespace, simple layouts, and focused information to create a professional B2B procurement experience.

## Core Principles

### 1. **Whitespace is a Feature**
- 8px spacing scale (8px, 16px, 24px, 32px, 64px)
- Generous padding and margins
- Let content breathe

### 2. **Direct & Linear**
- No nested navigation or complex hierarchies
- Simple top nav with 2-3 main options
- Clear user flow: Request → Results → Confirm

### 3. **Minimal Color Palette**
- **Background:** Pure white (#FFFFFF)
- **Text:** Near-black (#111111) and gray-500 (#6B7280)
- **Accent:** Gray-900 (#111111) for CTAs
- **Borders:** Light gray (#E5E7EB)

### 4. **Typography**
- **Font:** System fonts (-apple-system, SF Pro, Segoe UI)
- **Sizes:** Large headings (3xl-6xl), readable body (sm-lg)
- **Weight:** Semibold for emphasis, medium for labels

### 5. **No Visual Noise**
- Minimal icons (only when meaningful)
- No decorative elements
- Clean borders, subtle shadows
- Single-column layouts where possible

## Layout Patterns

### Top Navigation
```
┌─────────────────────────────────────────────┐
│ OpusProcure          New Request | Results  │ ← Fixed, minimal nav
└─────────────────────────────────────────────┘
```

### Simple Form (Request Page)
```
┌─────────────────────────────────────────────┐
│                                             │
│  New procurement request                    │
│  Tell us what you need...                   │
│                                             │
│  Inbound material                           │
│  [____________________________________]     │
│                                             │
│  Sector                                     │
│  [____________________________________]     │
│                                             │
│  [Find vendors]                             │
│                                             │
└─────────────────────────────────────────────┘
```

### Table + Sidebar (Dashboard Page)
```
┌───────────────────────────────┬───────────┐
│ Marine Oxy                    │           │
│ 8 vendors found               │           │
│                               │           │
│ [Search...]                   │ Summaries │
│                               │           │
│ ┌──────────────────────────┐  │ ┌───────┐ │
│ │ Company | Product | Price│  │ │Compli-││
│ ├──────────────────────────┤  │ │ance   ││
│ │ TechSource | Wire | $4.2k│  │ └───────┘ │
│ │ EuroWire | Cable | $5.1k│  │ ┌───────┐ │
│ └──────────────────────────┘  │ │Ship   ││
│                               │ └───────┘ │
└───────────────────────────────┴───────────┘
```

## Component Library

### Buttons
```tsx
// Primary CTA
<button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
  Find vendors
</button>

// Secondary
<button className="border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
  Cancel
</button>
```

### Inputs
```tsx
<input
  className="w-full px-4 py-3 border border-gray-200 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-gray-900
             focus:border-transparent"
  placeholder="Enter value..."
/>
```

### Cards
```tsx
<div className="bg-white border border-gray-200 rounded-lg p-6">
  <h3 className="font-medium text-sm mb-4">Title</h3>
  {/* Content */}
</div>
```

### Table
```tsx
<table className="w-full">
  <thead>
    <tr className="border-b border-gray-100">
      <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
        Company
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer">
      <td className="py-4 px-4">Content</td>
    </tr>
  </tbody>
</table>
```

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs    | 8px   | Tight gaps (icon-text) |
| sm    | 12px  | Form label spacing |
| md    | 16px  | Card internal spacing |
| lg    | 24px  | Section spacing |
| xl    | 32px  | Page top padding |
| 2xl   | 64px  | Large section breaks |

## Typography Scale

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| H1 (Hero) | 6xl (3.75rem) | Semibold | Landing page title |
| H1 | 3xl (1.875rem) | Semibold | Page titles |
| H2 | xl (1.25rem) | Medium | Section headers |
| Body | sm (0.875rem) | Normal | Table cells, small text |
| Body | base (1rem) | Normal | Form inputs, paragraphs |
| Label | xs (0.75rem) | Medium | Form labels, captions |

## Color Tokens

```css
/* Backgrounds */
--bg-primary: #FFFFFF;
--bg-secondary: #F9FAFB;
--bg-accent: #111111;

/* Text */
--text-primary: #111111;
--text-secondary: #6B7280;
--text-inverse: #FFFFFF;

/* Borders */
--border-light: #F3F4F6;
--border-default: #E5E7EB;
--border-dark: #D1D5DB;

/* Interactive */
--focus-ring: #111111;
--hover-bg: #F9FAFB;
```

## Animation

**Keep it subtle**
- Transitions: 200-300ms ease
- No elaborate animations
- Simple hover states
- Fade-in on page load (optional)

```tsx
// Simple hover
className="transition-colors hover:bg-gray-50"

// Focus ring
className="focus:ring-2 focus:ring-gray-900 transition-all"
```

## Responsive Behavior

- **Desktop-first:** Optimized for 1440px+ screens
- **No mobile navigation:** Simple top nav works on all sizes
- **Single column on mobile:** Stack layouts vertically
- **Maintain whitespace:** Don't cram content on small screens

## Anti-Patterns (Don't Do This)

❌ **Colorful stat cards** with icons and backgrounds
❌ **Complex grid layouts** with multiple columns
❌ **Heavy shadows** and gradients
❌ **Decorative illustrations** without purpose
❌ **Dense information** with small spacing
❌ **Nested navigation** or mega menus
❌ **Too many colors** or accent hues
❌ **Animated logos** or flashy elements

## Do This Instead

✅ **Clean white cards** with simple borders
✅ **Simple table layouts** with clear columns
✅ **Subtle borders** and minimal shadows
✅ **Purposeful icons** only when needed
✅ **Generous whitespace** between elements
✅ **Flat navigation** with 2-3 top-level links
✅ **Monochrome palette** with one accent
✅ **Static, clean interfaces**

## Design References

### Inspiration
- **Linear** — Clean tables, minimal UI, 8px grid
  - [How Linear Redesigned Their UI](https://linear.app/now/how-we-redesigned-the-linear-ui)
  - [Linear Design on Figma](https://www.figma.com/community/file/1222872653732371433/linear-design-system)
- **Attio** — Simple CRM tables, fast data views
  - [Attio CRM Review](https://hackceleration.com/attio-review/)
- **Notion** — Clean layouts, minimal chrome
- **Stripe Dashboard** — Professional B2B aesthetics

### Resources
- [Minimalist Dashboard Designs on Dribbble](https://dribbble.com/tags/minimalist-dashboard)
- [B2B Design Trends 2026](https://ozglobalb2b.com/blog/b2b-design-and-tech-trends-2026/)
- [SaaS Dashboard Examples 2026](https://www.saasframe.io/categories/dashboard)

---

**Last Updated:** 2026-02-15
**Design Lead:** OpusProcure Team
