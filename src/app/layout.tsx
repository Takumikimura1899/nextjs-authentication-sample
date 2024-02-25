import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';
import { auth } from '@/auth';
import Image from 'next/image';

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
const Header = async () => (
  <header>
    <div className='flex mx-4 h-auto items-center'>
      <nav>
        <Link href='/'>
          <Image
            src='/logo.png
          '
            alt='topページへ'
            height={40}
            width={40}
          />
        </Link>
      </nav>
      <UserInfo />
    </div>
  </header>
);
const Footer = () => <footer>Footer</footer>;

const UserInfo = async () => {
  const session = await auth();
  const userName = session?.user.name || 'ゲスト';
  return (
    <div className='ml-auto'>
      <p>Welcome {userName}</p>
    </div>
  );
};
