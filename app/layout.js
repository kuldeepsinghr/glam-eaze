import { Dancing_Script, Inter } from 'next/font/google';
import './globals.css';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <Header />
        <main className="pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
