import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology | Macro Notes',
  description: 'How Macro Notes builds thesis, signal, scenario, and risk frameworks.'
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Methodology</h1>
      <div className="mt-6 space-y-4 leading-7 text-slate-700">
        <p>
          We structure each report in four blocks: <strong>thesis</strong>, <strong>signals</strong>,{' '}
          <strong>scenarios</strong>, and <strong>risks</strong>. The goal is repeatable, auditable reasoning.
        </p>
        <p>
          Signals are chosen for timeliness and practical relevance. Scenarios use weighted narrative trees rather than a
          single point forecast. Risk sections focus on what can break the thesis and where execution can fail.
        </p>
        <p>
          Premium reports include a “What would change our mind” section to make assumptions explicit and reduce
          confirmation bias.
        </p>
      </div>
    </div>
  );
}
