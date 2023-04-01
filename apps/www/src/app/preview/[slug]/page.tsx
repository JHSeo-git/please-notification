import '@/styles/shiki.css';

import fs from 'node:fs/promises';

import { render } from '@react-email/render';
import { notFound } from 'next/navigation';
import shiki from 'shiki';
import title from 'title';

import CopyToClipboard from '@/components/copy-to-clipboard';
import { IframeAuto } from '@/components/iframe-auto';

import { CONTENT_DIR, getEmails } from '../preview-utils';

const getTitle = (text: string) => {
  return title(text.replace(/-/g, ' '));
};

type PageParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const { emails } = await getEmails();

  return emails.map((email) => ({ slug: email }));
}

interface PageProps {
  params: PageParams;
}
async function PreviewSlugPage({ params }: PageProps) {
  const { filenames } = await getEmails();
  const template = filenames.filter((email) => {
    const [fileName] = email.split('.');
    return params.slug === fileName;
  });

  const Email = (await import(`../../../emails/${params.slug}`)).default;

  if (!Email) {
    notFound();
  }

  const markup = render(<Email />, { pretty: true });
  const path = `${process.cwd()}/${CONTENT_DIR}/${template[0]}`;
  const reactMarkup = await fs.readFile(path, { encoding: 'utf-8' });
  const highlightedMarkup = await shiki
    .getHighlighter({ theme: 'github-dark' })
    .then((highlighter) => highlighter.codeToHtml(reactMarkup, { lang: 'tsx' }));

  return (
    <main className="relative py-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {getTitle(params.slug)}
      </h1>
      <h2 className="mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight dark:border-b-slate-700">
        Preview
      </h2>
      <IframeAuto
        className="mt-6 w-full border border-slate-200 dark:border-b-slate-700"
        srcDoc={markup}
        title={params.slug}
      />
      <h2 className="mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight dark:border-b-slate-700">
        React Code
      </h2>
      <CopyToClipboard className="my-6 rounded-md">
        <div
          {...{ ['data-shiki-pretty-code-fragment']: '' }}
          dangerouslySetInnerHTML={{
            __html: highlightedMarkup,
          }}
        />
      </CopyToClipboard>
    </main>
  );
}

export default PreviewSlugPage;
