import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Layouts/Navigation';
import Footer from '@/components/Footer';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ReparaTech',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-base-100 text-base-content`}>
        <div className='sticky top-0 z-10'>
          <Navigation/>
        </div>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
