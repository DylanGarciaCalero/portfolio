import DarkMode from "../buttons/DarkMode";
import Logo from "./Logo";
import Navigation from "./Navigation";
import LanguageSelect from "../buttons/LanguageSelect";

const Header = () => {
  return (
    <header id="header" className=" hidden md:flex bg-white transition ease-in-out duration-200 dark:bg-primary rounded-t-lg md:relative md:flex-row md:h-16 md:items-center md:justify-between md:border-b md:border-b-light md:dark:border-b-dark md:px-4 md:text-text-primary">
      <span className="flex justify-between w-full max-w-6xl mx-auto">
        <Logo/>
        <Navigation navItems={[{name:'github', link:'https://github.com/DylanGarciaCalero?tab=repositories'}, {name:'linkedIn', link: 'https://www.linkedin.com/in/dylan-garcia-calero-43446a1b7/'}]}/>
      </span>
      <span className="flex flex-row gap-4 ml-8">
        <DarkMode/>
        <LanguageSelect/>
      </span>
    </header>
  )
};

export default Header;