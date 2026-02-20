import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Macro Notes',
  description: 'What Macro Notes is, who it is for, and what you get from each note.'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About Macro Notes</h1>
      <p className="mt-4 leading-7 text-slate-700">
        Macro Notes is an independent Publisher focused on clear market explainers. Each note helps you understand what is
        changing, why it matters, and what to watch next.
      </p>
      <p className="mt-4 leading-7 text-slate-700">
        We publish free preview notes for quick reading, plus members-only full reports for deeper detail.
      </p>
    </div>
  );
}
