import { Dancing_Script, Inter } from 'next/font/google';
import './globals.css';
import { Header } from './_components/Header';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'GlamEaze',
    template: '%s GlamEaze',
  },
  description: 'Providing the best sevices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
