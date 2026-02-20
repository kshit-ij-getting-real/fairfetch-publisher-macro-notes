import { ReactNode } from 'react';
import { FairFetchLicenseBox } from '@/components/FairFetchLicenseBox';
import { siteStrings } from '@/src/strings';

interface ArticleLayoutProps {
  title: string;
  date: string;
  children: ReactNode;
}

export function ArticleLayout({ title, date, children }: ArticleLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <p className="text-sm uppercase tracking-wide text-slate-500">{date}</p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-slate-950">{title}</h1>
        <p className="mt-3 text-sm font-medium text-slate-600">{siteStrings.authorLine}</p>
      </header>
      <div className="space-y-6 leading-7 text-slate-800">{children}</div>
      <FairFetchLicenseBox />
    </article>
  );
}
