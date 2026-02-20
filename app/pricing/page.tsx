import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Philosophy | Macro Notes',
  description: 'How Macro Notes thinks about research subscription value and usage-based licensing.'
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing Philosophy</h1>
      <div className="mt-6 space-y-4 leading-7 text-slate-700">
        <p>
          Macro Notes follows a tiered publishing model: public pieces establish the framework, while premium reports
          deliver full research depth, monitoring tables, and implementation guidance.
        </p>
        <p>
          For licensing, we keep URL structure stable so institutional users and AI teams can integrate these notes into
          governed workflows. Our intent is clarity: who can access what, for which purpose, at which price point.
        </p>
        <p>
          Pricing narratives are designed to align with actual usage intensity. Teams that require repeated premium fetches
          should budget for licensed access just as they would for traditional research seats.
        </p>
      </div>
    </div>
  );
}
