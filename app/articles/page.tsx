import type { Metadata } from 'next';
import Link from 'next/link';
import { publicArticles } from '@/lib/content';
import { siteStrings } from '@/src/strings';

export const metadata: Metadata = {
  title: 'Free preview notes | Macro Notes',
  description: 'Quick, free previews that explain the key market idea in plain language.'
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Free preview notes</h1>
      <p className="mt-3 text-slate-700">These previews give you the main takeaway before you decide to read a full report.</p>
      {publicArticles.length === 0 ? (
        <p className="mt-8 rounded-lg border border-slate-200 bg-white p-5 text-slate-700">
          No free preview notes yet. New previews appear here as soon as a note is published.
        </p>
      ) : (
        <ul className="mt-8 space-y-6">
          {publicArticles.map((article) => (
            <li key={article.slug} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">{article.date}</p>
              <Link href={`/articles/${article.slug}`} className="mt-1 block text-xl font-semibold hover:underline">
                {article.title}
              </Link>
              <p className="mt-2 text-slate-700">{article.summary}</p>
              <Link href={`/articles/${article.slug}`} className="mt-3 inline-block text-sm font-medium text-slate-900 underline hover:no-underline">
                {siteStrings.actions.readFreePreview}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
