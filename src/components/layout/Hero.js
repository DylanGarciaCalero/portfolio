import Image from "next/image";
import selfie from '../../../public/images/me.jpg'
import Button from "../buttons/Button";
import { FaHandPeace } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation';

const Hero = () => {

  const { t } = useTranslation()

  return (
    <section id="hero" className="w-full pb-24 lg:w-full mx-auto pt-14 md:pt-0 md:h-big md:flex md:flex-col md:justify-center bg-white dark:bg-primary rounded-b-lg ">
      <Image
        src={selfie}
        className="w-32 h-32 md:h-32 md:w-32 object-cover border-2 border-primary rounded-full mx-auto md:mt-8"
      />
      <span id="greeting" className="flex gap-2 items-center justify-center text-md font-medium mt-2 text-primary dark:text-text-primary">{t("common:myname")}<FaHandPeace size={16}/></span>
      <div id="introduction" className="w-3/4 md:w-1/2 mx-auto">
        <h2 className="text-3xl md:text-5xl mt-4 text-center text-primary text-opacity-50 dark:text-transparent bg-clip-text bg-gradient-to-r from-text-primary">"Building <span className="text-[#003049] text-opacity-50">responsive applications</span> , both on mobile and web."</h2>
      </div>
      <div id="learn-more" className="flex flex-row gap-2 mt-8 w-fit mx-auto">
        <a href="/" 
          onClick={e => {
            let contact = document.getElementById("contact");
            e.preventDefault();  // Stop Page Reloading
            contact && contact.scrollIntoView({ behavior: "smooth", block: "start"});
          }} className="bg-secondary p-2 px-3 border border-text-primary border-opacity-10 transition ease-in-out duration-500 hover:text-primary rounded-md text-sm text-white dark:text-text-primary hover:bg-highlight">contact me</a>
        <a className="bg-secondary p-2 px-3 border border-text-primary border-opacity-10 transition ease-in-out duration-500 hover:text-primary rounded-md text-sm text-white dark:text-text-primary hover:bg-highlight" target="_blank" rel="noopener noreferrer" href='../../../public/files/CV_DylanGarciaCalero.pdf' download>download resume</a>
      </div>
    </section>
  )
};
export default Hero;