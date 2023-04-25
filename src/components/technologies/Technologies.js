import ListItem from "../list/ListItem";
import { FaReact, FaGithub, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr'

const Technologies = () => {
  return (
    <section className="w-full bg-secondary dark:bg-secondary rounded-t-lg md:rounded-lg mt-2 md:my-2">
      <ul className="list-none max-w-8xl mx-auto h-32 flex-row justify-evenly items-center grid grid-cols-3 md:grid-cols-6 md:px-20">
        <li className=" flex justify-center">
          <FaReact className="fill-tertiary h-8 w-8 md:h-12 md:w-12"/>
        </li>
        <li className=" flex justify-center">
          <GrGraphQl className="fill-tertiary h-8 w-8 md:h-12 md:w-12"/>
        </li>
        <li className=" flex justify-center">
          <FaNodeJs className="fill-tertiary h-8 w-8 md:h-12 md:w-12"/>
        </li>
        <li className=" flex justify-center">
          <FaHtml5 className="fill-tertiary h-8 w-8 md:h-12 md:w-12"/>
        </li>
        <li className=" flex justify-center">
          <FaCss3Alt className="fill-tertiary h-8 w-8 md:h-12 md:w-12"/>
        </li>
        <li className=" flex justify-center">
          <FaPhp className="fill-tertiary h-8 w-8 md:h-12 md:w-12"/>
        </li>
      </ul>
    </section>
  )
};
export default Technologies;