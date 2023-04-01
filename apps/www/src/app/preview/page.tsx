import { notFound, redirect } from 'next/navigation';

import { getEmails } from './preview-utils';

async function PreviewIndex() {
  const { emails } = await getEmails();

  if (!emails?.length) {
    notFound();
  }

  redirect(`/preview/${emails[0]}`);
}

export default PreviewIndex;
