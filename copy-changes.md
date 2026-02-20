# Copy Changes

## Terminology decisions
- Chosen term: **Publisher** (used consistently).
- Chosen term: **Macro Notes** (kept as the single site/content brand term).
- Paywall terms standardized to: **Free preview**, **Full report**, **Members-only**.

## Before → After by route

| Route | Before | After | Reason |
|---|---|---|---|
| All routes (header) | Generic/technical nav labels | Reader-first labels like “Free preview notes”, “Full reports”, “Partner access” | Make destination intent obvious to non-technical viewers |
| `/` | Dense, technical positioning copy | Clear “what this site is” + “how to use it” in 3 short lines + direct actions | Improve demo clarity and first-click guidance |
| `/` | No explicit action verbs | Added “See latest note” and “Read full report” | Enforce verb + object action text |
| `/about` | Technical finance/editorial language | Plain-language purpose and audience explanation | Reduce jargon and improve comprehension |
| `/methodology` | Process-heavy wording | Simple explanation of section flow and why it helps readers | Keep page self-explanatory |
| `/pricing` | Strategy/licensing wording | Renamed to “Access” and explained free vs members-only in plain language | Make access rules easy to understand |
| `/fairfetch` | Technical implementation framing | “Partner access” explanation focused on reading levels and demo links | Keep meaning while removing technical framing |
| `/articles` | “Public Articles” framing only | “Free preview notes” framing + instructional intro + empty state guidance | Teach what appears and what to do next |
| `/articles/[slug]` | Section labels like Thesis/Signals | Plain labels: Key idea, What to watch, etc. | Increase readability for non-technical demos |
| `/premium` | Technical “Premium Research” framing | Clear members-only banner with access instructions + plain list text | Make locked-vs-visible state explicit |
| `/premium/[slug]` | Small premium pill, no clear lock explanation | Banner explains demo visibility and members-only full access in regular use | Meet requirement for clear premium-page scaffolding |
| `/premium/[slug]` | “Signal/Threshold/Implication” table headers | “Watch signal/Action point/What to do” | Improve immediate readability |
| Global missing/loading states | No custom guidance | Added plain-language not-found and loading messages with fix actions | Provide understandable error/loading guidance |
| All note/report pages | Scattered UI copy literals | Centralized shared UI strings in `src/strings.ts` | Improve consistency and future copy maintenance |

