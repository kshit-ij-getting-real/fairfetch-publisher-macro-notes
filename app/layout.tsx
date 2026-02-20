import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { siteStrings } from '@/src/strings';

export const metadata: Metadata = {
  title: siteStrings.siteName,
  description: 'Simple market notes with free previews and members-only full reports.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
