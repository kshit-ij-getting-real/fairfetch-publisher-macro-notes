import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Macro Notes',
  description: 'About Macro Notes research process and editorial goals.'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About Macro Notes</h1>
      <p className="mt-4 leading-7 text-slate-700">
        Macro Notes is an independent financial research publisher focused on policy transmission, liquidity plumbing,
        credit stress, and global capital flows. We publish concise public notes and deeper premium reports intended for
        investment teams and AI workflows that require explicit licensing.
      </p>
      <p className="mt-4 leading-7 text-slate-700">
        Our editorial voice prioritizes clarity over jargon, scenario planning over certainty, and risk management over
        narrative recency. Every note is authored by the Macro Notes Research Desk.
      </p>
    </div>
  );
}
