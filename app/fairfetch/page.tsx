import type { Metadata } from 'next';
import Link from 'next/link';
import { siteStrings } from '@/src/strings';

const demoUrls = [
  '/premium/demo-article',
  '/premium/fed-liquidity-watch',
  '/premium/india-fii-flows',
  '/premium/credit-stress-dashboard'
];

export const metadata: Metadata = {
  title: 'Partner access | Macro Notes',
  description: 'Simple partner access rules for free previews and full reports.'
};

export default function FairFetchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Partner access</h1>
      <div className="mt-6 space-y-4 leading-7 text-slate-700">
        <p>
          This page explains how partner tools can read notes from Macro Notes in a clear and approved way.
        </p>
        <p>
          We support two reading levels: <strong>Free preview</strong> for short summaries and <strong>Full report</strong>{' '}
          for complete report views.
        </p>
        <p>
          Access rules are set per page path so it is easy to tell which pages are free previews and which pages are
          members-only.
        </p>
        <p>
          For this demo, we keep setup simple so non-technical viewers can focus on the reading experience.
        </p>
      </div>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">Demo report pages</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {demoUrls.map((url) => (
            <li key={url}>
              <Link href={url} className="underline hover:no-underline">
                {siteStrings.actions.viewDemoRoute}: {url}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
