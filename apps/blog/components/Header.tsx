import ThemeSwitch from './ThemeSwitch';
import { Links } from 'shared-utils';
import Link from 'next/link';

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between my-8 items-center">
      <Link href="/" className="text-2xl text-primary-500 font-bold">
        Bryan Eaton
      </Link>

      <div className="flex flex-row items-center text-sm md:text-base mt-2 md:mt-0">
        <a href={Links.Twitter} target="_blank" rel="noopener noreferrer" className="mr-4">
          Twitter
        </a>
        <a href={Links.Github} target="_blank" rel="noopener noreferrer" className="mr-4">
          Github
        </a>
        <a href={Links.Www} rel="noopener noreferrer">
          About
        </a>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Header;
