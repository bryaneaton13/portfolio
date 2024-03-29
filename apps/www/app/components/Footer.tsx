import { Links } from 'shared-utils';

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow flex items-center justify-center p-6">
      <span className="text-sm text-gray-500 text-center">
        © {new Date().getFullYear()}{' '}
        <a href={Links.Www} className="hover:underline">
          Bryan Eaton
        </a>
        . All Rights Reserved.
        <br />
        <a href={Links.Repo} className="underline hover:text-gray-400 transition-all">
          GitHub Repo
        </a>
      </span>
    </footer>
  );
}
