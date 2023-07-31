import { Noto_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';

const noto_Sans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  display: 'swap',
  variable: '--font-noto-sans',
});

export function Font({ children }: PropsWithChildren) {
  return (
    <div className={`${noto_Sans.variable} font-noto-sans`}>{children}</div>
  );
}
