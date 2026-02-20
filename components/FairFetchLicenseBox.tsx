'use client';

import { useEffect, useState } from 'react';

export function FairFetchLicenseBox() {
  const [host, setHost] = useState('');

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  return (
    <aside className="my-8 rounded-lg border border-emerald-300 bg-emerald-50 p-5 text-sm text-emerald-950">
      <h3 className="mb-2 text-base font-semibold">AI Licensing via FairFetch</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>SUMMARY license: summarise + cite, no full display</li>
        <li>DISPLAY license: full content display once</li>
      </ul>
      <p className="mt-3">This report is available to AI systems via FairFetch licensed access.</p>
      <p className="mt-1 font-medium">Current domain: {host || 'loading...'}</p>
      <p className="mt-1">If you&apos;re an AI team, mint a spend token and redeem it for a receipt.</p>
    </aside>
  );
}
