import Link from 'next/link';

import { buttonVariants } from '@/components/button';

export default function HomePage() {
  return (
    <main className="py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Preview Email using{' '}
          <Link
            href="https://react.email/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-500"
          >
            <code>react-email</code>
          </Link>{' '}
          <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <div className="mt-4">
          <Link href="/preview" className={buttonVariants()}>
            See Preview
          </Link>
        </div>
      </div>
    </main>
  );
}
