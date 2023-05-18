import Image from "next/image";
import selfie from '../../../public/images/me.jpg'
import openToWork from '../../../public/images/opentowork.png'
import Button from "../buttons/Button";
import { FaHandPeace } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation';
import Link from "next/link";

const Hero = () => {

  const { t } = useTranslation()

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/CV_DylanGarciaCalero.pdf';
    link.download = 'CV_DylanGarciaCalero.pdf';
    link.click();
  };

  return (
    <section id="hero" className="w-full pb-24 transition ease-in-out duration-200 lg:w-full mx-auto pt-10 md:pt-0 md:h-big md:flex md:flex-col md:justify-center bg-white dark:bg-primary rounded-b-lg ">
      <div className="w-32 h-32 md:h-32 md:w-32 rounded-full overflow-hidden mx-auto md:mt-8 relative">
        <Image
          src={selfie}
          alt="selfie"
          className="object-cover"
        />
        <Image
          src={openToWork}
          alt="selfie"
          className="absolute top-0 left-0"
        />
      </div>
      
      <span id="greeting" className="flex gap-2 items-center justify-center bg-light dark:bg-secondary transition ease-in-out duration-200 rounded-md w-fit mx-auto p-1 px-3 relative text-sm font-medium mt-4 dark:text-text-primary">
        {t("common:myname")}<FaHandPeace size={16}/>
        <figure className="bg-light dark:bg-secondary transition ease-in-out duration-200 absolute w-2 h-2 rotate-45 -top-1"></figure>
      </span>
      <div id="introduction" className="w-3/4 md:w-1/2 mx-auto">
        <h2 className="text-3xl md:text-5xl mt-4 text-center text-primary text-opacity-50 dark:text-transparent bg-clip-text bg-gradient-to-r from-text-primary">Building <span className="text-[#003049] text-opacity-50">responsive applications</span> , both on mobile and web.</h2>
      </div>
      <div id="learn-more" className="flex flex-row gap-2 mt-8 w-fit mx-auto">
        <a 
          onClick={e => {
            let contact = document.getElementById("contact");
            e.preventDefault();  // Stop Page Reloading
            contact && contact.scrollIntoView({ behavior: "smooth", block: "start"});
          }} className="bg-secondary p-2 px-3 border border-text-primary border-opacity-10 transition ease-in-out duration-300 hover:text-primary rounded-md text-sm text-white dark:text-text-primary hover:bg-highlight cursor-pointer">contact me</a>
            <button className="bg-secondary p-2 px-3 border border-text-primary border-opacity-10 transition ease-in-out duration-300 hover:text-primary rounded-md text-sm text-white dark:text-text-primary hover:bg-highlight" onClick={handleDownload}>
              Download Resume
            </button>
      </div>
    </section>
  )
};
export default Hero;