import './globals.css';
import { Font } from './Font';
import { PropsWithChildren } from 'react';
import { Providers } from './Providers';

export const metadata = {
  authors: { name: 'Imraan-Hendricks', url: 'https://www.imraanhendricks.com' },
  title: 'Guitar Repair ZA',
  description:
    'Unlock the True Sound of Your Guitar: Expert repairs and setups that bring your instrument back to life without breaking the bank, offered by Guitar Repairs ZA.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Font>{children}</Font>
        </Providers>
      </body>
    </html>
  );
}
