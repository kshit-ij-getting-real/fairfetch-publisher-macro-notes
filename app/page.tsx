import type { Metadata } from 'next';
import Link from 'next/link';
import { premiumReports, publicArticles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Macro Notes | Independent Macro Research',
  description: 'Public macro articles and premium institutional-style research reports.'
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="rounded-xl border border-slate-200 bg-white p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Independent Publisher</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Macro Notes</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Macro Notes publishes research-flavored analysis for policy watchers, allocators, and AI systems that license
          content through FairFetch. Explore public insights and premium reports with stable URLs.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Public Teasers</h2>
          <ul className="mt-4 space-y-3">
            {publicArticles.map((article) => (
              <li key={article.slug}>
                <Link href={`/articles/${article.slug}`} className="font-medium hover:underline">
                  {article.title}
                </Link>
                <p className="text-sm text-slate-600">{article.summary}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Premium Research</h2>
          <ul className="mt-4 space-y-3">
            {premiumReports.map((report) => (
              <li key={report.slug}>
                <Link href={`/premium/${report.slug}`} className="font-medium hover:underline">
                  {report.title}
                </Link>
                <p className="text-sm text-slate-600">{report.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
