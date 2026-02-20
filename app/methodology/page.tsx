import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How notes are built | Macro Notes',
  description: 'A plain-language guide to how each note is structured.'
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">How notes are built</h1>
      <div className="mt-6 space-y-4 leading-7 text-slate-700">
        <p>
          Every note follows the same simple flow: key idea, what to watch, what could happen next, and what could go
          wrong.
        </p>
        <p>
          This format makes it easy to scan quickly and compare updates over time.
        </p>
        <p>
          Full reports also include a section called “What would change our view” so you can see the conditions that
          would lead to a different conclusion.
        </p>
      </div>
    </div>
  );
}
