import type { Metadata } from 'next';
import Link from 'next/link';

const demoUrls = [
  '/premium/demo-article',
  '/premium/fed-liquidity-watch',
  '/premium/india-fii-flows',
  '/premium/credit-stress-dashboard'
];

export const metadata: Metadata = {
  title: 'FairFetch Licensing | Macro Notes',
  description: 'How Macro Notes content can be licensed by AI systems using FairFetch.'
};

export default function FairFetchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">FairFetch Licensing</h1>
      <div className="mt-6 space-y-4 leading-7 text-slate-700">
        <p>
          FairFetch lets publishers and AI teams transact cleanly: <strong>Publishers set pricing rules per domain/path;
          AI teams pay per licensed fetch.</strong>
        </p>
        <p>
          We support two license types. <strong>SUMMARY</strong> allows summarise + cite, but no full content display.
          <strong> DISPLAY</strong> allows a full content display once.
        </p>
        <p>
          Pricing rules are simple and machine-readable: each rule maps a <strong>path prefix</strong>, a{' '}
          <strong>license type</strong>, and a <strong>price in micros</strong>.
        </p>
        <p>For this MVP demo, cryptographic verification is intentionally bypassed.</p>
        <p>
          In the publisher dashboard you should expect to see transaction records, revenue accumulation, and the domain
          listing used for rule configuration.
        </p>
      </div>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">Demo URLs</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {demoUrls.map((url) => (
            <li key={url}>
              <Link href={url} className="underline hover:no-underline">
                {url}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
