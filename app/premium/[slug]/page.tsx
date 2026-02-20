import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/ArticleLayout';
import { premiumReports } from '@/lib/content';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return premiumReports.map((report) => ({ slug: report.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const report = premiumReports.find((item) => item.slug === params.slug);
  if (!report) {
    return {};
  }
  return {
    title: `${report.title} | Macro Notes Premium`,
    description: report.summary
  };
}

export default function PremiumPage({ params }: Props) {
  const report = premiumReports.find((item) => item.slug === params.slug);
  if (!report) {
    notFound();
  }

  return (
    <ArticleLayout title={report.title} date={report.date}>
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-900">
        <span role="img" aria-label="lock">
          🔒
        </span>
        Premium Research
      </div>

      <p className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">{report.preview}</p>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Thesis</h2>
        {report.thesis.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Signals</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.signals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Scenarios</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.scenarios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Risks</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.risks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className="border-slate-300" />

      <section>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight">Full Research Body</h2>
        <div className="space-y-4">
          {report.fullResearchBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Signal Table</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold">Signal</th>
                <th className="px-4 py-3 font-semibold">Threshold</th>
                <th className="px-4 py-3 font-semibold">Implication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {report.table.map((row) => (
                <tr key={row.signal}>
                  <td className="px-4 py-3">{row.signal}</td>
                  <td className="px-4 py-3">{row.threshold}</td>
                  <td className="px-4 py-3">{row.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">What would change our mind</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.mindChange.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </ArticleLayout>
  );
}
