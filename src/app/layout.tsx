import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const Header = () => (
  <header>
    Header
    <Link href='/'>return Home</Link>
  </header>
);
const Footer = () => <footer>Footer</footer>;
