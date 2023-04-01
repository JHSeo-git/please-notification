import Link from 'next/link';

import { buttonVariants } from './button';
import { Icons } from './icons';
import ModeToggle from './mode-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">React Email Preview</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/preview">Preview</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-2">
            <Link
              href="https://github.com/JHSeo-git/please-notification"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-slate-700 dark:text-slate-400',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
