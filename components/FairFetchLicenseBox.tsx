'use client';

import { useEffect, useState } from 'react';
import { siteStrings } from '@/src/strings';

export function FairFetchLicenseBox() {
  const [host, setHost] = useState('');

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  return (
    <aside className="my-8 rounded-lg border border-emerald-300 bg-emerald-50 p-5 text-sm text-emerald-950">
      <h3 className="mb-2 text-base font-semibold">Partner reading access</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Free preview: short summary with source credit.</li>
        <li>Full report: complete report view for approved partners.</li>
      </ul>
      <p className="mt-3">This note can be shared with approved partner tools under our access rules.</p>
      <p className="mt-1 font-medium">Current site address: {host || siteStrings.labels.loadingDomain}</p>
      <p className="mt-1">If you manage a partner tool, follow the access page to start reading full reports.</p>
    </aside>
  );
}
