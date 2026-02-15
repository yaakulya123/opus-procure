# OpusProcure

AI-powered procurement platform that finds, compares, and ranks vendors for your material needs. Built as a SaaS product for corporate procurement teams.

## Overview

OpusProcure automates the vendor sourcing process. Users submit material requirements and the platform's AI agents search globally, returning ranked vendor options with pricing, compliance data, delivery estimates, and match scores. The entire flow from request to vendor outreach is handled in one interface.

## Application Flow

1. **Request** (`/request`) -- Users describe their material needs, sector, budget, and preferred regions. An optional AI guidance field lets users influence search priorities.
2. **Dashboard** (`/dashboard`) -- Displays AI-sourced vendor results in a sortable, searchable table. Includes stat cards (total vendors, average price, best match, estimated savings), an AI recommendation banner, and interactive charts (bar chart for price comparison, radar chart for multi-axis top-3 analysis). Clicking a vendor opens a detail sidebar with compliance, shipping, and pricing breakdown.
3. **Confirmation** (`/confirm`) -- Shows the selected vendor's order summary, a horizontal procurement timeline, and an editable AI-generated outreach email ready to send.

## Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3.4
- **Charts:** Recharts 3.7
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app runs at `http://localhost:3000`.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── request/page.tsx      # Procurement request form
│   ├── dashboard/page.tsx    # Vendor results with charts
│   └── confirm/page.tsx      # Order confirmation and email
├── components/
│   ├── layout/               # TopNav, Sidebar, Header
│   ├── request/              # MaterialForm, MaterialTable, PromptInput
│   ├── dashboard/            # VendorCard, FilterBar, ComparisonChart, AIRecommendation
│   ├── confirm/              # OrderSummary, EmailPreview, Timeline
│   └── common/               # HeroImage
└── lib/
    ├── types.ts              # TypeScript interfaces and constants
    ├── mockData.ts           # Demo dataset (8 vendors, stats, timeline)
    └── api.ts                # API client (mocked, ready for backend integration)
```

## Backend Integration

All API calls are currently mocked with simulated delays. The frontend is ready for backend integration at three endpoints:

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/opus/trigger` | POST | Submit procurement request, trigger AI agent search |
| `/api/opus/results` | GET | Retrieve vendor list, stats, and AI recommendation |
| `/api/opus/email` | POST | Send outreach email to selected vendor |

API functions are in `src/lib/api.ts`. Uncomment `API_BASE` and replace the mock implementations with real fetch calls.

### Expected Request/Response Types

All TypeScript interfaces are defined in `src/lib/types.ts`:

- **ProcurementRequest** -- materials array, AI prompt, budget (min/max/total/currency), region
- **Vendor** -- 14 fields including price, priceComparison, compliance array, matchScore, rating, shippingDays
- **DashboardStats** -- totalVendors, avgPrice, bestMatchScore, estimatedSavings
- **AIRecommendation** -- vendorId, reasoning string, confidenceScore

### Environment Variables

When the backend is ready, create `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
```

## Design

Minimalist, white-background interface inspired by Linear and Attio. Key patterns:

- System font stack, 8px spacing scale
- Gray-900 primary actions, emerald for positive indicators, amber for warnings
- Rounded-xl cards with light borders, no heavy shadows
- Desktop-first layout, top navigation bar

## Image Sources

- Product images: [Unsplash](https://unsplash.com) (configured in `next.config.mjs`)
- Vendor logos: [UI Avatars API](https://ui-avatars.com) (dynamic generation from company name)

## License

MIT
