import { Dancing_Script, Inter } from 'next/font/google';
import './globals.css';
import { Header } from './_components/Header';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dancing-script',
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
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <Header />
        <main className="pt-12">{children}</main>
      </body>
    </html>
  );
}
