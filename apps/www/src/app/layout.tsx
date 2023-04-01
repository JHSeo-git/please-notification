import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: {
    default: 'Preview Notification',
    template: '%s | Preview Notification',
  },
  description: 'Preview a email for notification',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className="scroll-smooth antialiased motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={cn('min-h-screen font-sans', inter.variable)}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="container flex-1">{children}</div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
