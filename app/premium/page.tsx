import type { Metadata } from 'next';
import Link from 'next/link';
import { premiumReports } from '@/lib/content';
import { siteStrings } from '@/src/strings';

export const metadata: Metadata = {
  title: 'Full reports | Macro Notes',
  description: 'Members-only full reports with complete analysis and practical watchlists.'
};

export default function PremiumLandingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Full reports</h1>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900">
        <p className="font-semibold">Members-only</p>
        <p className="mt-1 text-sm">You can read the free preview on each report card now. Full report pages are for members.</p>
        <p className="mt-1 text-sm">To read full reports, open the Access page and follow the membership instructions.</p>
      </div>
      {premiumReports.length === 0 ? (
        <p className="mt-8 rounded-lg border border-slate-200 bg-white p-5 text-slate-700">
          Full reports appear here for members. New reports are added after each publishing cycle.
        </p>
      ) : (
        <ul className="mt-8 space-y-6">
          {premiumReports.map((report) => (
            <li key={report.slug} className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">{report.date}</p>
              <Link href={`/premium/${report.slug}`} className="mt-1 block text-xl font-semibold hover:underline">
                {report.title}
              </Link>
              <p className="mt-2 text-slate-700">{report.preview}</p>
              <Link href={`/premium/${report.slug}`} className="mt-3 inline-block text-sm font-medium text-slate-900 underline hover:no-underline">
                {siteStrings.actions.readFullReport}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
