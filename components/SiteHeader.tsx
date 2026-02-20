import Link from 'next/link';
import { siteStrings } from '@/src/strings';

const links = [
  { href: '/', label: siteStrings.nav.home },
  { href: '/about', label: siteStrings.nav.about },
  { href: '/methodology', label: siteStrings.nav.methodology },
  { href: '/pricing', label: siteStrings.nav.pricing },
  { href: '/articles', label: siteStrings.nav.articles },
  { href: '/premium', label: siteStrings.nav.premium },
  { href: '/fairfetch', label: siteStrings.nav.fairfetch }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-5">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
          {siteStrings.siteName}
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
