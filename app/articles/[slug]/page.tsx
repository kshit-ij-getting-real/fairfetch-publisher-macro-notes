import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/ArticleLayout';
import { publicArticles } from '@/lib/content';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return publicArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = publicArticles.find((item) => item.slug === params.slug);
  if (!article) {
    return {};
  }
  return {
    title: `${article.title} | Macro Notes`,
    description: article.summary
  };
}

export default function ArticlePage({ params }: Props) {
  const article = publicArticles.find((item) => item.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout title={article.title} date={article.date}>
      <section>
        <h2 className="mb-2 text-2xl font-semibold">Thesis</h2>
        {article.thesis.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Signals</h2>
        <ul className="list-disc space-y-2 pl-6">
          {article.signals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Scenarios</h2>
        <ul className="list-disc space-y-2 pl-6">
          {article.scenarios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Risks</h2>
        <ul className="list-disc space-y-2 pl-6">
          {article.risks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </ArticleLayout>
  );
}
