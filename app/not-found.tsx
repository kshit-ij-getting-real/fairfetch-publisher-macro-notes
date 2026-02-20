import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-slate-700">
        The page link may be old or incomplete. Go back to Home and choose a note from the latest list.
      </p>
      <div className="mt-6">
        <Link href="/" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
          Go to home page
        </Link>
      </div>
    </div>
  );
}
