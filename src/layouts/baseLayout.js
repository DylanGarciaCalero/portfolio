import DarkMode from "@/components/buttons/DarkMode";
import LanguageSelect from "@/components/buttons/LanguageSelect";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNavigation from "@/components/layout/MobileNavigation";
import Head from "next/head";

import { Maven_Pro } from "next/font/google";

const inter = Maven_Pro({
  variable: '--maven-font',
  subsets: ['latin']
})

const BaseLayout = ({ children }) => {
  
  return (
    <div id="wrapper" className={`bg-light dark:bg-dark p-0 lg:p-10 md:pb-0 lg:pb-0 transition ease-in-out duration-200 lg:px-52 ${inter.variable} font-sans`}>
      <div id="content" className="min-h-screen pb-10 md:pb-0 md:rounded-t-lg">
        <Header/>
        <span className="absolute top-4 right-4 flex flex-col gap-4 md:hidden">
          <DarkMode/>
          <LanguageSelect/>
        </span>
        <main>{ children }</main>
        <Footer/>
        <MobileNavigation/>
      </div>
    </div>
  )
};
export default BaseLayout;