'use client';

import { useState } from 'react';

export function PremiumLicenseTools() {
  const [copied, setCopied] = useState(false);

  const copyLicensedUrl = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set('via', 'fairfetch');
    url.searchParams.set('license', 'DISPLAY');

    await navigator.clipboard.writeText(url.toString());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={copyLicensedUrl}
        className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
      >
        Copy AI licensed URL
      </button>
      {copied ? <span className="ml-3 text-sm text-emerald-700">Copied</span> : null}
    </div>
  );
}
