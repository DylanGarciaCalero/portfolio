import { HiHome } from 'react-icons/hi'
import { AiFillProject } from 'react-icons/ai'
import { MdContactless } from 'react-icons/md'

const MobileNavigation = () => {
  return (
    <nav className="w-screen h-24 fixed overflow-hidden before:shadow-mobileNav dark:before:shadow-mobileNavDark before:absolute before:bottom-3/4 before:w-screen before:h-full before:rounded-3xl bottom-0 md:hidden">
      <ul className="flex w-full justify-evenly absolute bottom-0 h-16 items-center">
        <li>
          <a className='flex flex-col justify-center items-center gap-1' 
            onClick={e => {
              let contact = document.getElementById("contact");
              e.preventDefault();  // Stop Page Reloading
              contact && contact.scrollIntoView({ behavior: "smooth", block: "start"});
            }}
          >
            <MdContactless size={28} className='fill-white '/>
            <p className='text-xs text-white '>contact</p>
          </a>
        </li>
        <li>
          <a className='flex flex-col justify-center items-center gap-1' 
            onClick={e => {
              e.preventDefault();  // Stop Page Reloading
              window.scrollTo({ top:0, behavior: "smooth"});
            }}
          >
            <HiHome size={28} className='fill-white '/>
            <p className='text-xs text-white'>home</p>
          </a>
        </li>
        <li>
          <a className='flex flex-col justify-center items-center gap-1' 
            onClick={e => {
              let projects = document.getElementById("projects");
              e.preventDefault();  // Stop Page Reloading
              projects && projects.scrollIntoView({ behavior: "smooth", block: "start"});
            }}
          >
            <AiFillProject size={28} className='fill-white '/>
            <p className='text-xs text-white '>projects</p>
          </a>
        </li>
      </ul>
    </nav>
  )
};
export default MobileNavigation;