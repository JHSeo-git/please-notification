import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Please notification',
  description: 'Generate a notification for email',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="antialiased">
      <body className={cn('font-sans', inter.variable)}>{children}</body>
    </html>
  );
}
