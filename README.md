# OpusProcure

**AI-powered procurement, simplified.**

OpusProcure replaces weeks of manual vendor sourcing with a single intelligent workflow. Submit your material requirements, and our AI agents search globally to find, rank, and compare vendors — then draft personalized outreach emails so your team can close deals faster.

> Built for the Opus Hackathon 2026

---

## The Problem

Corporate procurement teams spend **days to weeks** manually searching for suppliers, comparing quotes, verifying compliance, and drafting outreach. The process is fragmented across spreadsheets, emails, and search engines — with no centralized intelligence.

## Our Solution

OpusProcure is an end-to-end AI procurement platform that automates the entire vendor discovery pipeline:

1. **Describe** what you need (sector, equipment, budget, region, compliance)
2. **Discover** — AI agents search globally and return ranked vendor matches
3. **Compare** vendors side-by-side with ratings, compliance data, and descriptions
4. **Contact** — AI drafts a professional outreach email, ready to send in one click

The entire flow takes **under 2 minutes** instead of days.


<img width="2153" height="1414" alt="image" src="https://github.com/user-attachments/assets/c1db642a-f54d-424b-b879-e69ec4186c80" />

<img width="2352" height="1703" alt="image" src="https://github.com/user-attachments/assets/24e70ab2-175e-4762-a67c-e54bf710ab91" />

<img width="2299" height="1663" alt="image" src="https://github.com/user-attachments/assets/ad427de7-0342-4a77-82f3-e0b5f247e30c" />

<img width="1419" height="765" alt="image" src="https://github.com/user-attachments/assets/1a0fb594-76a1-4a91-8663-9be01d459ab3" />



---

## How It Works

```
User submits form  →  Opus AI agents search  →  Ranked vendors returned  →  AI drafts email  →  Send
```

### Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Next.js Frontend                   │
│         (React + TypeScript + Tailwind CSS)          │
├──────────────────────┬──────────────────────────────┤
│                      │                              │
│    /request          │    /dashboard    /confirm    │
│    Form input        │    Results       Email       │
│                      │    Compare       Outreach    │
└──────────────────────┴──────────┬───────────────────┘
                                  │ REST API
                       ┌──────────▼───────────────────┐
                       │     Spring Boot Backend       │
                       │     (Java + REST API)         │
                       ├──────────────────────────────┤
                       │   POST /api/form-request      │
                       │   POST /api/write-email       │
                       └──────────┬───────────────────┘
                                  │ Opus API
                       ┌──────────▼───────────────────┐
                       │   Opus AI Agent Platform      │
                       │                              │
                       │  1. POST /job/initiate        │
                       │  2. POST /job/execute         │
                       │  3. GET  /job/{id}/results    │
                       └──────────────────────────────┘
```

### Opus API Integration

The backend orchestrates **3 Opus API calls** per workflow:

| Step | Endpoint | Purpose |
|------|----------|---------|
| 1 | `POST /job/initiate` | Create a new AI agent job for the workflow |
| 2 | `POST /job/execute` | Send the user's form data as the job payload |
| 3 | `GET /job/{id}/results` | Retrieve AI-generated vendor results |

**Two workflows are powered by Opus:**
- **Vendor Search** — Takes sector, equipment type, budget, countries, and compliance requirements. Returns matched vendors with product names, ratings, descriptions, and compliance details.
- **Email Generation** — Takes recipient info, instructions, and template structure. Generates and sends professional outreach emails.

---

## Application Walkthrough

### 1. Landing Page (`/`)
Clean hero with feature highlights and dual CTAs. Sets the tone for a modern SaaS experience.

### 2. Procurement Request (`/request`)
Two-column layout with a structured form (sector, equipment type, budget, priority countries, compliance) and a contextual sidebar showing how it works. A live progress indicator fills as fields are completed. Submit triggers the AI agent pipeline.

### 3. Vendor Dashboard (`/dashboard`)
The core of the platform:
- **Stats row** — Total vendors found, average rating, top match
- **Searchable vendor table** — Company name, product, ratings, compliance at a glance
- **Detail sidebar** — Click any vendor to see full description, ratings, and compliance details
- **AI recommendation banner** — Highlights the best-fit vendor with confidence score and reasoning

### 4. Confirmation & Outreach (`/confirm`)
- **Horizontal timeline** tracking the procurement journey (5 stages)
- **Vendor summary card** with all key details
- **Editable AI-generated email** — Review, customize, and send with a single click
- **3-state send button** with loading animation (idle → sending → sent)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| **Backend** | Spring Boot (Java), REST API |
| **AI Platform** | Opus AI Agents |
| **Icons** | Lucide React |
| **State** | React hooks + localStorage |

---

## Project Structure

```
src/
├── app/                          # Next.js pages (App Router)
│   ├── page.tsx                  # Landing page
│   ├── request/page.tsx          # Procurement form
│   ├── dashboard/page.tsx        # Vendor results & comparison
│   └── confirm/page.tsx          # Order confirmation & email
├── components/
│   ├── layout/TopNav.tsx         # Shared navigation bar
│   ├── dashboard/                # VendorCard, AIRecommendation, ComparisonChart
│   ├── confirm/                  # OrderSummary, EmailPreview, Timeline
│   └── request/                  # MaterialForm
├── lib/
│   ├── types.ts                  # TypeScript interfaces
│   ├── mockData.ts               # Demo dataset (8 vendors)
│   └── api.ts                    # API client (mock + real endpoints)
└── main/java/com/example/demo/
    ├── controller/
    │   └── ProcurementController.java   # REST endpoints
    ├── service/
    │   └── OpusService.java             # Opus API orchestration
    └── dto/                             # Request/response DTOs
        ├── FormRequest.java
        ├── EmailRequest.java
        ├── SearchResponse.java
        ├── JobInitiateRequest.java
        ├── JobExecuteRequest.java
        └── JobResultsResponse.java
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- Java 17+ (for backend)
- npm

### Frontend

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the frontend runs with mock data out of the box, no backend required.

### Backend

```bash
# Set environment variables
export OPUS_BASE_URL=https://operator.opus.com
export SECRET_KEY_OPUS=your-opus-service-key
export PROCESS_SEARCH_ID=your-search-workflow-id
export PROCESS_EMAIL_ID=your-email-workflow-id

# Run Spring Boot
./mvnw spring-boot:run
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend URL (frontend `.env.local`) |
| `opus.base-url` | Opus API base URL |
| `secret_key_opus` | Opus service authentication key |
| `process_search_id` | Opus workflow ID for vendor search |
| `process_email_id` | Opus workflow ID for email generation |

---

## API Reference

### Frontend → Backend

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/form-request` | POST | Submit procurement form, returns vendor results |
| `/api/write-email` | POST | Generate and send outreach email |

### Backend → Opus

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/job/initiate` | POST | Start a new AI agent job |
| `/job/execute` | POST | Execute job with payload variables |
| `/job/{id}/results` | GET | Retrieve AI-generated results |

### Vendor Data Schema

```json
{
  "company_product_name": "TechSource Global — Premium Copper Wire AWG 12",
  "match_name": "TechSource Global",
  "ratings": "4.8/5",
  "company_description": "Leading East Asian electronics supplier...",
  "compliance_details": "ISO 9001, CE, UL — Full compliance..."
}
```

---

## Design Philosophy

Minimalist SaaS aesthetic inspired by **Linear**, **Notion**, and **Attio**:

- **Whitespace-first** — Generous spacing, clean card layouts
- **Minimal color palette** — White/gray base, emerald for positive indicators, amber for ratings
- **Data-rich interfaces** — Stats cards, searchable tables, detail sidebars
- **Progressive disclosure** — Information reveals as users interact
- **4-step linear flow** — Request → Search → Compare → Contact

---

## Team

Built during the **Opus Hackathon 2026**.

---

## License

MIT
