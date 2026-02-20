import type { Metadata } from 'next';
import Link from 'next/link';
import { publicArticles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Articles | Macro Notes',
  description: 'Public macro research teasers from Macro Notes.'
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Public Articles</h1>
      <ul className="mt-8 space-y-6">
        {publicArticles.map((article) => (
          <li key={article.slug} className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">{article.date}</p>
            <Link href={`/articles/${article.slug}`} className="mt-1 block text-xl font-semibold hover:underline">
              {article.title}
            </Link>
            <p className="mt-2 text-slate-700">{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
