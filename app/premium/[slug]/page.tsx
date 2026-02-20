import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/ArticleLayout';
import { premiumReports } from '@/lib/content';
import { siteStrings } from '@/src/strings';

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
    title: `${report.title} | ${siteStrings.siteName} Full reports`,
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
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <p className="font-semibold">{siteStrings.labels.premiumPill}</p>
        <p className="mt-1">What you can see now: a free preview and a sample full report for the demo.</p>
        <p className="mt-1">In regular use, complete reports are members-only. Use the Access page for membership steps.</p>
      </div>

      <p className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">{report.preview}</p>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">{siteStrings.sections.thesis}</h2>
        {report.thesis.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">{siteStrings.sections.signals}</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.signals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">{siteStrings.sections.scenarios}</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.scenarios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">{siteStrings.sections.risks}</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.risks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <hr className="border-slate-300" />

      <section>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight">{siteStrings.sections.fullReport}</h2>
        <div className="space-y-4">
          {report.fullResearchBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">{siteStrings.sections.signalTable}</h2>
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold">Watch signal</th>
                <th className="px-4 py-3 font-semibold">Action point</th>
                <th className="px-4 py-3 font-semibold">What to do</th>
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
        <h2 className="mb-2 text-2xl font-semibold">{siteStrings.sections.mindChange}</h2>
        <ul className="list-disc space-y-2 pl-6">
          {report.mindChange.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </ArticleLayout>
  );
}
