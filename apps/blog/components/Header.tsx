import ThemeSwitch from './ThemeSwitch';

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between my-8 items-center">
      <a href="/" className="text-2xl text-primary-500 font-bold">
        Bryan Eaton
      </a>

      <div className="flex flex-row items-center text-sm md:text-base mt-2 md:mt-0">
        <a href="https://twitter.com/bryaneaton131" target="_blank" rel="noopener noreferrer" className="mr-4">
          Twitter
        </a>
        <a href="https://github.com/bryaneaton13" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Header;
