# Copy Inventory

## Routing model
- This project uses the **Next.js App Router** (`app/` directory).

## Route list
- `/`
- `/about`
- `/methodology`
- `/pricing`
- `/fairfetch`
- `/articles`
- `/articles/[slug]`
  - `/articles/soft-landing-repriced`
  - `/articles/asia-disinflation-pulse`
  - `/articles/commodity-volatility-regime`
- `/premium`
- `/premium/[slug]`
  - `/premium/demo-article`
  - `/premium/fed-liquidity-watch`
  - `/premium/india-fii-flows`
  - `/premium/credit-stress-dashboard`
- Global system routes in use:
  - `not-found` UI (`app/not-found.tsx`)
  - `loading` UI (`app/loading.tsx`)

## User-visible string inventory

| Route | File path | Component | Current text | Where it appears | User intent context |
|---|---|---|---|---|---|
| All routes | `components/SiteHeader.tsx` | SiteHeader | Home, About, Methodology, Pricing, Articles, Premium, FairFetch nav labels + brand title | Header nav | Navigate between sections quickly |
| All article/report routes | `components/ArticleLayout.tsx` | ArticleLayout | Date label, page title, byline text | Entry header | Understand authorship and date at top of note |
| All article/report routes | `components/FairFetchLicenseBox.tsx` | FairFetchLicenseBox | Box heading, two access bullets, support text, loading text, host text | Bottom info box | Explain partner/tool reading permissions |
| `/` | `app/page.tsx` | HomePage | Hero copy, “What this site is”, “How to use it”, section headings, empty-state text, action links | Main home content | Orient first-time viewer and give next action |
| `/about` | `app/about/page.tsx` | AboutPage | Page heading and two paragraphs | About page | Explain who publishes notes and what readers get |
| `/methodology` | `app/methodology/page.tsx` | MethodologyPage | Page heading and three paragraphs | Methodology page | Explain note structure in plain language |
| `/pricing` | `app/pricing/page.tsx` | PricingPage | Page heading and three paragraphs | Access page | Explain free preview vs members-only access |
| `/fairfetch` | `app/fairfetch/page.tsx` | FairFetchPage | Heading, explanatory body text, demo list heading, demo link label prefix | Partner access page | Explain partner reading access and demo report links |
| `/articles` | `app/articles/page.tsx` | ArticlesPage | Page heading, intro copy, empty state copy, action link label | Articles listing | Browse free previews and open one |
| `/articles/[slug]` | `app/articles/[slug]/page.tsx` | ArticlePage | Section headings (Thesis/Signals/Scenarios/Risks equivalents) | Article detail layout | Read structured free preview note |
| `/premium` | `app/premium/page.tsx` | PremiumLandingPage | Page heading, banner heading/body, empty state copy, action link label | Premium listing | Understand members-only status and browse report entries |
| `/premium/[slug]` | `app/premium/[slug]/page.tsx` | PremiumPage | Banner heading/body, section headings, table headers | Premium report detail | Understand what is visible, what is members-only, and read structured report |
| Any missing route | `app/not-found.tsx` | NotFound | “Page not found” title, fix guidance, CTA button label | 404 page | Recover from broken/outdated links |
| Any route during suspense load | `app/loading.tsx` | Loading | Loading status and refresh guidance | Loading UI | Understand short delay and simple fix |

## Dynamic content strings used in pages

The following files contain **all dynamic user-facing note copy** (titles, summaries, thesis bullets, signals, scenarios, risks, previews, full report paragraphs, table cell text, and “what would change our view” bullets). These strings render in `/articles/*` and `/premium/*` pages.

| Route scope | File path | Component/data source | Current text | Where it appears | User intent context |
|---|---|---|---|---|---|
| `/articles/*` and `/premium/*` | `lib/content.ts` | `publicArticles` and `premiumReports` collections | All values for: `title`, `date`, `summary`, `thesis[]`, `signals[]`, `scenarios[]`, `risks[]`, `preview`, `fullResearchBody[]`, `table[].{signal,threshold,implication}`, `mindChange[]` | Listing cards + detail pages | Read note content itself (free preview + full reports) |

