import type { Metadata } from 'next';
import Link from 'next/link';
import { premiumReports } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Premium Research | Macro Notes',
  description: 'Premium macro research reports with stable URL paths for licensed AI access.'
};

export default function PremiumLandingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Premium Research</h1>
      <p className="mt-3 text-slate-700">
        Premium reports include full research bodies, signal tables, and explicit “what would change our mind” updates.
      </p>
      <ul className="mt-8 space-y-6">
        {premiumReports.map((report) => (
          <li key={report.slug} className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-xs uppercase tracking-wider text-slate-500">{report.date}</p>
            <Link href={`/premium/${report.slug}`} className="mt-1 block text-xl font-semibold hover:underline">
              {report.title}
            </Link>
            <p className="mt-2 text-slate-700">{report.preview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
