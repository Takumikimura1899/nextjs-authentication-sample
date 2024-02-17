import { ReactNode } from 'react';

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

const Header = () => <header>Header</header>;
const Footer = () => <footer>Footer</footer>;
