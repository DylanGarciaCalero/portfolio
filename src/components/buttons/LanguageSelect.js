import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoLanguage } from 'react-icons/io5'
import Link from "next/link";

const LanguageSelect = () => {

  const router = useRouter()

  const [selectedLanguage, setSelectedLanguage] = useState(router.locale);
  const [languageVis, setLanguageVis] = useState(false)
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);

  const editLanguage = () => {
    setLanguageVis(!languageVis)
  }

  if(!mounted) return null;

  return (
    <>
      <IoLanguage className="fill-primary dark:fill-white cursor-pointer" size={30} onClick={() => editLanguage()}/>
      <div id="language-background" className={languageVis ? 'fixed h-screen w-screen top-0 left-0 bg-secondary opacity-60' : 'hidden'} onClick={() => setLanguageVis(false)}>
      </div>
      <ul className={languageVis ? 'absolute right-0 top-0 bg-primary rounded-lg border-2 border-tertiary' : 'hidden'}>
        {router.locales.map((locale) => (
          locale !== router.locale ?
          <li key={locale} className="mr-14 text-sm w-full h-16 text-white hover:bg-highlight">
            <Link className="w-full h-full flex items-center justify-center" href={router.asPath} locale={locale} onClick={() => { 
              setSelectedLanguage(locale)
              editLanguage()
              }}>
              {locale}
            </Link>
          </li> : ''
        ))}
      </ul>
    </>
    
  )
};

export default LanguageSelect;