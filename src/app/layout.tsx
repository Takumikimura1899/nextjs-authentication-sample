import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';
import { auth } from '@/auth';

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
    <div className='flex mx-4'>
      <div className='flex space-x-4'>
        <h1>Header Logo</h1>
        <nav>
          <Link href='/'>Home</Link>
        </nav>
      </div>
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
