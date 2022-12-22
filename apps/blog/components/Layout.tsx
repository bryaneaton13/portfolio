import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import classNames from 'classnames';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={classNames('container mx-auto max-w-5xl flex flex-col min-h-screen px-4', inter.className)}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
