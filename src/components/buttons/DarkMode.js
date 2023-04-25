import { MdDarkMode, MdOutlineLanguage, MdLightMode } from 'react-icons/md'
import { useState, useEffect } from 'react';
import {useTheme} from "next-themes";

const DarkMode = () => {

  const [mounted, setMounted] = useState(false);
  const {systemTheme , theme, setTheme} = useTheme ();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger= () => {

    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <button role="button" onClick={() => setTheme('light')}>
          <MdLightMode size={30} color="#fff" />
        </button>
      )
    }

    else {
      return (
        <button role="button" onClick={() => setTheme('dark')}>
          <MdDarkMode size={30} color="#000"/>
        </button>
      )
    }
  };

  return (
    <span>
      {renderThemeChanger()}
    </span>
  );
};
export default DarkMode;