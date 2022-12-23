import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import classNames from 'classnames';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames(
        'bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 antialiased dark:bg-gradient-to-l dark:from-gray-700 dark:to-gray-900 dark:text-gray-50 transition-colors duration-100',
        inter.className,
      )}
    >
      <div className={classNames('container mx-auto max-w-5xl flex flex-col min-h-screen px-4')}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
