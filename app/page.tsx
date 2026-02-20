import type { Metadata } from 'next';
import Link from 'next/link';
import { premiumReports, publicArticles } from '@/lib/content';
import { siteStrings } from '@/src/strings';

export const metadata: Metadata = {
  title: 'Macro Notes | Market notes made simple',
  description: 'Use free previews to learn the big idea, then open full reports for complete detail.'
};

export default function HomePage() {
  const latestFreePreview = publicArticles[0];
  const latestFullReport = premiumReports[0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="rounded-xl border border-slate-200 bg-white p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Independent Publisher</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{siteStrings.siteName}</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          This site shares clear market notes for people who want fast, practical updates.
        </p>
        <p className="mt-2 max-w-3xl text-slate-700">
          Start with a free preview note to get the key idea, then open a full report if you want the complete view.
        </p>
        <p className="mt-2 max-w-3xl text-slate-700">
          Use the menu to jump between free previews, full reports, and access details.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={latestFreePreview ? `/articles/${latestFreePreview.slug}` : '/articles'} className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            {siteStrings.actions.seeLatestNote}
          </Link>
          <Link href={latestFullReport ? `/premium/${latestFullReport.slug}` : '/premium'} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100">
            {siteStrings.actions.readFullReport}
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Free preview notes</h2>
          {publicArticles.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">Free preview notes appear here. New notes are added when fresh analysis is published.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {publicArticles.map((article) => (
                <li key={article.slug}>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{siteStrings.labels.freePreview}</p>
                  <Link href={`/articles/${article.slug}`} className="mt-1 block font-medium hover:underline">
                    {article.title}
                  </Link>
                  <p className="text-sm text-slate-600">{article.summary}</p>
                  <Link href={`/articles/${article.slug}`} className="mt-2 inline-block text-sm font-medium text-slate-900 underline hover:no-underline">
                    {siteStrings.actions.readFreePreview}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Full reports</h2>
          {premiumReports.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">Full reports appear here for members. New reports are posted after each completed update cycle.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {premiumReports.map((report) => (
                <li key={report.slug}>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Members-only</p>
                  <Link href={`/premium/${report.slug}`} className="mt-1 block font-medium hover:underline">
                    {report.title}
                  </Link>
                  <p className="text-sm text-slate-600">{report.summary}</p>
                  <Link href={`/premium/${report.slug}`} className="mt-2 inline-block text-sm font-medium text-slate-900 underline hover:no-underline">
                    {siteStrings.actions.readFullReport}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
