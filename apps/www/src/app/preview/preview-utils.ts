import fs from 'node:fs/promises';
import path from 'node:path';

export const CONTENT_DIR = 'src/emails';

export const getEmails = async () => {
  const emailsDirectory = path.join(process.cwd(), CONTENT_DIR);
  const filenames = await fs.readdir(emailsDirectory);
  const emails = filenames
    .map((file) => file.replace(/\.(jsx|tsx)$/g, ''))
    .filter((file) => file !== 'components');
  return { emails, filenames };
};
