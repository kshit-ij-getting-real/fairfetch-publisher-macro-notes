import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Access | Macro Notes',
  description: 'Understand what is free, what is members-only, and how to unlock full reports.'
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Access</h1>
      <div className="mt-6 space-y-4 leading-7 text-slate-700">
        <p>
          Free preview notes are open to everyone. They are designed for quick reading and highlight the most important
          takeaways.
        </p>
        <p>
          Full reports are members-only. To unlock them, follow the membership steps provided by the Macro Notes team.
        </p>
        <p>
          If you are reviewing the demo, use the links on the home page and full reports page to move between free
          previews and full report views.
        </p>
      </div>
    </div>
  );
}
