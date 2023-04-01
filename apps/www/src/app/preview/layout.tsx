import { ScrollArea } from '@/components/scroll-area';
import SidbarNav from '@/components/sidebar-nav';

import { getEmails } from './preview-utils';

async function PreviewLayout({ children }: { children: React.ReactNode }) {
  const { emails } = await getEmails();

  return (
    <div className="flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6">
      <aside className="fixed top-20 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block">
        <ScrollArea className="py-6 pr-6">
          <h4 className="mb-1 px-2 py-1 font-semibold">Preview</h4>
          <SidbarNav items={emails} />
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}

export default PreviewLayout;
