'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface SidbarNavProps {
  items: string[];
}

function SidbarNav({ items }: SidbarNavProps) {
  const pathname = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <ul className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={`/preview/${item}`}
            className={cn(
              'group flex w-full items-center rounded-md px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800',
              pathname === `/preview/${item}` && 'bg-slate-100 dark:bg-slate-800'
            )}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SidbarNav;
