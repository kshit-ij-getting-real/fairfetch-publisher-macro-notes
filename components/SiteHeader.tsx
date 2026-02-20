import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/methodology', label: 'Methodology' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/articles', label: 'Articles' },
  { href: '/premium', label: 'Premium' },
  { href: '/fairfetch', label: 'FairFetch' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-5">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
          Macro Notes
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
