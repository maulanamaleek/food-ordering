import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Providers from '@/utils/RQProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food Ordering App',
  description: 'Order Food Online',
  colorScheme: 'only light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
